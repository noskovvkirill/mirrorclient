import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next'
import { gql, request } from 'graphql-request';
import thunder from 'src/fetcher'

const supabaseUrl = 'https://tcmqmkigakxeiuratohw.supabase.co'
const supabaseKey = process.env.SERVICE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

const fetchEntry = (digest: string) => {
    return thunder('query')({
        entry: [{
            digest: digest
        }, {
            body: true,
            title: true,
            entryId: true,
            publishedAtTimestamp: true,
            publishStatus: true,
            canonicalUrl: true,
            featuredImage: {
                mimetype: true,
                url: true
            },
            publisher: {
                project: {
                    address: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true,
                    ens: true,
                    theme: {
                        accent: true
                    }
                },
                member: {
                    address: true,
                    ens: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true

                }
            },
        },
        ],
    }
    )
}


export const queryAll = gql`
query Transaction($after:String!){
		transactions(first:100, after:$after, sort:HEIGHT_ASC,
        tags: [{ name: "App-Name", values: ["MirrorXYZ"] }]) {
			edges {
                cursor
				node {
					id
                    signature
                    data{
                        size
                        type
                    }
                    owner{
                        address
                        key
                    }
					tags {
						name
						value
					}
				}
            cursor
			}
               pageInfo{
                hasNextPage
            }
		}
	}`


const groupBy = <T, K extends keyof T>(array: T[], groupOn: K | ((i: T) => string)): Record<string, T[]> => {
    const groupFn = typeof groupOn === 'function' ? groupOn : (o: T) => o[groupOn];
    return Object.fromEntries(
        array.reduce((acc, obj) => {
            const groupKey = groupFn(obj);
            return acc.set(groupKey, [...(acc.get(groupKey) || []), obj]);
        }, new Map())
    ) as Record<string, T[]>;
};

export const getMergedPublication = async (cursor?: string) => {
    const data = await request('https://arweave.net/graphql', queryAll, {
        after: cursor ? cursor : ""
    }).then((data) => data.transactions)
    return [data.edges, data.pageInfo.hasNextPage]
}


type ArweaveItem = {
    id: string,
    contentDigest: string,
    originalDigest: string,
    contributor: string,
}

const getNewData = async (cursor?: string): Promise<[Record<string, ArweaveItem[]>, string, boolean]> => {
    const publ = await getMergedPublication(cursor)
    const entries = publ[0]
    const hasNextPage = publ[1]
    let newcursor = entries[entries.length - 1]?.cursor || cursor
    const txData = entries.map(async ({ node }: { node: any }) => {
        try {
            let id = node.id
            let contentDigest: string | undefined
            let originalDigest: string | undefined
            let contributor: string | undefined
            node.tags.forEach(({ name, value }: { name: string, value: string }) => {
                if (name === 'Contributor') {
                    contributor = value
                }
                if (name === 'Content-Digest') {
                    contentDigest = value
                }
                if (name === 'Original-Content-Digest') {
                    originalDigest = value
                }
            })
            if (!contentDigest) return
            if (!originalDigest) return
            if (!contributor) return
            return ({
                id,
                contentDigest,
                originalDigest,
                contributor,
            })

        } catch (e) {
            console.log('error', e)
            return null
        }
    })
    const data = await Promise.all(txData)
    const items = groupBy<ArweaveItem, 'originalDigest'>(data, (item: any) => item?.originalDigest || item?.contentDigest)
    return [items, newcursor, hasNextPage]
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { data, error } = await supabase.from('arweaveSync')
        .select('syncId')
    if (error) {
        res.send({ ok: false })
    }
    try {
        let isNewData = true
        let syncId = data && data?.length > 0 ? data[0].syncId : undefined
        let curs = parseInt(Buffer.from(syncId, 'base64').toString('ascii').replace(/\[|\]/g, '').split(',')[1])
        let date = new Date()
        const cursor = Buffer.from(JSON.stringify([date, curs])).toString('base64')
        syncId = cursor
        let newData: Record<string, ArweaveItem[]>[] = []
        let i = 0;
        while (isNewData && i < 10) {
            console.log('fetching...', i)
            const chunk: [Record<string, ArweaveItem[]>, string, boolean] = await getNewData(syncId)
            newData.push(chunk[0])
            const hasNextPage = chunk[2]
            console.log('has next page', hasNextPage)
            syncId = chunk[1]
            isNewData = hasNextPage
            i++;
        }
        const { error: errorsync } = await supabase.from('arweaveSync').update({ id: 1, syncId: syncId })
        if (errorsync) {
            console.log('errorsync', errorsync)
            res.send({ ok: false })
        }

        const newDataMerged = newData.reduce((acc, item) => {
            Object.keys(item).forEach(key => {
                acc[key] = [...(acc[key] || []), ...item[key]]
            })
            return acc
        }, {})

        const entriesAll = await Promise.all(Object.keys(newDataMerged).map(async (key) => {
            try {
                const { entry } = await fetchEntry(key)
                return {
                    id: entry?.entryId,
                    publishedAtTimestamp: entry?.publishedAtTimestamp,
                    digest: key,
                    title: entry?.title || '',
                    body: entry?.body || '',
                    publishStatus: entry?.publishStatus,
                    project: entry?.publisher?.project,
                    member: entry?.publisher?.member,
                }
            } catch (e) {
                console.log('error fetching entry', e)
                return null
            }
        }))
        const entries = entriesAll.filter(item => item?.id && item?.body && item?.title)
        const { error: errorEntries } = await supabase.from('mirroritems').upsert(entries)
        if (errorEntries) {
            console.log('errorEntries', errorEntries)
            return res.send({ ok: false })
        } else {
            res.send({ ok: true })
        }
    } catch (e) {
        console.log('error', e)
        res.send({ ok: false })
    }
}






export default handler