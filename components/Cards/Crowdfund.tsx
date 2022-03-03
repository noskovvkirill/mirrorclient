import thunder from 'src/fetcher'
import useSWR from 'swr'
import { Box, Skeleton, SkeletonGroup, Stat, Tag, Button, Text, Stack, Avatar } from 'design-system'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
import { render } from 'src/helpers/MarkdownSimpleParser'
import { clamp } from 'src/helpers/Math'
import Root from './Root'
import type { BoxMaxWidth } from './Root'



//TODO: 
// ANIMATE PROGRESS BAR


// import { keyframes } from '@vanilla-extract/css'

// const shake = keyframes({
//     '0%': { transform: 'translateX(5%)' },
//     '100%': { transform: 'translateX(-5%)' },
// })



const fetcher = (address: string) => {
    return thunder('query')({
        __typename: true,
        crowdfundBlockData: [{
            address: address,
        }, {
            valueCurrent: true,
            isActive: true,
            isRedeemable: true,
            tokensIssued: true,
            totalSupply: true,
            operatorEquityPercent: true
        }],
        crowdfundAtAddress: [{
            address: address,
        }, {
            name: true,
            content: true,
            symbol: true,
            description: true,
            fundingRecipient: true,
            goal: true,
            stretchGoal: true,
            publishStatus: true,
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
            createdAt: true,
            metadata: {
                __typename: true,
                coverImage: {
                    mimetype: true,
                    url: true
                },
            },
            contributionLimit: true,
        },
        ],
    }
    )
}



