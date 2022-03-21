import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from 'uuid';
import { withIronSessionApiRoute } from 'iron-session/next'


import { createClient } from '@supabase/supabase-js'

const ironOptions = {
    cookieName: 'siwe',
    password: process.env.SUPABASE_JWT_SECRET as string,
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
}
const supabaseUrl = 'https://tcmqmkigakxeiuratohw.supabase.co'
const supabaseKey = process.env.SERVICE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)


async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (!req.session.siwe?.id) {
        return res.status(500).json({ error: "user id was not found" })
    }
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', req.session.siwe?.id)


    if (error || !data) {
        return res.status(500).json({ ok: false })
    }

    if (data && data[0].email && data[0].email !== null) {
        return res.status(200).json({ ok: true })
    } else {
        return res.status(200).json({ ok: false })
    }

}

export default withIronSessionApiRoute(handler, ironOptions)