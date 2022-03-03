// import Root from './Root'
import { Box, Tag, Text, Stack, Avatar, Spinner } from 'design-system'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
//utils
import { unified } from 'unified'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeReact from 'rehype-react'
import { createElement, Fragment } from 'react'
import remarkUnwrapImages from 'remark-unwrap-images'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
//types
import { EntryType } from 'types'
import dynamic from 'next/dynamic'

const DynamicEmbed = dynamic(() =>
    import('./Embeds'), {
    loading: () => <Box
        width="full"
        height={'fit'}
        marginY={'9'}
        backgroundColor={'foregroundTertiary'}
        alignItems='center'
        aspectRatio='2/1'
        borderRadius={'large'}
        overflow='hidden'
        borderWidth={'0'}
    ><Spinner /></Box>,
}
)

interface IImage {
    src?: string,
    alt?: string
}
const Image = ({ alt, src }: IImage) => {
    return (
        <Box
            width="full"
            height={'fit'}
            marginY={'9'}
            display='flex'
            flexDirection={'column'}
            alignItems='center'
            gap={'6'}
            as='span'
            lineHeight={'none'}
        >

            <Box
                as='span'
                overflow='hidden'
                width="full"
                borderRadius={'large'}
                position={"relative"}>
                <img
                    loading="lazy"
                    alt={alt || 'image'}
                    style={{ userSelect: 'none', objectFit: 'cover', width: '100%', minHeight: '100%', height: '100%' }}
                    src={src} />
            </Box>
            {alt && (
                <Text
                    lineHeight={'none'}
                    size='small'>{alt}</Text>
            )}

        </Box>
    )
}

const Hr = () => {
    return (
        <Stack align={'center'}>
            <Box marginY={'9'}
                as='hr'
                width='1/3'
                borderColor={'foregroundSecondary'}
                borderTopWidth={'0.375'}
            />
        </Stack>
    )
}





const processor = unified()
    .use(remarkParse)
    .use(remarkUnwrapImages)
    .use(remarkRehype)
    .use(rehypeReact,
        {
            createElement: createElement, Fragment: Fragment,
            components: {
                img: Image,
                hr: Hr,
                a: DynamicEmbed
            },
        },

    )




type Flatten<T> = T extends any[] ? T[number] : T;
type Collaborator = Flatten<Pick<EntryType, 'collaborators'>['collaborators']>

const EntryItem = ({ entry }: { entry?: EntryType }) => {
    const Contributors = <Box paddingTop={'4'}>
        <Stack direction={"horizontal"} space={"4"} align={"center"}>
            <Stack direction={"horizontal"} space={"2"} align={"center"}>
                <Avatar
                    size="6"
                    label={entry?.publisher?.project?.displayName || 'avatar'}
                    src={entry?.publisher?.project?.avatarURL} />
                <Text
                    weight={"semiBold"}
                    color='textSecondary'>{entry?.publisher?.project?.displayName}</Text>

                <Tag>{AddressPrettyPrint(entry?.publisher?.project?.address || "0x", 6)}</Tag>
                <Tag>{entry?.timestamp && dayjs.unix(entry.timestamp).fromNow()}</Tag>
            </Stack>

            {entry?.collaborators?.map((collaborator: Collaborator) => {
                return (
                    <Stack
                        key={collaborator?.address + 'collaborator'}
                        direction={"horizontal"} space={"2"} align={"center"}>
                        <Avatar
                            size="6"
                            label={collaborator?.displayName || 'avatar'}
                            src={collaborator?.avatarURL} />
                        <Text
                            weight={"semiBold"}
                            color='textSecondary'>{collaborator?.displayName}</Text>

                        <Tag>{AddressPrettyPrint(collaborator?.address || "0x", 6)}</Tag>
                    </Stack>
                )
            })}

        </Stack>

    </Box>

    return (
        <Box width="full"
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ display: 'flex', maxHeight: '100%' }}>

            <Box display="flex"
                maxWidth={'256'}
                position={"relative"}
                width="full" flexDirection="column"
                gap="4">

                <Stack align='center' justify={'center'}>

                    {entry?.featuredImage?.url
                        ? <Box
                            overflow='hidden'
                            width="full"
                            borderColor={'transparent'}
                            borderRadius={'3xLarge'}
                            position={"relative"}><img
                                loading="lazy"
                                alt={entry?.title + 'cover image'}
                                style={{ userSelect: 'none', objectFit: 'cover', width: '100%', height: '100%' }}
                                src={entry?.featuredImage?.url} />

                        </Box>
                        : entry?.featuredImage?.sizes?.og &&
                        <Box
                            overflow='hidden'
                            width="full"
                            borderColor={'transparent'}
                            borderRadius="3xLarge"
                            position={"relative"}><img
                                loading="lazy"
                                alt={entry?.title + 'cover image'}
                                style={{ userSelect: 'none', objectFit: 'cover', width: '100%', height: '100%' }}
                                src={entry?.featuredImage?.sizes.og.src} />

                        </Box>

                    }


                    <Box
                        maxWidth={'192'}
                        width="full" paddingTop={"6"} paddingBottom={"6"}
                        gap={"6"} display="flex" style={{ flex: '1 1' }}
                        flexDirection="column" justifyContent={"space-between"}>
                        <Box width="full" as='section'
                            overflow={'hidden'}
                            marginBottom="auto" paddingLeft={"6"} paddingRight={"6"}>
                            <Stack space={"4"}>
                                <Text size='headingOne' weight='bold'
                                    lineHeight='none'>{entry?.title}</Text>
                                {Contributors}
                                <Text size='large'
                                    lineHeight={'1.5'}
                                    color="text" weight={"normal"}>
                                    {entry?.body && processor.processSync(entry?.body).result}
                                </Text>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

const Entry = ({ entry }: { entry?: EntryType }): JSX.Element => {

    return (
        <EntryItem entry={entry} />
    )
};

export default Entry;