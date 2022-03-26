// import Root from './Root'
import { Box, Tag, Text, Stack, Avatar, Spinner } from 'design-system'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
import Link from 'next/link'
//utils
import { unified } from 'unified'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeReact from 'rehype-react'
import React, { createElement, Fragment } from 'react'
import remarkUnwrapImages from 'remark-unwrap-images'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import dynamic from 'next/dynamic'
dayjs.extend(relativeTime)

//types
import { EntryType } from 'types'

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

const StyledH1 = ({ children, }: { children: React.ReactNode}) => {
    return (
        <Box as={'h1'}
            fontSize={'headingTwo'}
            fontWeight='bold'
            marginTop={'9'}
            marginBottom={'3'}
            >
            {children}
            </Box>
    )
}

const StyledH2 = ({ children, }: { children: React.ReactNode}) => {
    return (
        <Box as={'h2'}
            fontSize={'headingTwo'}
            fontWeight='bold'
            marginTop={'9'}
            marginBottom={'3'}
            >
            {children}
            </Box>
    )
}

const StyledH3 = ({ children, }: { children: React.ReactNode}) => {
    return (
        <Box as={'h3'}
            fontSize={'extraLarge'}
            fontWeight='bold'
            marginTop={'9'}
            marginBottom={'3'}
            >
            {children}
            </Box>
    )
}


const StyledH4 = ({ children, }: { children: React.ReactNode}) => {
    return (
        <Box as={'h4'}
            fontSize={'extraLarge'}
            fontWeight='bold'
            marginTop={'9'}
            marginBottom={'3'}
            >
            {children}
            </Box>
    )
}

const StyledH5 = ({ children, }: { children: React.ReactNode}) => {
    return (
        <Box as={'h2'}
            fontSize={'extraLarge'}
            fontWeight='semiBold'
            marginTop={'9'}
            marginBottom={'3'}
            >
            {children}
            </Box>
    )
}



const StyledText = ({children}:{children:React.ReactNode | React.ReactNode[]}) => {
    return(
        <Text size='large'
        whiteSpace='pre-wrap'
        lineHeight={'1.5'}
        color="text" weight={"normal"}>
            {children}
        </Text>
    )
}

const StyledListUl = ({children}:{children:React.ReactNode | React.ReactNode[]}) => {
    return(
        <Box fontSize={'large'}
        whiteSpace='pre-wrap'
        as='ul'
        marginY={'0.5'}
        display='flex'
        flexDirection={'column'}
        gap='1.5'
        style={{listStyle:'inside'}}
        // padding='0'
        lineHeight={'none'}
        color="text" fontWeight={"normal"}>
            {children}
        </Box>
    )
    }

const StyledList = ({children}:{children:React.ReactNode | React.ReactNode[]}) => {
    return(
        <Box fontSize={'large'}
        whiteSpace='pre-wrap'
        as='li'
        // marginX={'-4'}
        marginTop={'0.5'}
        padding='0'
        lineHeight={'1.625'}
        color="text" fontWeight={"normal"}>
            {children}
        </Box>
    )
}

const processor = unified()
    .use(remarkParse)
    .use(remarkUnwrapImages)
    .use(remarkRehype)
    .use(rehypeReact,
        //@ts-ignore
        {
            createElement: createElement, Fragment: Fragment,
            components: {
                img: Image,
                hr: Hr,
                h1:StyledH1,
                h2:StyledH2,
                h3:StyledH3,
                h4:StyledH4,
                h5:StyledH5,
                a: DynamicEmbed,
                p: StyledText,
                li: StyledList,
                ul: StyledListUl
            },
        },

    )




type Flatten<T> = T extends any[] ? T[number] : T;
type Collaborator = Flatten<Pick<EntryType, 'collaborators'>['collaborators']>

const EntryItem = ({ entry }: { entry?: EntryType }) => {
    const Contributors = <Box paddingTop={'4'} paddingBottom={'8'}>
        <Stack direction={"horizontal"} space={"4"} align={"center"}  wrap={true}>
        <Link href={
                entry?.publisher?.project?.domain
                    ? '/publication/' + entry?.publisher?.project?.domain.split('.')[0] + '/'
                    : '/member/' + entry?.publisher?.member?.address + '/'
            } passHref>    
            <Box cursor='pointer'>            
            <Stack direction={"horizontal"} space={"2"} align={"center"}>
                <Avatar
                    size="6"
                    placeholder={!entry?.publisher?.project?.avatarURL}
                    label={entry?.publisher?.project?.displayName || 'avatar'}
                    src={entry?.publisher?.project?.avatarURL} />
                <Text
                    weight={"semiBold"}
                    color='textSecondary'>{entry?.publisher?.project?.displayName}</Text>

                <Tag>{AddressPrettyPrint(entry?.publisher?.project?.address || "0x", 6)}</Tag>
            </Stack>
            </Box>   
        </Link>

            {entry?.collaborators?.map((collaborator: Collaborator) => {
                if (collaborator?.displayName === entry?.publisher?.project?.displayName) {
                    return <></>
                }
                return (
                    <Stack
                        key={collaborator?.address + 'collaborator'}
                        direction={"horizontal"} space={"2"} align={"center"}>
                        <Avatar
                            placeholder={!collaborator?.avatarURL}
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
            <Tag>{entry?.timestamp && dayjs.unix(entry.timestamp).fromNow()}</Tag>


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
                            style={{ hyphens: 'auto', wordBreak:'normal' }}
                            marginBottom="auto" paddingLeft={{sm:'2', xs:'2', md:"6", lg:'6', xl:'6'}} paddingRight={{sm:'2', xs:'2', md:"6", lg:'6', xl:'6'}}>
                            <Stack space={"4"}>
                                <Text size={{xs:'headingTwo', sm:'headingTwo', md:'headingTwo', lg:'headingOne', xl:'headingOne'}} weight='bold'
                                    lineHeight='none'>{entry?.title}</Text>
                                {Contributors}
                                    {entry?.body && processor.processSync(entry?.body).result}
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