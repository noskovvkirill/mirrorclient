

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


const Subscribe = async ({ user, publication }: { user: string, publication: string }): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        const { error } = await supabase.from('user_subscriptions')
            .insert([{ type: 'PUBLICATION', publication: publication, owner: user }])
        if (error) {
            reject(error?.message)
            return;
        }
        resolve()
    })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query } = req
    const publication = query.publication
    if (typeof publication !== "string" || !req.session.siwe || !req.session.siwe.id) {
        return res.json({ ok: false })
    }

    switch (method) {
        case 'GET':
            try {
                await Subscribe({ user: req.session.siwe.id, publication: publication })
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