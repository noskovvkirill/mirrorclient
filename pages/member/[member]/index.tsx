
//components
import Layout from '@/components/Layout'
import { Box, Stack, Tag, Text, Avatar, Button, IconLink, IconPlusSmall, AvatarGroup } from 'design-system'
import GridPage from '@/components/Layout/GridPage'

//utils
import { supabase } from 'src/client'
import { useRouter } from 'next/router'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
//types
import type { GetStaticProps } from 'next'
import type { EntryType, PublisherType } from 'types'
import type { ParsedUrlQuery } from 'querystring'

import { useStore } from 'contexts'
import getPublication from 'src/fetch/publication'
import { useEffect, useState, useMemo } from 'react'
// import checkPublication from 'pages/api/checkPublication'
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
        .eq('type', 'ADDRESS')

    const publications = data || []

    const pathsPublications: Array<string | { params: { [key: string]: string } }> = publications.map((item: any) => {
        const key = item.ensLabel
        return ({ params: { member: key } })
    })

    const paths: Array<string | { params: { [key: string]: string } }> = [...pathsPublications]
    return { paths, fallback: 'blocking' }
}




export const getStaticProps: GetStaticProps = async (ctx) => {

    const { member } = ctx.params as IParams;

    const publication = member

    if (!publication) {
        return { notFound: true }
    }


    try {
        const data = await getPublication(publication.toString())
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
    const { isAuth, withEth, ToggleAuth } = useStore()
    const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null)

    useEffect(()=>{
        if(publisher){
            splitbee.track("Publisher", {
                address: publisher.address,
                name: publisher.displayName,
                type:'mirror_member'
            })
        }   
    },[publisher])

    async function checkPublication() {
        console.log('checking publication')
        if (!publisher?.domain && !publisher?.address) {
            return false
        }
        const { ok, error } = await fetch('/api/checkPublication?publication=' + (publisher?.domain ? publisher?.domain.split('.')[0] : publisher.address || ''))
            .then(res => {
                return res.json()
            })
        if (error) throw "something went wrong... try later"
        return ok

    }
    async function getSubscribed() {
        if (!publisher?.domain && !publisher?.address) {
            setIsSubscribed(false)
            return
        }
        const { ok } = await fetch('/api/getSubscribedOne?publication=' + (publisher?.domain ? publisher?.domain.split('.')[0] : publisher.address || ''))
            .then(res => {
                return res.json()
            })
        console.log('is subscribed', ok, publisher?.domain?.split('.')[0])
        setIsSubscribed(ok);
    }

    const handle = async () => {
        const isPublication = await checkPublication()
        if (isPublication) {
            console.log('its publication!')
            getSubscribed()
        }
    }

    useEffect(() => {
        if (withEth) {
            handle()
        }
    }, [withEth])

    const Subcribe = async () => {
        if (!publisher?.domain && !publisher?.address) {
            setIsSubscribed(false)
            return
        }
        setIsSubscribed(null)
        const { ok } = await fetch('/api/subscribe?publication=' + (publisher?.domain ? publisher?.domain?.split('.')[0] : publisher.address || ''))
            .then(res => res.json())
        if (ok === false) {
            setIsSubscribed(false)
        } else {
            setIsSubscribed(true)
        }
    }
    const UnSubcribe = async () => {
        if (!publisher?.domain && !publisher?.address) {
            return
        }
        setIsSubscribed(null)
        const { ok } = await fetch('/api/unsubscribe?publication=' + (publisher?.domain ? publisher?.domain?.split('.')[0] : publisher.address || ''))
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
                                placeholder={!publisher?.avatarURL}
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
                            width={'128'}
                            minWidth={'96'}
                            padding={'4'}>

                            <Box width='full' >
                                <Box width='full' >
                                    <Stack direction='horizontal'>
                                        <Box width='full' paddingX={'4'} paddingY={'2'}>
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
                                                            {publisher?.domain
                                                                ? <> <a href={'https' + publisher?.domain}
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
                                                                        tone={'accent'}>{publisher?.domain}</Tag></>
                                                                : <> <a href={'https://mirror.xyz/' + publisher?.address}
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
                                                                        tone={'accent'}>{'https://mirror.xyz/' + AddressPrettyPrint(publisher?.address || '', 8)}</Tag>
                                                                </>
                                                            }

                                                        </Stack>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>

                                        <Box height={'auto'} paddingY={'6'}>
                                            <Box height='full' borderColor={'foregroundSecondary'} borderRightWidth={'0.375'}>&nbsp;</Box>
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
                                                    loading={(isSubscribed === null && withEth) ? true : false}
                                                    prefix={isSubscribed === false && <IconPlusSmall />}
                                                    disabled={(withEth) ? false : true}
                                                    size='small'>
                                                    {isSubscribed === true && (
                                                        'Unsubscribe'
                                                    )}
                                                    {isSubscribed === false && (
                                                        'Subscribe'
                                                    )}
                                                    {isSubscribed === null && (withEth) && (
                                                        'Loading'
                                                    )}

                                                    {isSubscribed === null && (!withEth) && (
                                                        'Subscribe'
                                                    )}


                                                </Button>
                                                {(!withEth) && (
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