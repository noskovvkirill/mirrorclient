//components
import { Box, Stack } from 'design-system'
import Head from 'next/head'
import PageLoadProgress from '@/components/Layout/PageLoadProgress'
import Search from '@/components/Search'
//state
import React, { ReactNode, useEffect, useState, useCallback } from 'react'
import { useStore } from 'contexts'
import useScrollPosition from '@react-hook/window-scroll'
import UserProfile from '@/components/Layout/UserProfile'
import Menu from '@/components/Layout/Menu'
import { Subscribe, EmailConfirmed } from '@/components/Layout/PopUps'
//utils
// import { keyframes } from '@vanilla-extract/css'
import type { PublisherType } from 'types'
import type {NotificationType} from 'contexts'
import * as Toast from '@/components/Toast'

type Props = {
    children?: ReactNode;
    title?: string;
    isEmail?: boolean;
    color?: 'blue' | 'purple' | 'pink' | 'green'
    toolbar?: ReactNode | ReactNode[];
    publisher?: PublisherType
    description?: string;
    cover?: string;
    twitterAuthor?: string;
}

export const history: Array<{
    label: string,
    undo: () => void,
}> = [];



const Layout = ({ 
    color='blue',isEmail=false,
    children, title = 'Mirror feed', cover = '', twitterAuthor = '@noskovvkirill', description = 'Curation feed', toolbar, publisher }: Props) => {

    const [isPinnedList, setIsPinnedList] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [scrollDir, setScrollDir] = useState<'top' | 'bottom' | 'stale'>('stale')
    const scrollY = useScrollPosition(8) //framerate scroll check
    const [prevScroll, setPrevScroll] = useState(0)
    const {notifications } = useStore()


   const setIsSearchOpen = useCallback((newState:boolean)=>{
        setIsSearch(newState)
   },[])

    const handleKey = (e: KeyboardEvent) => {
        if (e.keyCode === 18 || e.key === 'Alt') {
            setIsSearch(!isSearch)
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', handleKey)
            return (() => window.removeEventListener('keydown', handleKey))
        }
    }, [])

    useEffect(() => {
        const currentScroll = scrollY
        if (currentScroll >= Math.floor(window.innerHeight / 3) && scrollDir === 'bottom') {
            setIsPinnedList(false)
        }
        if (currentScroll <= 200) {
            setIsPinnedList(true)
            return
        }
        if ((prevScroll - currentScroll) > 130 && scrollDir !== 'top') {
            setScrollDir('top')
        }
        if ((prevScroll - currentScroll) > 130 && scrollDir === 'top') {
            setIsPinnedList(true)
        }
        if ((currentScroll - prevScroll) > 70 && scrollDir !== 'bottom') {
            setScrollDir('bottom')
        }
        setPrevScroll(scrollY)

    }, [scrollY, scrollDir, prevScroll])

 

    return (
        <Box
            minHeight={'viewHeight'}
            backgroundColor={'backgroundTertiary'}
        >
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    property="og:description"
                    content={description}
                />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={title} key="title" />
                <meta
                    property="og:image"
                    content={cover} key={"cover"} />
                <link rel="image_src" href={cover} />
                <meta name="twitter:image" key="twitterImage" content={cover} />

                <meta name="twitter:card" key="twitterCard" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="twitter:site" content={twitterAuthor} />
                <meta name="twitter:creator" content={twitterAuthor} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

            </Head>

            {/* Gradient */}
            <Box as='section'
                position='fixed'
                width='full'
                height='96'
                style={{
                    pointerEvents: 'none',
                    userSelect: 'none',
                    top: 0,
                    left: 0,
                    background: 
                    color === 'blue' ? 'linear-gradient(to top, rgba(0, 0, 0, 0) 20%, rgba(0, 124, 255, 0.3) 100%)'
                    : color === 'pink' ? 'linear-gradient(to top, rgba(0, 0, 0, 0) 20%, rgba(255, 0, 255, 0.3) 100%)' 
                    : color === 'purple' ? 'linear-gradient(to top, rgba(0, 0, 0, 0) 20%, rgba(255, 0, 255, 0.3) 100%)'
                    : color === 'green' ? 'linear-gradient(to top, rgba(0, 0, 0, 0) 20%, rgba(0, 255, 0, 0.3) 100%)'
                    : 'linear-gradient(to top, rgba(0, 0, 0, 0) 20%, rgba(0, 124, 255, 0.3) 100%)'
                }}
            >
            </Box>

            <Box as='header'
                style={{ transform: (!isSearch && !isPinnedList) ? 'translateY(-1000px)' : 'translateY(0)' }}
                transitionProperty='all'
                transitionDuration={'500'}
                display={'flex'}
                paddingX={{ xs: '2.5', sm: '4', md: '4', lg: '4', xl: '4' }}
                width={'full'}
                maxWidth={'full'}
                overflow={'hidden'}
                paddingY={'5'}
                gap={{ xs: '2.5', sm: '2.5', md: '6', lg: '6', xl: '6' }}
                alignItems={'center'}
                position='sticky'
                justifyContent={'space-between'}
                top={'0'}
                zIndex={"10"}
            >
                <PageLoadProgress />


                <Box
                    flexGrow={{xs: 0, sm: 1, md: 1, lg: 1, xl: 1}}
                    flexBasis={'0'}
                >
                    <Box position='relative'>
                        <Menu publisher={publisher} />
                    </Box>
                </Box>
                <Box
                  display={{ sm: 'block', xs: 'none', md: 'block', lg: 'block', xl: 'block' }}
                >
                    <Search
                        setIsVisible={setIsPinnedList}
                        isVisible={isPinnedList}
                        isSearch={isSearch}
                        setIsOpen={setIsSearchOpen}
                    />
                </Box>

                <Box flexBasis={'0'} flexGrow={1}>
                   
                    <Box
                        position='relative'
                    >
                        
                        <Stack direction='horizontal'
                            justify={'flex-end'}>
                                 <Box
                    display={{ sm: 'none', xs: 'block', md: 'none', lg: 'none', xl: 'none' }}
                    >
                        <Search
                            setIsVisible={setIsPinnedList}
                            isVisible={isPinnedList}
                            isSearch={isSearch}
                            setIsOpen={setIsSearch}
                        />
                    </Box>
                            <UserProfile />
                        </Stack>
                    </Box>
                </Box>


            </Box>

            <Subscribe />
            <EmailConfirmed isOpen={isEmail}/>
            <Toast.Provider 
                 swipeDirection={'down'}
                duration={6000}>
            <Box as='main'
                backgroundColor={'backgroundTertiary'}
                flex={1}
           
                justifyContent={'flex-start'}
                flexDirection={'column'}
                paddingX={{ sm: '2.5', xs: '2.5', md: '6', lg: '8', xl: '8' }}
            >
                {children}

                {notifications.map((item:NotificationType, index)=>{
                    return (
                        <Toast.Root key={'toast'+index}>
                        <Toast.Description>{item.message}</Toast.Description>
                    </Toast.Root>
                    )
                })}
            

                <Toast.Viewport/>
            </Box>
            </Toast.Provider>

            {toolbar && (<Box as='section'
                position='fixed'
                right={'8'}
                top={'32'}
            >
                {toolbar}
            </Box>)}


            <Box
                as='footer'
                width={'16'}
                height={"16"}
                position={'fixed'}
                transitionProperty='all'
                transitionDuration={'500'}
                style={{ transform: (!isSearch && !isPinnedList) ? 'translateY(1000px)' : 'translateY(0)', mixBlendMode: 'multiply' }}
                backgroundColor={'backgroundSecondary'}
                zIndex={'10'} right={"4"} bottom={"4"}
                display={'flex'} alignItems={'center'} justifyContent={'center'}
                aspectRatio='1/1' borderRadius={'full'}>
                <Box
                    width={"6"}
                ><svg viewBox="0 0 144 185" xmlns="http://www.w3.org/2000/svg" ><path d="M0 71.6129C0 32.0622 32.0622 0 71.6129 0C111.164 0 143.226 32.0622 143.226 71.6129V174.118C143.226 180.128 138.354 185 132.343 185H10.8824C4.87222 185 0 180.128 0 174.118V71.6129Z" fill="url(#markGradient)"></path><path clipRule="evenodd" d="M134.717 176.111V71.8216C134.717 36.8684 106.465 8.53326 71.6129 8.53326C36.7613 8.53326 8.50846 36.8684 8.50846 71.8216V176.111C8.50846 176.308 8.66719 176.467 8.86298 176.467H134.363C134.559 176.467 134.717 176.308 134.717 176.111ZM71.6129 0C32.0622 0 0 32.1556 0 71.8216V176.111C0 181.02 3.96809 185 8.86298 185H134.363C139.258 185 143.226 181.02 143.226 176.111V71.8216C143.226 32.1556 111.164 0 71.6129 0Z" fill="var(--colors-accent)" fillRule="evenodd"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="markGradient" x1="18.435" x2="143.747" y1="10.6666" y2="209.447"><stop offset="0.265625" stopColor="var(--colors-accent)"></stop><stop offset="0.734375" stopColor="var(--colors-background)"></stop></linearGradient></defs></svg></Box>
            </Box>


            {/* <Box as='footer'
                width={'fit'}
                borderRadius={'full'}
                position={'fixed'}
                transitionProperty='all'
                transitionDuration={'500'}
                style={{ transform: (!isSearch && !isPinnedList) ? 'translateY(1000px)' : 'translateY(0)' }}
                backgroundColor={'backgroundSecondary'}
                zIndex={'10'} right={"4"} bottom={"4"}>
                <Box
                    display={'flex'} alignItems={'center'} justifyContent={'center'}
                    width={'16'} height={"16"} aspectRatio='1/1' borderRadius={'full'}>
                    <Box
                        width={"6"}
                    ><svg viewBox="0 0 144 185" xmlns="http://www.w3.org/2000/svg" ><path d="M0 71.6129C0 32.0622 32.0622 0 71.6129 0C111.164 0 143.226 32.0622 143.226 71.6129V174.118C143.226 180.128 138.354 185 132.343 185H10.8824C4.87222 185 0 180.128 0 174.118V71.6129Z" fill="url(#markGradient)"></path><path clipRule="evenodd" d="M134.717 176.111V71.8216C134.717 36.8684 106.465 8.53326 71.6129 8.53326C36.7613 8.53326 8.50846 36.8684 8.50846 71.8216V176.111C8.50846 176.308 8.66719 176.467 8.86298 176.467H134.363C134.559 176.467 134.717 176.308 134.717 176.111ZM71.6129 0C32.0622 0 0 32.1556 0 71.8216V176.111C0 181.02 3.96809 185 8.86298 185H134.363C139.258 185 143.226 181.02 143.226 176.111V71.8216C143.226 32.1556 111.164 0 71.6129 0Z" fill="var(--colors-accent)" fillRule="evenodd"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="markGradient" x1="18.435" x2="143.747" y1="10.6666" y2="209.447"><stop offset="0.265625" stopColor="var(--colors-accent)"></stop><stop offset="0.734375" stopColor="var(--colors-background)"></stop></linearGradient></defs></svg></Box>
                </Box>
            </Box> */}


        </Box >
    )
}

export default Layout