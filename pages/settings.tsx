import Layout from '@/components/Layout'
import { Box, Stack, Text, Input, IconClose, IconPlus, Button } from 'design-system'
import Publisher from '@/components/Publisher'

//utils
import { useState, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { withSessionSsr } from "src/withSession";
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
//type
import type { SubscribtionType } from 'types'
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
    const input = useRef<HTMLInputElement | null>()

    const [removeState, setRemoveState] = useState<'default' | 'initiated'>('default')
    const [emailState, setEmailState] = useState
        <"default" | "confirm" | "error" | string>
        ("default");


    const Subscribe = async (publ: string) => {
        const item = publications.find(item => item.ensLabel === publ)
        if (item) {
            const { ok } = await fetch('/api/subscribe?publication=' + item.ensLabel)
                .then(res => res.json())
            if (ok) {
                setSubscribed([...subscribed, item])
            }
        }
    }



    const Unsubcribe = async (publ: string) => {
        setSubscribed((prev) => prev.filter((i) => i.ensLabel !== publ))
        const { ok } = await fetch('/api/unsubscribe?publication=' + publ)
            .then(res => res.json())
        if (!ok) {
            alert('error unsub')
        }
    }

    const RemoveEmail = async () => {
        setUser({ ...user, email: null })
        const { ok } = await fetch('/api/email/removeEmail')
            .then(res => res.json())
        if (!ok) {
            alert('error remove email')
        }
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
                    setRemoveState('default')
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
                                                    color='textSecondary'>{user.email.lengh <= 25 ? user.email : AddressPrettyPrint(user.email, 25)} </Text>
                                                <Box position='absolute' right='5' bottom='2.5'>
                                                    {removeState === 'default' && (
                                                        <Button
                                                            onClick={() => setRemoveState('initiated')}
                                                            size='small' variant='transparent' shape='circle'><IconClose size='4' /></Button>
                                                    )}
                                                    {removeState === 'initiated' && (
                                                        <Stack direction='horizontal' align='center'>
                                                            <Box display={{ xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }}>
                                                                <Text color='red'
                                                                >Are you sure?</Text>
                                                            </Box>
                                                            <Button
                                                                onClick={RemoveEmail}
                                                                tone='red'
                                                                size='small' variant='primary'>Remove</Button>
                                                            <Button
                                                                onClick={() => setRemoveState('default')}
                                                                size='small' variant='tertiary' shape='circle'><IconClose size='4' /></Button>
                                                        </Stack>
                                                    )}

                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>)}

                                {!user.email && (
                                    <Stack direction='vertical' space={'4'}>
                                        <Input
                                            //@ts-ignore-next-line
                                            ref={input}
                                            disabled={user.email || emailState === 'confirm'}
                                            label='Email Address'
                                            placeholder={'Your email Address'}
                                            autoFocus={false}
                                            inputMode='email'
                                            textTransform='lowercase'
                                            type='email'
                                        />
                                        {emailState === 'default' && (
                                            <Button size='small' onClick={ChangeUserEmail}>Send email confirmation</Button>
                                        )}
                                        {emailState === 'confirm' && (
                                            <Button size='small' disabled variant='tertiary'>Confirm your email to receive notifications</Button>
                                        )}
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
                                {(!publications || publications.length === 0) && (
                                    <Text size='small' color='textTertiary'>You are not subscribed to any publications</Text>
                                )}
                                {/* <Box borderBottomWidth={'0.375'} paddingY={'4'}> */}
                                {publications.map((address, index, arr) => {
                                    if (subscribed.find(item => item.ensLabel === address.ensLabel)) {
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
                                    } else {
                                        return (
                                            <Box
                                                position='relative'
                                                borderBottomWidth={index === arr.length - 1 ? '0' : '0.375'} key={address.ensLabel + 'subscribtion'} paddingBottom={'4'}>
                                                <Box width='fit' >
                                                    <Publisher
                                                        ensLabel={address.type === 'ADDRESS' ? address.ensLabel : address.ensLabel + '.mirror.xyz'} size='default' />
                                                    <Box position='absolute' right='5' bottom='4'>
                                                        <Stack direction='horizontal' align='center'>
                                                            <Box display={{ xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }}>
                                                                <Text color='textTertiary'>Subscribe back</Text>
                                                            </Box>
                                                            <Button
                                                                onClick={() => Subscribe(address.ensLabel)}
                                                                size='small' variant='secondary' shape='circle'><IconPlus size='4' /></Button>
                                                        </Stack>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        )
                                    }
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