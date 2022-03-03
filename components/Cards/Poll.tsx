import thunder from 'src/fetcher'
import useSWR from 'swr'
import Root from './Root'
import { Box, AvatarGroup, SkeletonGroup, Avatar, Skeleton, Stat, Tag, Text, Stack, IconCheck } from 'design-system'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
import type { BoxMaxWidth } from './Root'

const fetcherEntry = (digest: string) => {
    return thunder('query')({
        entry: [{
            digest: digest
        }, {
            id: true,
            entryId: true,
            publisher: {
                project: {
                    address: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true,
                    ens: true,
                },
                member: {
                    address: true,
                    ens: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true
                }
            },
        }]
    })
}

const fetcher = (id: string) => {
    return thunder('query')({
        mirrorPoll: [{
            id: Number(id)
        }, {
            title: true,
            description: true,
            prompt: true,
            status: true,
            endsAt: true,
            startsAt: true,
            coverImage: {
                mimetype: true,
                url: true
            },
            choices: {
                id: true,
                title: true,
                description: true,
                responses: {
                    address: true,
                    twitter: {
                        avatarURL: true,
                    }
                }
            }
        },
        ],
    }
    )
}


const Poll = ({ id, digest, maxWidth }: { digest: string, id: string, maxWidth?: BoxMaxWidth }): JSX.Element => {
    const { data, error, isValidating } = useSWR(id, fetcher, {
        revalidateOnFocus: false
    });
    const { data: dataEntry, error: errorEntry, isValidating: isValidatingEntry } = useSWR(digest, fetcherEntry, {
        revalidateOnFocus: false
    })

    return (
        <Root maxWidth={maxWidth}>
            <Box display="flex"
                position={"relative"}
                borderRadius={"3xLarge"}
                width="full" flexDirection="column" gap="4" backgroundColor={"background"}>
                {!isValidating && !error && (
                    <a style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
                        href={
                            dataEntry?.entry?.publisher?.project?.domain
                                ? 'https://' + dataEntry?.entry?.publisher?.project?.domain + '/' + digest
                                : 'https://' + 'mirror.xyz/' + dataEntry?.entry?.publisher?.member?.ens + digest
                        }
                        target={"_blank"}
                        rel="noreferrer"
                    />
                )}

                <Box width="full" paddingTop={"6"} paddingBottom={"6"} gap={"6"} display="flex"
                    style={{ flex: '1 1' }}
                    justifyContent={"space-between"}
                    flexDirection="column" >

                    <Box>
                        <Box width="full" as='header' marginBottom="auto" paddingLeft={"6"} paddingRight={"6"}>
                            <Stack space={"4"}>
                                <Skeleton loading={isValidating || error}>
                                    <Stat
                                        size="small"
                                        label="POLL"
                                        value={data?.mirrorPoll?.title}
                                    />
                                </Skeleton>
                                <Skeleton loading={isValidating || error}>
                                    <Box style={{
                                        overflow: 'hidden',
                                        WebkitLineClamp: '5',
                                        lineClamp: '5',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                    }}>
                                        <Text
                                            size='small'
                                            color="textTertiary" weight={"normal"}>
                                            {data?.mirrorPoll?.description}
                                        </Text>
                                    </Box>
                                </Skeleton>

                                <Stack direction={"horizontal"}>
                                    <Box width="full">
                                        <Skeleton loading={isValidating || error}>
                                            <Stat
                                                size="small"
                                                label="VOTING STATUS"
                                                value={data?.mirrorPoll?.status && data.mirrorPoll.status.slice(0, 1) + data.mirrorPoll.status.slice(1, data.mirrorPoll.status.length).toLowerCase()}
                                                meta={
                                                    data?.mirrorPoll?.status === 'ENDED'
                                                        ? 'Voting has ended'
                                                        : data?.mirrorPoll?.status === 'DELETED'
                                                            ? 'Voting canceled'
                                                            : data?.mirrorPoll?.status === 'CREATED'
                                                                ? "Voting hasn't started yet"
                                                                : 'Voting in progress'
                                                }
                                            />
                                        </Skeleton>
                                    </Box>


                                    <Box width="full">
                                        <Skeleton loading={isValidating || error}>
                                            <Stat
                                                size="small"
                                                label={
                                                    data?.mirrorPoll?.status === 'ENDED'
                                                        ? 'Voting ended'
                                                        : data?.mirrorPoll?.status === 'LIVE'
                                                            ? 'Voting ends'
                                                            : data?.mirrorPoll?.status === 'CREATED' ? 'Voting starts'
                                                                : 'Voting ends'
                                                }
                                                value={(data?.mirrorPoll?.status === 'ENDED' || data?.mirrorPoll?.status === 'LIVE')
                                                    ? data?.mirrorPoll?.endsAt && new Date(Date.parse(data?.mirrorPoll?.endsAt)).toLocaleString([], {
                                                        day: 'numeric', year: 'numeric', month: 'long'
                                                    })
                                                    : data?.mirrorPoll?.startsAt && new Date(Date.parse(data?.mirrorPoll?.startsAt)).toLocaleString([], {
                                                        day: 'numeric', year: 'numeric', month: 'long'
                                                    })
                                                }
                                                meta={(data?.mirrorPoll?.status === 'ENDED' || data?.mirrorPoll?.status === 'LIVE')
                                                    ? data?.mirrorPoll?.endsAt && new Date(Date.parse(data?.mirrorPoll?.endsAt)).toLocaleString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                    })
                                                    : data?.mirrorPoll?.startsAt && new Date(Date.parse(data?.mirrorPoll?.startsAt)).toLocaleString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                    })
                                                }
                                            />
                                        </Skeleton>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>


                        <Box paddingLeft={"6"} paddingRight={"6"}>
                            <Stack space="6">
                                <Box flexShrink={0} paddingBottom={"2"}></Box>
                                {(isValidating || error) && (
                                    <SkeletonGroup loading={isValidating || error}>
                                        <Stack space={"4"}>
                                            <Skeleton >
                                                <Box aspectRatio='2/1' height={"32"}>
                                                    OPTION ONE
                                                </Box>
                                            </Skeleton>
                                            <Skeleton >
                                                <Box aspectRatio='2/1' height={"32"}>
                                                    OPTION ONE
                                                </Box>
                                            </Skeleton>
                                        </Stack>
                                    </SkeletonGroup>
                                )}


                                {data?.mirrorPoll?.choices?.sort((a: any, b: any) => Number(b?.responses?.length) - Number(a?.responses?.length))
                                    .map((choice: any, index: number) => {
                                        return (
                                            <Box key={choice.id + 'poll_option'}>
                                                <Stack space="4">
                                                    <Stack direction="horizontal" space="2">
                                                        <Stack>
                                                            <Stack direction='horizontal'>
                                                                {index === 0 && (
                                                                    <IconCheck
                                                                        size={{ xs: '16', sm: '13', md: '13', lg: '12', xl: '12' }}
                                                                        color={'green'} />
                                                                )}
                                                                <Text
                                                                    weight={'semiBold'}
                                                                    size='large'
                                                                    color={index === 0 ? 'green' : 'inherit'}
                                                                >{choice.title}
                                                                </Text>
                                                            </Stack>
                                                            <Text size='small' color='textTertiary'>{choice.description}</Text>
                                                        </Stack>
                                                        <Box backgroundColor='backgroundSecondary'
                                                            borderRadius={"large"}
                                                            height="fit"
                                                            aspectRatio='1/1'
                                                            paddingY="3"
                                                            paddingX="4"
                                                        >
                                                            <Text size='large' color={index === 0 ? 'green' : 'textSecondary'}>{Number(choice?.responses?.length)}</Text>
                                                        </Box>
                                                    </Stack>
                                                    <Skeleton loading={isValidating || error}>
                                                        <AvatarGroup
                                                            members={choice.responses?.map((response: any) => ({ label: response.address || 'poll participant', src: response?.twitter?.avatarURL })) || []}
                                                        />
                                                    </Skeleton>
                                                </Stack>
                                            </Box>
                                        )
                                    })}
                            </Stack>
                        </Box>
                    </Box>




                    <Box paddingLeft={"6"} paddingRight={"6"}>
                        <SkeletonGroup loading={isValidatingEntry || errorEntry}>
                            <Stack direction={"horizontal"} space={"2"} align={"center"}>
                                <Skeleton>
                                    <Avatar
                                        size="6"
                                        label={dataEntry?.entry?.publisher?.project?.displayName || 'avatar'}
                                        src={dataEntry?.entry?.publisher?.project?.avatarURL} />
                                </Skeleton>
                                <Skeleton>
                                    <Text
                                        weight={"semiBold"}
                                        color='textSecondary'>{dataEntry?.entry?.publisher?.project?.displayName}</Text>
                                </Skeleton>
                                <Skeleton>
                                    <Tag>{AddressPrettyPrint(dataEntry?.entry?.publisher?.project?.address || "0x", 6)}</Tag>
                                </Skeleton>
                            </Stack>
                        </SkeletonGroup>
                    </Box>


                    {/* </Stack>
                    </Box> */}

                </Box>

            </Box>





        </Root>
    )
};

export default Poll;