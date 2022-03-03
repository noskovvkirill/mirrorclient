import { supabase } from 'src/client'

const Search = async (query: string, type?: 'ENTRIES' | 'PUBLICATIONS') => {
    if (type === 'ENTRIES') {
        const { data, error } = await supabase
            .from('mirroritems_test')
            .select('digest, title, publication, timestamp')
            .textSearch('title', query, {
                type: 'plain',
                config: 'english'
            })
            .limit(5)
        return data
    } else if (type === 'PUBLICATIONS') {
        const { data, error } = await supabase
            .rpc('fuzzy_search_publication', { str1: query })
        return data
    }

    const promiseItems = await supabase
        .from('mirroritems_test')
        .select('digest, title, publication, timestamp')
        .textSearch('title', query, {
            type: 'plain',
            config: 'english'
        })
        .limit(5)

    const promiseSearch = await supabase
        .rpc('fuzzy_search_publication', { str1: query })

    return [promiseItems, promiseSearch]

}

export default Search