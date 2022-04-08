import Layout from '@/components/Layout'
import Entry from '@/components/Entry'
import { Box } from 'design-system'
import splitbee from '@splitbee/web';
import { useEffect } from 'react';
//utils
// import { supabase } from 'src/client'
// import getPublication from 'src/fetch/publication'
import getEntry from 'src/fetch/entry'

//types
import type { GetStaticProps } from 'next'
import type { EntryType } from 'types';

export async function getStaticPaths() {
    if (process.env.NODE_ENV === 'development') {
        const paths: Array<string | { params: { [key: string]: string } }> = []
        return ({ paths, fallback: 'blocking' })
    }
    // const { data } = await supabase
    //     .from('mirrorpublications')
    //     .select('*')

    const paths: Array<string | { params: { [key: string]: string } }> = []

    // const publications = data || []

    // const items: Array<string | { params: { [key: string]: string } }> = []
    // const length = publications.slice(0, 10).length
    // for (let i = 0; i <= length; i++) {
    //     const publication = publications[i]
    //     const entries = await getPublication(publication.ensLabel + '.mirror.xyz')
    //     if (!entries.projectFeed?.posts) {
    //         return
    //     }
    //     const path: Array<string | { params: { [key: string]: string } }> = entries?.projectFeed?.posts.map((entry: EntryType) => {
    //         const keyNew = entry.digest as string
    //         return ({ params: { article: keyNew, publication: publication.ensLabel } })
    //     })
    //     items.push(...path)
    // }
    // const paths = items.flat()

    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { article } = ctx.params as { article: string };
    if (!article) return ({ notFound: true })
    const { entry } = await getEntry(article)

    if (!entry) return ({ notFound: true })

    return {
        props: { entry: entry },
        revalidate: 60
    }
};

type Props = {
    entry: EntryType;
}

const Article = ({ entry }: Props) => {

    useEffect(()=>{
        if(entry?.digest){
            splitbee.track("Entry", {
                digest:entry.digest,
                type:'mirror_member'
            })
        }   
    },[entry])

    if (!entry) return <></>
    return (
        <Layout publisher={entry?.publisher}
            description={entry.body?.slice(0, 120)}
            cover={entry.featuredImage?.url} 
            title={entry.title + ' — by' + entry.author?.displayName || entry.publication?.displayName} twitterAuthor={entry.author?.displayName || entry.publication?.displayName}>
            <Box width='full' paddingY={{xs:'10', sm:'10', md:'16',lg:'16', xl:'16'}}>
                <Entry entry={entry} />
            </Box>
        </Layout>
    ) 
}

export default Article