import Layout from '@/components/Layout'
import Header from '@/components/Layout/Headers/Feed'
import { Spinner as Loader, Box, Stack, Text, Input, IconPencil } from 'design-system'
import GridPage from '@/components/Layout/GridPage'
import Publisher from '@/components/Publisher'

//utils
import { useState } from 'react'
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
                redirect: {
                    destination: `/`,
                    permanent: false,
                },
            };
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

        const list: SubscribtionType[] = dataPublications?.reduce((prev: any, current: any) => [...prev, current.publication], [])
        return {
            props: {
                publications: list,
                user: data[0]
            }
        }
    })



type Props = {
    publications: SubscribtionType[],
    user: any
}


const Page = ({ publications, user }: Props) => {
    // const router = useRouter()

    const [emailState, setEmailState] = useState
        <"default" | "confirm" | string>
        ("default");

    const [notifications, setNotifications] = useState<{ entry: EntryType, created_at: string }[]>([])
    const [notificationSettings, setNotificationSettings] = useState<any>({
        delivery: null,
        email: null,
        areNotificationsEnabled: null,
        schedule: null
    })


    //     const RemoveEmail = async () => {
    //         const notificationSettingsCurrent = notificationSettings
    //         setNotificationSettings({
    //             delivery: null,
    //             email: null,
    //             areNotificationsEnabled: null,
    //             schedule: null
    //         })
    //         const { error } = await supabase
    //             .from('users')
    //             .update({ email: null, areNotificationsEnabled: false })
    //             .eq('id', user.id)
    //             .single()

    //         if (error) {
    //             setNotificationSettings(notificationSettingsCurrent)
    //         }
    //     }

    // const ChangeUserEmail = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const target = e.target as HTMLFormElement & {
    //         email: {
    //             value: string
    //         }
    //     }
    //     const email = target.email.value
    //     try {
    //         await fetch('/api/email/generateConfirmation', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 emailAddress: email,
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //             .then(d => {
    //                 if (d.ok) {
    //                     return d.json()
    //                 } else {
    //                     if (d.status === 409) {
    //                         throw new Error('Someone else is already using this email');
    //                     }
    //                     throw new Error('Something went terribly wrong');
    //                 }
    //             })
    //             .then(() => {
    //                 setEmailState('confirm')
    //             })
    //             .catch((e) => {
    //                 setEmailState(e.toString())
    //             })

    //     }
    //     catch (e) {
    //         setEmailState(JSON.stringify(e))
    //         console.log('something went wrong setting your email', e)
    //     }

    // }



    return (
        <Layout>
            <Box width={'full'} paddingY={'14'}>
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
                                {user.areNotificationsEnabled}
                                {user.email}
                                {user.address}
                                {user.id}
                                {user.schedule}
                                {user.delivery}
                                <IconPencil />
                                <Input
                                    disabled={user.email}
                                    label='Email Address'
                                    placeholder={user.email}
                                    autoFocus={false}
                                    inputMode='email'
                                    textTransform='lowercase'
                                    type='email'
                                />
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack align='center'>
                        <Box width={'full'} maxWidth='192' padding={'8'}
                            backgroundColor='background'
                            borderRadius='3xLarge'
                        >
                            {/* {console.log('pub', publications)} */}
                            <Stack direction='vertical' space={'4'}>
                                <Box paddingBottom={'4'}>
                                    <Text size='headingTwo' color='accent' weight='bold'>Subscriptions</Text>
                                </Box>
                                {/* <Box borderBottomWidth={'0.375'} paddingY={'4'}> */}
                                {publications.map((address, index, arr) => {
                                    return <Box borderBottomWidth={index === arr.length - 1 ? '0' : '0.375'} key={address.ensLabel + 'subscribtion'} paddingBottom={'4'}>
                                        <Box width='fit'>
                                            <Publisher
                                                ensLabel={address.type === 'ADDRESS' ? address.ensLabel : address.ensLabel + '.mirror.xyz'} size='default' />
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