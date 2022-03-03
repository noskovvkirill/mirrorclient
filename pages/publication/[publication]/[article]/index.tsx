import Layout from '@/components/Layout'
import Entry from '@/components/Entry'
import { Box } from 'design-system'

//utils
import { supabase } from 'src/client'
import getPublication from 'src/fetch/publication'
import getEntry from 'src/fetch/entry'

//types
import type { GetStaticProps } from 'next'
import type { EntryType } from 'types';

export async function getStaticPaths() {
    if (process.env.NODE_ENV === 'development') {
        const paths: Array<string | { params: { [key: string]: string } }> = []
        return ({ paths, fallback: 'blocking' })
    }
    const { data } = await supabase
        .from('mirrorpublications')
        .select('*')

    const publications = data || []

    const items: Array<string | { params: { [key: string]: string } }> = []
    const length = publications.slice(0, 10).length
    for (let i = 0; i <= length; i++) {
        const publication = publications[i]
        const entries = await getPublication(publication.ensLabel)

        if (!entries.projectFeed?.posts) {
            return ({ paths: [] })
        }
        const path: Array<string | { params: { [key: string]: string } }> = entries.projectFeed.posts.map((entry: EntryType) => {
            const keyNew = entry.digest as string
            return ({ params: { article: keyNew } })
        })
        items.push(...path)
    }
    const paths = items.flat()
    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { article } = ctx.params as { article: string };
    if (!article) return ({ notFound: true })
    const { entry } = await getEntry(article)

    if (!entry) return ({ notFound: true })

    return {
        props: { entry: entry },
        revalidate: 10
    }
};

type Props = {
    entry: EntryType;
}

const Article = ({ entry }: Props) => {
    return (
        <Layout publisher={entry.publisher}
            description={entry.body?.slice(0, 120)}
            cover={entry.featuredImage?.url}
            title={entry.title + ' — by' + entry.publication?.displayName} twitterAuthor={entry.author?.displayName}>
            <Box width='full' paddingY={'16'}>
                <Entry entry={entry} />
            </Box>
        </Layout>
    )
}

export default Article