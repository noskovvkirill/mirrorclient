import { createClient } from '@supabase/supabase-js'
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'


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
        case 'GET':
            if (!req.session.siwe?.id) {
                res.json({ ok: false })
            }
            const { data, error } = await supabase.from('user_subscriptions')
                .select('publication, owner')
                .filter('owner', 'eq', req.session.siwe?.id)
            if (error || !data) {
                console.log('error', error, data)
                res.json({ ok: false })
            } else {
                res.send({ data: data })
            }
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}






export default withIronSessionApiRoute(handler, ironOptions)