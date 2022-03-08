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
    const { method, query } = req
    const publication = query.publication

    if (typeof publication !== "string") {
        return res.json({ ok: false })
    }

    switch (method) {
        case 'GET':
            const { data, error } = await supabase.from('mirrorpublications')
                .select('ensLabel')
                .filter('ensLabel', 'eq', publication)
            if (error || !data) {
                res.json({ ok: false, error: true })
            }
            if (data?.length === 0) {
                const { data: dataCreate, error: errorCreate } = await supabase.from('mirrorpublications')
                    .insert({
                        ensLabel: publication,
                        type: 'ADDRESS'
                    })
                if (errorCreate || !dataCreate) {
                    res.json({ ok: false, error: true })
                }
                res.json({ ok: true })

            } else {
                res.send({ ok: true })
            }
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default withIronSessionApiRoute(handler, ironOptions)