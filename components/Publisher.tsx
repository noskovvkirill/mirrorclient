import type { PublisherType } from 'types'
import { Button, Avatar, Stack, Box, Text, HoverCard, AvatarGroup, Tag, Skeleton } from 'design-system'
import Link from 'next/link'
//state
import { useMemo } from 'react'
import thunder from 'src/fetcher'
import useSWR from 'swr'
//utils
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'



const fetcher = (address: string) => {
    return thunder('query')({
        mirrorProject: [{
            address: address
        }, {
            projectDetails: {
                address: true,
                displayName: true,
                avatarURL: true,
                ens: true,
                domain: true,
                members: {
                    avatarURL: true,
                    displayName: true,
                }
            }

        },
        ],
    }
    )
}


interface IPublisher {
    publisher?: PublisherType,
    ensLabel?: string,
    size?: 'small' | 'default' | 'large',
    hideLabel?: boolean,
}

const PublisherBody = ({ publisher, size, hideLabel=false}: { publisher: PublisherType, size: 'small' | 'default' | 'large',  hideLabel?: boolean }) => {

    const members = useMemo(() => publisher.project?.members?.filter(member => member).map((member) => {
        return (
            {
                label: member?.displayName || member?.avatarURL || 'avatar',
                placeholder: !member?.avatarURL,
                src: member?.avatarURL
            }
        )
    }), [publisher])

    const trigger = <Box
        zIndex='20'
        style={{ pointerEvents: 'all' }}> <Link href={
            publisher?.project?.domain
                ? '/publication/' + publisher?.project?.domain.split('.')[0] + '/'
                : '/member/' + publisher.project?.address || publisher.member?.address || ''
        } passHref>
            <Box>
            <Stack direction={"horizontal"} space={size === 'default' ? "4" : size === 'small' ? "2" : "4"} align={"center"}>
                {size === 'default'
                    ? <Button
                        tabIndex={0}
                        variant='tertiary'
                        size='small'
                        shape='circle'>
                        <Avatar
                            size={"9"}
                            placeholder={!publisher?.project?.avatarURL}
                            label={publisher?.project?.displayName || 'avatar'}
                            src={publisher?.project?.avatarURL}
                        />
                    </Button>
                    : size === 'small' ? <Avatar
                        size={"6"}
                        placeholder={!publisher?.project?.avatarURL}
                        label={publisher?.project?.displayName || 'avatar'}
                        src={publisher?.project?.avatarURL}
                    />
                    : <Button
                    tabIndex={0}
                    variant='tertiary'
                    //@ts-ignore-next-line
                    size='large'
                    shape='circle'><Avatar
                    size={{xs:'20', sm:'20', md:'20', lg:'20', xl:'20'}}
                    shape='circle'
                    placeholder={!publisher?.project?.avatarURL}
                    label={publisher?.project?.displayName || 'avatar'}
                    src={publisher?.project?.avatarURL}
                /></Button>
                }
                {/* <Link href={
                publisher?.project?.domain
                    ? '/publication/' + publisher?.project?.domain.split('.')[0] + '/'
                    : '/member/' + publisher?.member?.address + '/'
            } passHref>     */}
            {!hideLabel && (
                <Box cursor='pointer' whiteSpace='nowrap'>
                        <Text
                        
                            color={size === 'default' ? 'textTertiary' : 'textSecondary'}
                            weight={
                                'bold'
                            }
                            size={size === 'default' ? 'extraLarge' : 'inherit'}
                        >{AddressPrettyPrint(publisher?.project?.displayName || '', 16)}
                        </Text>
                </Box>
                )}
                {/* </Link>    */}
                
            </Stack></Box>
        </Link></Box>

    return (
        <HoverCard width={'80'} padding={'0'} trigger={trigger}>
            <Stack>
              
                <Box width='full'
            
                    paddingX={'4'} paddingTop={'4'}>
                    <Stack direction={'horizontal'}>
                        <Avatar
                            size="16"
                            placeholder={!publisher?.project?.avatarURL}
                            label={publisher?.project?.displayName || 'avatar'}
                            src={publisher?.project?.avatarURL}
                        />
                        <Stack direction={'vertical'}>
                            <Stack direction={'vertical'}
                                space={'2'}
                                align='flex-start'>
                                <Text size='extraLarge' weight='bold' color='textTertiary'>{AddressPrettyPrint(publisher.project?.displayName || '', 14)}</Text>
                                <Tag size='small'> {publisher.project?.address && AddressPrettyPrint(publisher.project?.address, 6)}</Tag>
                            </Stack>
                            <Text size='small'>{publisher.project?.description}</Text>
                        </Stack>
                    </Stack>
                </Box>
            

                <Box as='hr' width={'full'} borderTopWidth={'0.75'}></Box>
                <Box paddingX={'4'} paddingBottom={'4'}>
                    <Stack direction='horizontal'>
                        <Link href={
                            publisher?.project?.domain
                                ? '/publication/' + publisher?.project?.domain.split('.')[0] + '/'
                                : '/member/' + publisher?.member?.address + '/'
                        } passHref>
                            <Button size='small'>Open Publication</Button>
                        </Link>
                        {(members && members.length > 0) && (
                            <AvatarGroup members={members || []} />
                        )}
                    </Stack>
                </Box>

            </Stack>
        </HoverCard>
    )
}


const Publisher = ({ publisher, ensLabel, size = 'default', hideLabel=false }: IPublisher) => {

    const { data, error, isValidating } = useSWR(!publisher ? ensLabel : null, fetcher, {
        revalidateOnFocus: false
    });

    if (!publisher) {
        if (data && data?.mirrorProject?.projectDetails) {
            return (
                <PublisherBody
                hideLabel={hideLabel}
                    publisher={{ project: data.mirrorProject.projectDetails }} size={size} />
            )
        }
        if (isValidating || error) {
            return (
                <Skeleton 
                height={size === 'default' ? '10' : size === 'small' ? '6' : '20'} loading>
                    <Text>Loading publisher.. It may take a couple seconds</Text>
                </Skeleton>
            )
        }
        return <Box>{JSON.stringify(error)}</Box>
    }


    return (<PublisherBody 
        hideLabel={hideLabel}
        publisher={publisher} size={size} />)

}

export default Publisher