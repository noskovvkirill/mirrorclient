

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
    const { method, } = req

    if (!req.session.siwe || !req.session.siwe.id) {
        return res.json({ ok: false })
    }

    switch (method) {
        case 'GET':
            try {
                const { error } = await supabase
                    .from('users')
                    .update({ email: null, areNotificationsEnabled: false })
                    .eq('id', req.session.siwe.id)
                    .single()
                if (error) {
                    throw error
                }
            } catch (e) {
                console.log(e)
                res.json({ ok: false })
                break;
            }
            res.send({ ok: true })

            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}






export default withIronSessionApiRoute(handler, ironOptions)