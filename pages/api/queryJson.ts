import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next'

const supabaseUrl = 'https://tcmqmkigakxeiuratohw.supabase.co'
const supabaseKey = process.env.SERVICE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { data, error } = await supabase.from('mirroritems')
        .select('*')
        .not('project->domain', 'eq', null)

    if (error) {
        res.send({ ok: false })
    }

    res.send({ ok: true, data })

}






export default handler