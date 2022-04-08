//WIP


import thunder from 'src/fetcher'
import useSWR from 'swr'
import { render } from 'src/helpers/MarkdownSimpleParser'
import { Box, Heading, Skeleton, SkeletonGroup, Stat, Tag, Text, Stack, Button, IconChevronRight, IconChevronLeft } from 'design-system'
import Publisher from '@/components/Publisher'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
// import Image from 'next/image'
import { getFirstImage } from 'src/helpers/MarkdownUtils'
import type { BoxMaxWidth } from './Root'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import {fetcher as fetcherEntry} from './Entry'
//types
import { EntryType } from 'types'

const fetcher = () => {
    return thunder('query')({
        topEntries:{
            entryId:true,
            digest:true
         }
        }
    )
}

 



const EntryItem = ({ maxWidth, digest, }: { digest: string, maxWidth?: BoxMaxWidth }) => {
   
    const { data, error, isValidating } = useSWR(digest, fetcherEntry, {
        revalidateOnFocus: false
    });
    const [isImageError, setIsImageError] = useState(false)
    const [isCoverError, setIsCoverError] = useState(false)

    const router = useRouter()
    const entry = data?.entry
    return (
        <Box width="full"
        maxWidth='1/3'
        style={{ display: 'flex', flexShrink:0, maxHeight: '100%' }}>
            <Box display="flex"
                tabIndex={0}
                position={"relative"}
                borderRadius={"3xLarge"}
                onKeyDown={(e)=>{
                    if (e.key === 'Enter') {
                        if(entry?.publisher?.project?.domain){
                            router.push('/publication/' + entry?.publisher?.project?.domain.split('.')[0] + '/' + digest)
                        } else {
                            router.push('/member/' + entry?.publisher?.member?.address + '/' + digest)
                        }
                    }
                }}
             
                width="full" flexDirection="column"
                gap="4" backgroundColor={{'focus': 'backgroundSecondary','base':'background'}}
                
                >
                {!isValidating && !error && (
                    <Link href={
                        entry?.publisher?.project?.domain
                            ? '/publication/' + entry?.publisher?.project?.domain.split('.')[0] + '/' + digest
                            : '/member/' + entry?.publisher?.member?.address + '/' + digest
                    } passHref>
                        <Box
                            cursor="pointer"
                            zIndex='10'
                            position={'absolute'} left={'0'} top={'0'} width="full" style={{
                                height: 'calc(100% - 48px)'
                            }}>
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
                    {entry?.featuredImage?.url && !isCoverError
                        ? <img
                            style={{ userSelect: 'none', objectFit: 'cover', width: '100%', height: '100%' }}
                            loading="lazy"
                            onError={() => setIsCoverError(true)}
                            alt={entry?.title + 'cover image'}
                            src={entry?.featuredImage?.url} />
                        : entry?.body && getFirstImage(entry?.body) && !isImageError
                            ? <img
                                loading="lazy"
                                onError={() => setIsImageError(true)}
                                alt={entry?.title + 'cover image'}
                                style={{ userSelect: 'none', objectFit: 'cover', width: '100%', height: '100%' }}
                                src={getFirstImage(entry?.body) || ''} />
                            : <Box width="full" height="full"
                                style={{ minHeight: '100%', userSelect: 'none', textAlign: 'center', padding: '1rem', wordBreak: 'break-all' }}
                                display="flex"
                                alignItems={"center"}
                                justifyContent={"center"}
                                // @ts-ignore
                                backgroundColor={entry?.publisher?.project?.theme?.accent?.toLowerCase() || "foregroundSecondary"}
                            >
                                <Heading>{(entry?.title && entry?.title?.length >= 48) ? entry?.title?.slice(0, 48) + '...' : entry?.title}</Heading>
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
                                <Box
                                    maxHeight={'28'}
                                    style={{
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
                                    {entry?.publisher?.project && (
                                        <Publisher
                                            size="small"
                                            publisher={entry.publisher} />
                                    )}

                                </Skeleton>
                                <Skeleton>
                                    <Tag>{AddressPrettyPrint(entry?.publisher?.project?.address || "0x", 6)}</Tag>
                                </Skeleton>
                            </Stack>
                        </SkeletonGroup>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

const Entry = ({ maxWidth }: {maxWidth?: BoxMaxWidth }): JSX.Element => {
    
    const [scrollPos, setScrollPos] = useState(0)
    const container = useRef<HTMLDivElement>(null)

    const scrollRightButton = () => {
        if (container.current) {
            container.current.scrollTo({
                top: 0,
                left: container.current.scrollLeft + container.current.clientWidth /3,
                behavior: "smooth"
            })
        }
    }
    const scrollLeftButton = () => {
        if (container.current) {
             container.current.scrollTo({
                top: 0,
                left: container.current.scrollLeft - container.current.clientWidth /3,
                behavior: "smooth"
            })
        }
    }


    useEffect(()=>{
        const updateScrollPos = () => {
            setScrollPos(container.current?.scrollLeft || 0)
        }
        if(container.current){
            container.current.addEventListener('scroll', updateScrollPos)
        }
        return(()=>{
            if(container.current){
                container.current.removeEventListener('scroll', updateScrollPos)
            }
        })
    },[])

    const { data, error, isValidating } = useSWR('featuredEntries', fetcher, {
        revalidateOnFocus: false
    });
    
    if (!data && !error && !isValidating) {
        return <></>
    }
    return(
         <Box
         style={{
               background: 'linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.13) 100%)',
        }}
        backgroundColor={'foregroundSecondary'}
        paddingTop={'8'}
         borderRadius={'3xLarge'}
         width='full'
         position={'relative'}
          >
        <Box 
        borderRadius={'full'}
        zIndex='20'
        display={scrollPos === 0 ? 'none' : 'block'}
        boxShadow={'0.5'}
        backgroundColor={'white'}
        position='absolute' left='2' style={{top:'50%'}}>
            <Button 
            onClick={scrollLeftButton}
            variant='transparent'
            size='small' shape='circle'>
                <IconChevronLeft color={'textTertiary'}/>
            </Button>
        </Box>
        <Box 
          borderRadius={'full'}
         zIndex='20'
         display={container?.current && container?.current?.clientWidth > container?.current?.scrollLeft ? 'block' : 'none'}
         boxShadow={'0.5'}
           backgroundColor={'white'}
        position='absolute' right='2' style={{top:'50%'}}>
        <Button 
           onClick={scrollRightButton}
           variant='transparent'
           size='small' shape='circle'>
            <IconChevronRight color={'textTertiary'}/>
        </Button>
        </Box>
        <Stack direction='vertical' space='5'>
             <Box width={'full'}  paddingX={{xs:'4', sm: '4', md: '6', lg: '4', xl: '4'}}>
                    <Stack 
                    align='center'
                    justify={'space-between'}
                    direction='horizontal' space='2'>
                    <Text 
                    size='large'
                    weight={'semiBold'}
                    color='textTertiary'>
                        Popular entries
                    </Text>
                    </Stack>
                </Box>
             
            <Box
            paddingX={{xs:'4', sm: '4', md: '6', lg: '4', xl: '4'}}
            paddingBottom={'8'}
            ref={container}
            style={{
                scrollSnapType:'x mandatory',
                scrollSnapStop: 'always',
                gridAutoRows:'max-content',
                gridAutoFlow:'column',
                // overScrollBehaviourX: 'contain',
            }}
            display='grid'
            
            overflow={'scroll'} width='full'>
          
            {data && data?.topEntries?.map((entry:EntryType)=>{
            if(entry.digest){
            return(
                <EntryItem 
                maxWidth={'full'}
                digest={entry.digest}
                key={entry.digest+'featured_entry'}  />
                )
                } else return <></>
        })}
    
        </Box>
        </Stack>
        </Box> 
    )
};

export default Entry;