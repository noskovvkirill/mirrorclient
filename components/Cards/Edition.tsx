import thunder from 'src/fetcher'
import useSWR from 'swr'
import { Box, Skeleton, IconNFT, SkeletonGroup, Stat, Tag, Text, Stack, Avatar } from 'design-system'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
import Root from './Root'
import type { BoxMaxWidth } from './Root'

const fetcher = (contract: string, id: number) => {
    return thunder('query')({
        __typename: true,
        edition: [{
            editionId: id,
            editionContractAddress: contract,
        }, {
            title: true,
            quantity: true,
            price: true,
            description: true,
            mediaURL: true,
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
            thumbnailMedia: {
                mimetype: true,
                url: true
            },
            primaryMedia: {
                __typename: true,
                mimetype: true,
                url: true
            },
        },
        ],
    }
    )
}



const Edition = ({ id, contract, maxWidth }: { id: number, contract: string, maxWidth?: BoxMaxWidth }) => {
    const { data, error, isValidating } = useSWR([contract, id], fetcher, {
        revalidateOnFocus: false
    });

    return (
        <Root maxWidth={maxWidth}>
            <Box display="flex"
                position="relative"
                borderRadius={"3xLarge"}
                width="full" flexDirection="column" gap="4" backgroundColor={"background"}>
                {!isValidating && !error && (
                    <a style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
                        href={
                            data?.edition?.publisher?.project?.domain
                                ? 'https://' + data?.edition?.publisher?.project?.domain + '/edition/' + contract + '/' + id.toString()
                                : 'https://' + 'mirror.xyz/' + data?.edition?.publisher?.member?.ens + '/edition/' + contract + '/' + id.toString()
                        }
                        target={"_blank"}
                    />
                )}

                <Box
                    aspectRatio="1/1"
                    overflow='hidden'
                    width="full"
                    backgroundColor={"foregroundSecondary"}
                    borderColor={'transparent'}
                    borderTopLeftRadius="3xLarge"
                    borderTopRightRadius={"3xLarge"}
                    position={"relative"}>
                    {!isValidating && !error && (
                        <>
                            {data?.edition?.primaryMedia?.mimetype === 'video/mp4'
                                ? <video
                                    loop
                                    playsInline
                                    preload="none"
                                    poster={data?.edition.thumbnailMedia?.url}
                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                    width="full" height="full" muted autoPlay
                                    src={data?.edition?.primaryMedia?.url}
                                />
                                : <img
                                    alt={'edition' + data?.edition?.title}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    src={data?.edition?.primaryMedia?.url} />
                            }
                        </>
                    )}

                </Box>

                <Box width="full" gap={"3"}
                    paddingTop={"3"} paddingBottom={"6"} display="flex" style={{
                        flex: '1 1'
                    }}
                    flexDirection="column" justifyContent={"space-between"}>
                    <Box width="full" as='header' marginBottom="auto" paddingLeft={"6"} paddingRight={"6"}>

                        <Skeleton loading={isValidating || error}>
                            <Stack space={"2"}>
                                <Stat
                                    label="EDITION"
                                    value={data?.edition?.title}

                                />
                                <Stack direction="horizontal" align="center" space="2">
                                    <Tag><IconNFT size='3' /></Tag>
                                    <Tag tone={"green"}>{data?.edition?.price} ETH</Tag>
                                </Stack>
                            </Stack>
                        </Skeleton>


                    </Box>


                    <Box width="full"
                        display={'flex'}
                        flexDirection={"column"}
                        marginTop="auto"
                        gap={"6"}
                        height="full" paddingTop={"6"} paddingLeft={"6"} paddingRight={"6"}>
                    </Box>

                    <Box>
                        <Box flexShrink={0} paddingBottom={"6"}></Box>
                        <Box
                            as='footer'
                            display={"flex"}
                            gap={"6"}
                            justifyContent={"space-between"}
                            paddingLeft={"6"}
                            paddingRight={"6"}
                            flexDirection={"column"}
                        >
                            <SkeletonGroup loading={isValidating || error}>
                                <Stack direction={"horizontal"} space={"2"} align={"center"}>
                                    <Skeleton>
                                        <Avatar
                                            size="6"
                                            label={data?.edition?.publisher?.project?.displayName || 'avatar'}
                                            src={data?.edition?.publisher?.project?.avatarURL} />
                                    </Skeleton>
                                    <Skeleton>
                                        <Text
                                            weight={"semiBold"}
                                            color='textSecondary'>{data?.edition?.publisher?.project?.displayName}</Text>
                                    </Skeleton>
                                    <Skeleton>
                                        <Tag>{AddressPrettyPrint(data?.edition?.publisher?.project?.address || "0x", 6)}</Tag>
                                    </Skeleton>
                                </Stack>
                            </SkeletonGroup>



                        </Box>
                    </Box>
                </Box>
            </Box>
        </Root>
    )
};

export default Edition;