const Crowdfund = ({ address, maxWidth }: { address: string, maxWidth?: BoxMaxWidth }) => {
    const { data, error, isValidating } = useSWR(address, fetcher, {
        revalidateOnFocus: false
    });

    return (
        <Root
            maxWidth={maxWidth}
        >
            <Box display="flex"
                position={"relative"}
                borderRadius={"3xLarge"}
                width="full" flexDirection="column" maxWidth={maxWidth} gap="4" backgroundColor={"background"}>
                {!isValidating && !error && (
                    <a
                        style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
                        href={
                            data?.crowdfundAtAddress?.publisher?.project?.domain
                                ? 'https://' + data?.crowdfundAtAddress?.publisher?.project?.domain + '/crowdfunds/' + address
                                : 'https://' + 'mirror.xyz/' + data?.crowdfundAtAddress?.publisher?.member?.ens + '/crowdfunds/' + address
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
                        <img
                            loading="lazy"
                            alt={'crowdfund cover' + data?.crowdfundAtAddress?.name}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={data?.crowdfundAtAddress?.metadata?.coverImage?.url} />
                    )}
                </Box>
                <Box width="full" paddingTop={"3"} paddingBottom={"6"} display="flex" style={{ flex: '1 1' }}
                    flexDirection="column" justifyContent={"space-between"}>
                    <Box width="full" as='header' marginBottom="auto" paddingLeft={"6"} paddingRight={"6"}>
                        <Skeleton loading={isValidating || error}>
                            <Stat
                                label="CROWDFUND"
                                value={data?.crowdfundAtAddress?.name}
                            />
                        </Skeleton>
                        <Skeleton loading={isValidating || error}>
                            <Text color='textSecondary' weight={"normal"}>
                                {data?.crowdfundAtAddress?.content && (
                                    <section
                                        dangerouslySetInnerHTML={{ __html: render(JSON.parse(data?.crowdfundAtAddress?.content).overview).split("</p>")[0] }}>
                                    </section>
                                )}
                            </Text>
                        </Skeleton>

                    </Box>


                    <Box width="full"
                        display={'flex'}
                        flexDirection={"column"}
                        marginTop="auto"
                        gap={"6"}
                        height="full"
                        paddingTop={"6"} paddingLeft={"6"} paddingRight={"6"}>

                        <Box width="full" height="4" backgroundColor={"backgroundSecondary"} borderRadius={"full"} overflow='hidden'>
                            {data?.crowdfundBlockData?.valueCurrent && data?.crowdfundAtAddress?.goal && (
                                <Box
                                    height={"full"}
                                    // @ts-ignore
                                    backgroundColor={clamp(Number(data?.crowdfundBlockData?.valueCurrent) / Number(data?.crowdfundAtAddress?.goal) * 100, 0, 100) >= 100 ? 'green' : data?.crowdfundAtAddress?.publisher?.project?.theme?.accent?.toLowerCase() || "green"}
                                    style={{
                                        // animation: `1.4s linear infinite ${shake}`,
                                        width: clamp(Number(data?.crowdfundBlockData?.valueCurrent) / Number(data?.crowdfundAtAddress?.goal) * 100, 0, 100) + '%'
                                    }}></Box>
                            )}
                        </Box>

                        <SkeletonGroup loading={isValidating || error}>
                            <Stack
                                align={"center"}
                                direction={"horizontal"} justify={"flex-start"}>

                                <Skeleton>
                                    <Stat
                                        size='small'
                                        label="FUNDING GOAL"
                                        value={data?.crowdfundAtAddress?.goal + " ETH"}
                                    />
                                </Skeleton>
                                <Skeleton>
                                    <Stat
                                        size='small'
                                        label="FUNDS RAISED"
                                        value={data?.crowdfundBlockData?.valueCurrent + " ETH"}
                                    />
                                </Skeleton>
                            </Stack>
                        </SkeletonGroup>
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
                                            label={data?.crowdfundAtAddress?.publisher?.project?.displayName || 'avatar'}
                                            src={data?.crowdfundAtAddress?.publisher?.project?.avatarURL} />
                                    </Skeleton>
                                    <Skeleton>
                                        <Text
                                            weight={"semiBold"}
                                            color='textSecondary'>{data?.crowdfundAtAddress?.publisher?.project?.displayName}</Text>
                                    </Skeleton>
                                    <Skeleton>
                                        <Tag>{AddressPrettyPrint(data?.crowdfundAtAddress?.publisher?.project?.address || "0x", 6)}</Tag>
                                    </Skeleton>
                                </Stack>
                            </SkeletonGroup>


                            <Skeleton loading={isValidating || error}>
                                {(data?.crowdfundBlockData?.valueCurrent && data?.crowdfundAtAddress?.goal && (parseFloat(data.crowdfundBlockData?.valueCurrent)) >= (parseFloat(data.crowdfundAtAddress.goal))) && (
                                    <Button
                                        onClick={() => {
                                            data?.crowdfundAtAddress?.publisher?.project?.domain
                                                ? window.open('https://' + data?.crowdfundAtAddress?.publisher?.project?.domain + '/crowdfunds/' + address, '_blank')
                                                : window.open('https://' + 'mirror.xyz/' + data?.crowdfundAtAddress?.publisher?.member?.ens + '/crowdfunds/' + address, '_blank')
                                        }}
                                        // suffix={<IconCheck />}
                                        tone="green"
                                        center
                                        size="small"
                                        variant="secondary"
                                        width={"full"}>
                                        FUNDED
                                    </Button>

                                )}
                                {data?.crowdfundBlockData?.valueCurrent && data?.crowdfundAtAddress?.goal && parseFloat(data.crowdfundBlockData.valueCurrent) < parseFloat(data.crowdfundAtAddress.goal) && (
                                    <Button
                                        onClick={() => {
                                            data?.crowdfundAtAddress?.publisher?.project?.domain
                                                ? window.open('https://' + data?.crowdfundAtAddress?.publisher?.project?.domain + '/crowdfunds/' + address, '_blank')
                                                : window.open('https://' + 'mirror.xyz/' + data?.crowdfundAtAddress?.publisher?.member?.ens + '/crowdfunds/' + address, '_blank')
                                        }}
                                        center
                                        size="small"
                                        // @ts-ignore
                                        tone={data?.crowdfundAtAddress?.publisher?.project?.theme?.accent?.toLowerCase() || "blue"}
                                        variant="secondary"
                                        width={"full"}>
                                        BACK THIS PROJECT
                                    </Button>


                                )}
                            </Skeleton>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Root>
    )
};

export default Crowdfund;

