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

    const { emailAddress } = req.body
    const nonce = uuidv4()
    const email = emailAddress.replace(/\\n/g, '').trim() as string;

    if (!email || !req.session.siwe?.id) {
        return res.status(500).json({ error: "email address was not found" })
    }

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .match({ email: email })

    if (data && data.length > 0) {
        return res.status(409).json({ error: "someone else was already signed with this email" })
    }

    if (error) {
        // console.log('e1', error)
        return res.status(500).json({ error: error.toString() })
    }

    //if user retries with different email, we invalidate the old request first
    const { error: errorConfirmations } = await supabase
        .from('users_email_confirmation')
        .delete()
        .eq('owner', req.session.siwe?.id)

    if (errorConfirmations) {
        console.log('e2', errorConfirmations)
        return res.status(500).json({ error: errorConfirmations.toString() })
    }

    const owner = req.session.siwe?.id;
    const expires_at = Number(new Date()) + 1800000
    const { error: nonceerror } = await supabase
        .from('users_email_confirmation')
        .insert({ nonce, email, owner, expires_at })

    if (nonceerror) {
        return res.status(500).json({ error: nonceerror.toString() })
    }
    return res.status(200).json({ message: "Confirmation was sent" });

}

export default withIronSessionApiRoute(handler, ironOptions)