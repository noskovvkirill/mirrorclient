
//components
import Layout from '@/components/Layout'
import { Box, Stack, Tag, Text, Avatar, Button, IconLink, IconPlusSmall, AvatarGroup } from 'design-system'
import GridPage from '@/components/Layout/GridPage'
import { useAccount } from 'wagmi'

//utils
import { supabase } from 'src/client'
import { useRouter } from 'next/router'
// import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
//types
import type { GetStaticProps } from 'next'
import type { EntryType, PublisherType } from 'types'
import type { ParsedUrlQuery } from 'querystring'

import { useStore } from 'contexts'
import getPublication from 'src/fetch/publication'
import { useEffect, useState, useMemo } from 'react'
import splitbee from '@splitbee/web';


interface IParams extends ParsedUrlQuery {
    publication: string
}

export async function getStaticPaths() {
    //publications
    if (process.env.NODE_ENV === 'development') {
        const paths: Array<string | { params: { [key: string]: string } }> = []
        return ({ paths, fallback: 'blocking' })
    }

    const { data } = await supabase
        .from('mirrorpublications')
        .select('*')

    const publications = data || []

    const pathsPublications: Array<string | { params: { [key: string]: string } }> = publications.map((item: any) => {
        const key = item.ensLabel
        return ({ params: { publication: key } })
    })

    const paths: Array<string | { params: { [key: string]: string } }> = [...pathsPublications]
    return { paths, fallback: 'blocking' }
}




export const getStaticProps: GetStaticProps = async (ctx) => {

    const { publication } = ctx.params as IParams;


    if (!publication) {
        return { notFound: true }
    }


    try {
        const data = await getPublication(publication.toString() + '.mirror.xyz')
        const entries = data.projectFeed?.posts || [];
        delete data.projectFeed?.posts;
        return {
            props: { publisher: data.projectFeed, entries: entries, },
            revalidate: 60,
        }
    } catch (e) {
        console.log('e', e)
        return ({ notFound: true })
    }
};

type Props = {
    publisher: PublisherType['project'],
    entries: EntryType[];
}




