import thunder from 'src/fetcher'
import useSWR from 'swr'
import Root from './Root'
import { render } from 'src/helpers/MarkdownSimpleParser'
import { Box, Heading, Skeleton, SkeletonGroup, Stat, Tag, Text, Stack, Avatar } from 'design-system'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
import { getFirstImage } from 'src/helpers/MarkdownUtils'
import type { BoxMaxWidth } from './Root'
import Link from 'next/link'
//types
import { EntryType } from 'types'

const fetcher = (digest: string) => {
    return thunder('query')({
        entry: [{
            digest: digest
        }, {
            body: true,
            title: true,
            entryId: true,
            publishedAtTimestamp: true,
            canonicalUrl: true,
            featuredImage: {
                mimetype: true,
                url: true
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
        },
        ],
    }
    )
}

const EntryItem = ({ entry, isValidating, maxWidth, digest, error }: { error: any, isValidating: boolean, entry?: EntryType, digest: string, maxWidth?: BoxMaxWidth }) => {

    return (
        <Root maxWidth={maxWidth}>
            <Box display="flex"
                position={"relative"}
                borderRadius={"3xLarge"}
                width="full" flexDirection="column"
                gap="4" backgroundColor={"background"}>
                {!isValidating && !error && (
                    <Link href={
                        entry?.publisher?.project?.domain
                            ? '/publication/' + entry?.publisher?.project?.domain.split('.')[0] + '/' + digest
                            : entry?.publisher?.member?.ens + digest
                    } passHref>
                        <Box
                            cursor="pointer"
                            zIndex='10'
                            position={'absolute'} left={'0'} top={'0'} width="full" height={'full'}>
                            &nbsp;
                        </Box>
                    </Link>
                )}
                <Box
                    aspectRatio="2/1"
                    overflow='hidden'
                    width="full"
                    borderColor={'transparent'}
                    borderTopLeftRadius="3xLarge"
                    borderTopRightRadius={"3xLarge"}
                    position={"relative"}>
                    {entry?.featuredImage?.url
                        ? <img
                            loading="lazy"
                            alt={entry?.title + 'cover image'}
                            style={{ userSelect: 'none', objectFit: 'cover', width: '100%', height: '100%' }}
                            src={entry?.featuredImage?.url} />
                        : entry?.body && getFirstImage(entry?.body)
                            ? <img
                                loading="lazy"
                                alt={entry?.title + 'cover image'}
                                style={{ userSelect: 'none', objectFit: 'cover', width: '100%', height: '100%' }}
                                src={getFirstImage(entry?.body) || ''} />
                            : <Box width="full" height="full"
                                style={{ minHeight: '100%', userSelect: 'none', textAlign: 'center', padding: '1rem' }}
                                display="flex"
                                alignItems={"center"}
                                justifyContent={"center"}
                                // @ts-ignore
                                backgroundColor={entry?.publisher?.project?.theme?.accent?.toLowerCase() || "foregroundSecondary"}
                            >
                                <Heading>{entry?.title}</Heading>
                            </Box>
                    }
                </Box>


                <Box width="full" paddingTop={"0"} paddingBottom={"6"} gap={"6"} display="flex" style={{ flex: '1 1' }}
                    flexDirection="column" justifyContent={"space-between"}>
                    <Box width="full" as='section'
                        overflow={'hidden'}
                        marginBottom="auto" paddingLeft={"6"} paddingRight={"6"}>
                        <Stack space={"4"}>
                            <Skeleton loading={isValidating || error}>
                                <Stat
                                    size="small"
                                    label="ENTRY"
                                    value={entry?.title}
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
                                        {entry?.body && render(entry?.body, false, false, true).trim().replace(/<(.|\n)*?>/g, '').split("\n").filter(v => v).join("\n")}
                                    </Text>
                                </Box>
                            </Skeleton>
                        </Stack>
                    </Box>

                    <Box paddingLeft={"6"} paddingRight={"6"}>
                        <SkeletonGroup loading={isValidating || error}>
                            <Stack direction={"horizontal"} space={"2"} align={"center"}>
                                <Skeleton>
                                    <Avatar
                                        size="6"
                                        label={entry?.publisher?.project?.displayName || 'avatar'}
                                        src={entry?.publisher?.project?.avatarURL} />
                                </Skeleton>
                                <Skeleton>
                                    <Text
                                        weight={"semiBold"}
                                        color='textSecondary'>{entry?.publisher?.project?.displayName}</Text>
                                </Skeleton>
                                <Skeleton>
                                    <Tag>{AddressPrettyPrint(entry?.publisher?.project?.address || "0x", 6)}</Tag>
                                </Skeleton>
                            </Stack>
                        </SkeletonGroup>
                    </Box>

                </Box>
            </Box>
        </Root>
    )
}

const Entry = ({ digest, maxWidth, entry }: { entry?: EntryType, digest: string, maxWidth?: BoxMaxWidth }): JSX.Element => {
    const { data, error, isValidating } = useSWR(!entry ? digest : null, fetcher, {
        revalidateOnFocus: false
    });
    return (
        <EntryItem entry={entry ? entry : data?.entry} isValidating={isValidating} maxWidth={maxWidth} digest={digest} error={error} />
    )
};

export default Entry;