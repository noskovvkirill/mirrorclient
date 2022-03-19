import { supabase } from 'src/client'

const Search = async (query: string, type?: 'ENTRIES' | 'PUBLICATIONS') => {
    if (type === 'ENTRIES') {
        const { data, error } = await supabase
            .from('mirroritems')
            .select('digest, title, project, domain')
            .neq('project', null)
            .textSearch('title', query, {
                type: 'plain',
                config: 'english'
            })
            .limit(5)
        return [data, []]
    } else if (type === 'PUBLICATIONS') {
        const { data, error } = await supabase
            .rpc('fuzzy_search_publication', { str1: query })
        return [[], data]
    }

    const { data, error } = await supabase
        .from('mirroritems')
        .select('digest, title, project, domain')
        .neq('project', null)
        .textSearch('title', query, {
            type: 'plain',
            config: 'english'
        })
        .limit(5)

    const { data: dataPubl, error: errorPubl } = await supabase
        .rpc('fuzzy_search_publication', { str1: query })

    return [data, dataPubl]

}

export default Search