const Publication = ({ entries, publisher }: Props) => {
    const router = useRouter()
    const { withEth } = useStore()
    const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null)
    const [{ data }] = useAccount()

    useEffect(()=>{
        if(publisher){
            console.log('Publisher 🐝')
            splitbee.track("Publisher", {
                address: publisher.address,
                name: publisher.displayName,
                domain: publisher.domain,
                type:'mirror_publication'
            })
        }   
    },[publisher])


    async function getSubscribed() {
        const { ok } = await fetch('/api/getSubscribedOne?publication=' + publisher?.domain?.split('.')[0])
            .then(res => {
                return res.json()
            })
        console.log('is subscribed', ok, publisher?.domain?.split('.')[0])
        setIsSubscribed(ok);
    }

    useEffect(() => {
        if (withEth) {
            getSubscribed()
        }
    }, [withEth])

    const Subcribe = async () => {
        setIsSubscribed(null)
        const { ok } = await fetch('/api/subscribe?publication=' + publisher?.domain?.split('.')[0])
            .then(res => res.json())
        if (ok === false) {
            setIsSubscribed(false)
        } else {
            setIsSubscribed(true)
        }
    }
    const UnSubcribe = async () => {
        setIsSubscribed(null)
        const { ok } = await fetch('/api/unsubscribe?publication=' + publisher?.domain?.split('.')[0])
            .then(res => res.json())
        if (ok === false) {
            setIsSubscribed(true)
        } else {
            setIsSubscribed(false)
        }
    }

    const members = useMemo(() => publisher?.members?.filter(member => member).map((member) => {
        return (
            {
                label: member?.displayName || member?.address || 'avatar',
                src: member?.avatarURL,
                placeholder: false
            }
        )
    }), [publisher])

 
    return (
        <Layout title={publisher?.displayName}
            description={publisher?.description}
            twitterAuthor={publisher?.displayName}
            cover={publisher?.headerImage?.url}>
            <Box width={'full'} paddingY={'16'}>
                <Box paddingBottom={'16'}>
                    <Stack direction={"vertical"} space={"6"} align={"center"}>
                        <Stack align='center' space='4'>
                            <Avatar
                                size={'28'}
                                label={publisher?.displayName || 'avatar'}
                                src={publisher?.avatarURL}
                            />

                            <Text
                            align={'center'}
                                color='text'
                                weight={
                                    'bold'
                                }
                                size='headingOne'
                            >{publisher?.displayName}
                            </Text>


                            <Text
                                align={'center'}
                                color='textTertiary'
                                weight={
                                    'bold'
                                }
                                size='root'
                            >{publisher?.description}
                            </Text>
                        </Stack>

                        <Box
                            display='flex'
                            flex={1}
                            backgroundColor={'backgroundSecondary'}
                            width={{ sm: 'full', xs: 'full', md: '128', xl: '128', lg: '128' }}
                            minWidth={{ sm: 'auto', xs: 'auto', md: '96', xl: '96', lg: '96' }}
                            padding={'4'}>

                            <Box width='full' >
                                <Box width='full' >
                                    <Stack direction={{ xs: 'vertical', sm: 'vertical', md: 'horizontal', lg: 'horizontal', xl: 'horizontal' }}>
                                        <Box width='full' paddingX={'4'} paddingY={{ xs: '0', sm: '0', md: '2', xl: '2', lg: '2' }}>
                                            <Stack direction='vertical' align='flex-start'>
                                                <Text weight='bold'
                                                    color='textTertiary'
                                                    size='small'
                                                >Members</Text>
                                                {members && (
                                                    <AvatarGroup limit={5}
                                                        size='8'
                                                        members={members} />
                                                )}
                                                <Box width='full' >
                                                    <Stack >
                                                        <Text weight='bold'
                                                            color='textTertiary'
                                                            size='small'
                                                        >Info</Text>

                                                        <Stack direction='horizontal' space={'2'} align='center'>
                                                            <a href={'https' + publisher?.domain}
                                                                target={'_blank'}
                                                                rel='noreferrer'>
                                                                <Box borderRadius={'full'}
                                                                    padding={'1.5'}
                                                                    cursor='pointer'
                                                                    backgroundColor={'accentTertiary'}>
                                                                    <IconLink color={'accent'} size='3' />
                                                                </Box>
                                                            </a>

                                                            <Tag
                                                                size={'medium'}
                                                                tone={'accent'}>{publisher?.domain}</Tag>

                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>

                                        <Box height={'auto'} paddingY={{ xs: '0', sm: '0', md: '6', xl: '6', lg: '6' }}>
                                            <Box height='full' borderColor={'foregroundSecondary'}
                                                borderBottomWidth={{ xs: '0.375', sm: '0.375', md: '0', lg: '0', xl: '0' }}
                                                borderRightWidth={{ xs: '0', sm: '0', md: '0.375', lg: '0.375', xl: '0.375' }}>&nbsp;</Box>
                                        </Box>



                                        <Box width='full' paddingX={'4'} paddingY={'2'} >

                                            <Stack space={'4'} align='flex-start'>
                                                <Text weight='bold'
                                                    color='textTertiary'
                                                    size='small'
                                                >Publication</Text>

                                                <Button
                                                    onClick={isSubscribed ? UnSubcribe : Subcribe}
                                                    variant={isSubscribed === false ? 'primary' : 'tertiary'}
                                                    loading={isSubscribed === null}
                                                    prefix={isSubscribed === false && <IconPlusSmall />}
                                                    disabled={(withEth && data?.address) ? false : true}
                                                    size='small'>
                                                    {isSubscribed === true && (
                                                        'Unsubscribe'
                                                    )}
                                                    {isSubscribed === false && (
                                                        'Subscribe'
                                                    )}
                                                    {isSubscribed === null && (
                                                        'Loading'
                                                    )}


                                                </Button>
                                                {(!withEth || !data?.address) && (
                                                    <Box maxWidth={'32'}>
                                                        <Text
                                                            weight={'bold'}
                                                            color={'textTertiary'}
                                                            size='label'>Connect wallet to subscribe</Text>
                                                    </Box>
                                                )}
                                            </Stack>
                                        </Box>


                                    </Stack>
                                </Box>




                            </Box>
                        </Box>



                    </Stack>



                </Box>

                <GridPage
                    fetchEntries={false}
                    pathName={router.pathname}
                    data={entries}
                />
                <Text
                    align={'center'}
                    color='textTertiary'
                    weight={
                        'bold'
                    }
                    size='small'
                >Come back soon
                </Text>
            </Box>
        </Layout>
    )
}

export default Publication