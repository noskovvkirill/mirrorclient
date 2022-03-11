import Layout from '@/components/Layout'
import Header from '@/components/Layout/Headers/Feed'
import { Spinner as Loader, Box, Stack, Text, Input, IconClose, Button } from 'design-system'
import GridPage from '@/components/Layout/GridPage'
import Publisher from '@/components/Publisher'

//utils
import { useState, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { withSessionSsr } from "src/withSession";
//type
import type { EntryType, SubscribtionType } from 'types'
import type { GetServerSideProps } from 'next'


const supabaseUrl = 'https://tcmqmkigakxeiuratohw.supabase.co'

export const getServerSideProps: GetServerSideProps = withSessionSsr(
    async function getProps({ req }) {
        const siwe = req.session.siwe;

        if (!siwe?.address) {
            return {
                notFound: true
            }

        }

        const supabaseKey = process.env.SERVICE_KEY || ''
        const supabase = createClient(supabaseUrl, supabaseKey)
        const { data: dataPublications } = await supabase.from('user_subscriptions')
            .select('publication(type, ensLabel), owner')
            .eq('owner', siwe.id)

        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', siwe.id)

        if (error) {
            return {
                notFound: true
            }
        }

        const list: SubscribtionType[] = dataPublications?.reduce((prev: any, current: any) => [...prev, current.publication], [])
        return {
            props: {
                publications: list,
                user: data && data?.length > 0 ? data[0] : []
            }
        }
    })



type Props = {
    publications: SubscribtionType[],
    user: any
}


const Page = ({ publications, user: userState }: Props) => {

    const [subscribed, setSubscribed] = useState(publications)
    const [user, setUser] = useState(userState)
    const input = useRef<HTMLInputElement>()
    const [emailState, setEmailState] = useState
        <"default" | "confirm" | "error" | string>
        ("default");


    const Unsubcribe = (publ: string) => {
        setSubscribed((prev) => prev.filter((i) => i.ensLabel !== publ))
    }

    const RemoveEmail = async () => {
        setUser({ ...user, email: null })
        // setNotificationSettings({
        //     delivery: null,
        //     email: null,
        //     areNotificationsEnabled: null,
        //     schedule: null
        // })
        // const { error } = await supabase
        //     .from('users')
        //     .update({ email: null, areNotificationsEnabled: false })
        //     .eq('id', user.id)
        //     .single()

        // if (error) {
        //     setNotificationSettings(notificationSettingsCurrent)
        // }
    }

    const ChangeUserEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.current) { alert('ref not found'); return }
        const email = input.current.value
        try {
            await fetch('/api/email/generateConfirmation', {
                method: 'POST',
                body: JSON.stringify({
                    emailAddress: email,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(d => {
                    if (d.ok) {
                        return d.json()
                    } else {
                        if (d.status === 409) {
                            throw new Error('Someone else is already using this email');
                        }
                        throw new Error('Something went terribly wrong');
                    }
                })
                .then(() => {
                    setEmailState('confirm')
                })
                .catch((e) => {
                    setEmailState(e.toString())
                })

        }
        catch (e) {
            setEmailState(JSON.stringify(e))
            console.log('something went wrong setting your email', e)
        }
    }



    return (
        <Layout>
            <Box width={'full'}

                paddingY={'14'}>
                <Stack direction='vertical'>
                    <Stack align='center'>
                        <Box width={'full'} maxWidth='192' padding={'8'}
                            backgroundColor='background'
                            borderRadius='3xLarge'
                        >
                            <Stack direction='vertical' space={'4'}>
                                <Box paddingBottom={'4'}>
                                    <Text size='headingTwo' color='accent' weight='bold'>Notifications</Text>
                                </Box>
                                {/* {user.areNotificationsEnabled} */}


                                {user.email && (
                                    <Stack direction='vertical' space={'2'}>
                                        <Box paddingX='4'>
                                            <Text
                                                weight={'medium'}
                                                color='text'>Email Address </Text>
                                        </Box>
                                        <Box width='full'
                                            paddingY={'5'}
                                            paddingX={'4'}
                                            position='relative'
                                            borderRadius='2xLarge'
                                            backgroundColor={'backgroundTertiary'}>
                                            <Stack direction='horizontal'>
                                                <Text
                                                    weight={'medium'}
                                                    color='textSecondary'>{user.email} </Text>
                                                <Box position='absolute' right='5' bottom='2.5'><Button
                                                    onClick={RemoveEmail}
                                                    size='small' variant='transparent' shape='circle'><IconClose size='4' /></Button></Box>
                                            </Stack>
                                        </Box>
                                    </Stack>)}

                                {!user.email && (
                                    <Stack direction='vertical' space={'4'}>
                                        <Input
                                            ref={input}
                                            disabled={user.email}
                                            label='Email Address'
                                            placeholder={'Your email Address'}
                                            autoFocus={false}
                                            inputMode='email'
                                            textTransform='lowercase'
                                            type='email'
                                        />
                                        <Button size='small' onClick={ChangeUserEmail}>Send email confirmation</Button>
                                        {emailState === 'error' && <Text color='red'>Something went wrong</Text>}
                                    </Stack>
                                )}

                                <Text size='small' color='textTertiary'>Add or remove email to subscribe to notifications</Text>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack align='center'>
                        <Box width={'full'} maxWidth='192' padding={'8'}
                            backgroundColor='background'
                            borderRadius='3xLarge'
                        >

                            <Stack direction='vertical' space={'4'}>
                                <Box paddingBottom={'4'}>
                                    <Text size='headingTwo' color='accent' weight='bold'>Subscriptions</Text>
                                </Box>
                                {(!subscribed || subscribed.length === 0) && (
                                    <Text size='small' color='textTertiary'>You are not subscribed to any publications</Text>
                                )}
                                {/* <Box borderBottomWidth={'0.375'} paddingY={'4'}> */}
                                {subscribed.map((address, index, arr) => {
                                    return <Box
                                        position='relative'
                                        borderBottomWidth={index === arr.length - 1 ? '0' : '0.375'} key={address.ensLabel + 'subscribtion'} paddingBottom={'4'}>
                                        <Box width='fit' >
                                            <Publisher
                                                ensLabel={address.type === 'ADDRESS' ? address.ensLabel : address.ensLabel + '.mirror.xyz'} size='default' />
                                            <Box position='absolute' right='5' bottom='4'><Button
                                                onClick={() => Unsubcribe(address.ensLabel)}
                                                size='small' variant='transparent' shape='circle'><IconClose size='4' /></Button></Box>
                                        </Box>
                                    </Box>
                                })}
                                {/* </Box> */}
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Layout>
    )
}



export default Page