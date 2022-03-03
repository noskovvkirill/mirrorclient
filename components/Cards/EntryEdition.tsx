import thunder from 'src/fetcher'
import useSWR from 'swr'
import { Box, Skeleton, SkeletonGroup, Stat, Tag, Text, Stack, Avatar, IconNFT } from 'design-system'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
import { render } from 'src/helpers/MarkdownSimpleParser'
import Root from './Root'
import type { BoxMaxWidth } from './Root'




const fetcher = (digest: string) => {
    return thunder('query')({
        __typename: true,
        entry: [{
            digest: digest
        }, {
            body: true,
            title: true,
            featuredImage: {
                mimetype: true,
                url: true
            },
            // nftAddress:true,
            // nftTokenId:true,
            // nft:{
            //     name:true,
            //     tokenURI:true,
            // },
            editions: {
                title: true,
                quantity: true,
                price: true,
                description: true,
                mediaURL: true,
                editionContractAddress: true,
                editionId: true
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
        }
        ],
    }
    )
}





const EntryEdition = ({ digest, maxWidth }: { digest: string, maxWidth?: BoxMaxWidth }) => {
    const { data, error, isValidating } = useSWR(digest, fetcher, {
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
                            data?.entry?.publisher?.project?.domain
                                ? 'https://' + data?.entry?.publisher?.project?.domain + '/edition/' + (data?.entry?.editions && data?.entry?.editions[0]?.editionContractAddress) + '/' + (data?.entry?.editions && data?.entry?.editions[0]?.editionId)
                                : 'https://' + 'mirror.xyz/' + data?.entry?.publisher?.member?.ens + '/edition/' + (data?.entry?.editions && data?.entry?.editions[0]?.editionContractAddress) + '/' + (data?.entry?.editions && data?.entry?.editions[0]?.editionId)
                        }
                        target={"_blank"}
                    />
                )}

                <Box
                    aspectRatio="2/1"
                    overflow='hidden'
                    width="full"
                    backgroundColor={"foregroundSecondary"}
                    borderColor={'transparent'}
                    borderTopLeftRadius="3xLarge"
                    borderTopRightRadius={"3xLarge"}
                    position={"relative"}>
                    {!isValidating && !error && (
                        <>
                            {data?.entry?.featuredImage?.mimetype === 'video/mp4'
                                ? <video
                                    loop
                                    aria-label={"edition cover" + data?.entry?.title}
                                    playsInline
                                    preload="none"
                                    poster={data?.entry.featuredImage?.url}
                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                    width="full" height="full" muted autoPlay
                                    src={data?.entry?.featuredImage?.url}
                                />
                                : <img
                                    loading="lazy"
                                    alt={'edition cover' + data?.entry?.title}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    src={data?.entry?.featuredImage?.url} />
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

                        <Stack space={"4"}>
                            <Skeleton loading={isValidating || error}>
                                <Stack space={"2"}>
                                    <Stat
                                        label="ENTRY EDITION"
                                        value={data?.entry?.title}
                                    />
                                    <Stack direction="horizontal" align="center" space="2">
                                        <Tag><IconNFT size='3' /></Tag>
                                        <Tag tone={"green"}>{data?.entry?.editions && (data?.entry.editions && data.entry.editions[0].price)} ETH</Tag>
                                    </Stack>
                                </Stack>
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

                                        color="textSecondary" weight={"normal"}>
                                        <section
                                            dangerouslySetInnerHTML={{ __html: data?.entry?.body && render(data?.entry?.body, false, false, true).replace(/<(.|\n)*?>/g, '').split('\n').filter(v => v).join("\n") || '' }}></section>
                                    </Text>
                                </Box>
                            </Skeleton>
                        </Stack>

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
                                            label={data?.entry?.publisher?.project?.displayName || 'avatar'}
                                            src={data?.entry?.publisher?.project?.avatarURL} />
                                    </Skeleton>
                                    <Skeleton>
                                        <Text
                                            weight={"semiBold"}
                                            color='textSecondary'>{data?.entry?.publisher?.project?.displayName}</Text>
                                    </Skeleton>
                                    <Skeleton>
                                        <Tag>{AddressPrettyPrint(data?.entry?.publisher?.project?.address || "0x", 6)}</Tag>
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

export default EntryEdition;

