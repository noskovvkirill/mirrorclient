import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { SiweMessage } from 'siwe'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tcmqmkigakxeiuratohw.supabase.co'
const supabaseKey = process.env.SERVICE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)


const ironOptions = {
  cookieName: 'siwe',
  password: process.env.SUPABASE_JWT_SECRET as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        const { message, signature } = req.body
        const siweMessage = new SiweMessage(message)
        const fields = await siweMessage.validate(signature)
        let id
        const { data, error } = await supabase
          .from('users')
          .select('id')
          .eq('address', fields.address)
          .single()
        if (error) {
          res.json({ ok: false })
          break;
        }
        if (!data || data.length <= 0) {
          const { data: noncedata, error: nonceerror } = await supabase
            .from('users')
            .insert({ nonce: signature, address: fields.address })
            .single()
          if (nonceerror) {
            res.json({ ok: false })
            break;
          }
          id = noncedata.id
        } else {
          const { data: upsertData, error: upsertError } = await supabase
            .from('users')
            .upsert({ nonce: signature, address: fields.address, id: data.id })
            .single()
          if (upsertError) {
            res.json({ ok: false })
            break;
          }
          id = data.id
        }
        if (!id) {
          res.json({ ok: false })
          break;
        }
        req.session.siwe = Object.assign({}, { id: id }, fields)
        await req.session.save()
        res.json({ ok: true })
      } catch (_error) {
        console.log('error verify', _error)
        res.json({ ok: false })
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withIronSessionApiRoute(handler, ironOptions)