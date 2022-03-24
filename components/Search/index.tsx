//state
import { useOnClickOutside } from 'hooks/useClickOutside'
import useLockBodyScroll from 'hooks/useLockBodyScroll'
import { useThrottleCallback } from '@react-hook/throttle'
import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
//components
import { Box, Input, Stack, Spinner, Skeleton, IconSearch, Text, Button } from 'design-system'
import Publisher from '@/components/Publisher'
import Link from 'next/link'
//@TODO: create a separate component for toolbar
import * as Toolbar from '@radix-ui/react-toolbar';

//utils
import * as dayjs from 'dayjs'
import SearchQuery from 'src/search'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


interface ISearch {
    setIsOpen: (newState: boolean) => void;
    isSearch: boolean;
}

const SearchBar = ({ isSearch, setIsOpen, isVisible, setIsVisible }: ISearch & { isVisible: boolean, setIsVisible: (newState: boolean) => void; }) => {
    return (
        <>
            {!isSearch && (
                <Box 
                    position={(!isSearch && !isVisible) ? 'relative' : 'relative'}
                    // style={{ transform: (!isSearch && !isVisible) ? 'translateY(-1000px)' : 'translateY(0)' }}
                    transitionProperty='all'
                    transitionDuration={'500'}
                    onMouseEnter={() => {
                        setIsVisible(true)
                    }}
                    onClick={() => setIsOpen(true)}>
                      
                        <Box
                            display={{ xs: 'none', sm:  'flex', md:  'flex', lg:  'flex', xl: 'flex' }}

                        >
                    <Input
                        tabIndex={-1}
                        size={'small'}
                        suffix={<Box
                            display={{ xs: 'none', sm: 'none', md: 'inline-block', lg: 'inline-block', xl: 'inline-block' }}
                        ><Text
                            size='small'
                            color='textTertiary'>⌥</Text></Box>}
                        width={{ xs: 'full', sm: '64', md: '64', lg: '96', xl: '96' }}
                        inputMode='search'
                        readOnly hideLabel placeholder='search' label='Search' />
                        </Box>
                        <Box
                            display={{ xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' }}
                        >
                            <Button shape={'circle'}
                            size='small'
                            variant={'tertiary'}
                            >
                                 <IconSearch />
                            </Button>
                        </Box>
                </Box>
            )}
            {isSearch && (
                <SearchPanel setIsOpen={setIsOpen} isSearch />
            )}
        </>
    )
}

const SearchPanel = ({ setIsOpen, isSearch }: ISearch) => {

    useLockBodyScroll()

    const router = useRouter()

    const ref = useRef<HTMLDivElement>(null)

    const publicationArea = useRef<any>(null)
    const entryArea = useRef<any>(null)
    const filterArea = useRef<any>(null)

    const search = useRef<any>()
    useOnClickOutside(ref, () => { setIsOpen(false) })

    const focusArea = useRef<'input' | 'filter' | 'publications' | 'entries'>('input')

    const [searchResultText, setSearchResultText] = useState<null | Array<any>>(null)
    const [searchStateText, setSearchStateText] = useState<'default' | 'loading' | 'not found' | 'error'>('default')

    const [searchResult, setSearchResult] = useState<null | Array<any>>(null)
    const [searchState, setSearchState] = useState<'default' | 'loading' | 'not found' | 'error'>('default')
    const [searchMode, setSearchMode] = useState<'PUBLICATIONS' | 'ENTRIES' | undefined>(undefined)

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Alt') {
            setIsOpen(false)
        }

        if (e.key === 'ArrowDown') {
            if (focusArea.current === 'input') {
                e.preventDefault()
                focusArea.current = 'filter'
                filterArea.current.focus()
                return
            }
            if (focusArea.current === 'filter') {
                e.preventDefault()
                if (publicationArea.current && searchResult && searchResult.length > 0) {
                    focusArea.current = 'publications'
                    publicationArea.current.focus()
                    return
                } else if (entryArea.current && searchResultText && searchResultText.length > 0) {
                    focusArea.current = 'entries'
                    entryArea.current.focus()
                    return
                }
            }
        }
        if (e.key === 'ArrowUp') {
            if (focusArea.current === 'filter') {
                e.preventDefault()
                focusArea.current = 'input'
                search.current.focus()
            }
        }
    }

    useEffect(() => {
        if (search.current) {
            search.current.value = ''
            search.current.focus()
            focusArea.current = 'input'
        }
    }, [search])

    useEffect(() => {
        if (search.current) {
            search.current.value = ''
        }
    }, [isSearch])
    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('keydown', handleKeyDown)
            return (() => window.removeEventListener('keydown', handleKeyDown))
        }
    }, [searchResult, searchResultText])

    const handleSearch = async (query: string, mode: 'PUBLICATIONS' | 'ENTRIES' | undefined) => {
        setSearchState('loading')
        setSearchStateText('loading')
        const result = await SearchQuery(query, mode).catch(() => setSearchState('error'))
        if (!result) {
            setSearchState('error')
            return
        }
        if (result.length > 0) {
            const items = result[1]
            const text = result[0]
            if (items && items.length <= 0) {
                setSearchResult([])
                setSearchState('not found')
            }
            if (text && text.length <= 0) {
                setSearchResultText([])
                setSearchStateText('not found')
            }
            setSearchResult(items)
            setSearchResultText(text)
            setSearchState('default')
            setSearchStateText('default')
            return
        }
        const items = result[1]
        setSearchResult(items)
        setSearchResultText(result[0])
        setSearchState('default')
        setSearchStateText('default')
    }

    const InputSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {

        setSearchState('loading')
        const target = e.target
        if (target.value === '') {
            setSearchState('default')
            setSearchResult([])
            return
        }
        handleSearch(target.value, searchMode)


    }

    const thottleSearch = useThrottleCallback(InputSearch, 1)



    return (
        <>
            {typeof window !== 'undefined' && (
                <>
                    {createPortal(
                        <>
                            <Box width='full' height='full'
                                position="fixed" left={"0"} top={"0"}
                                style={{ backdropFilter: 'blur(5px)', transition: 'backdrop-filter 1s ease-in-out' }}
                            >
                                &nbsp;
                            </Box>
                            {/* <Box width='full' height='full'
                            > */}
                            <Box 
                            width='full'
                            overflow={'hidden'}
                            height='full'
                            display='flex'
                            alignItems='center'
                            justifyContent='flex-start'
                            flexDirection='column'
                            maxHeight={'full'}
                                zIndex='100'
                                position="fixed" left={"0"} top={"0"}
                                paddingY={'16'}
                                style={{
                                    left: '50%', top: '0', bottom:'0',
                                    transform: 'translate(-50%, 0%)'
                                }}
                                paddingX={'4'}
                                >
                                <Box 
                                    boxShadow={'1'}
                                    ref={ref}
                                    borderColor={'accent'}
                                    borderRadius={'2xLarge'}
                                    paddingY={'8'}
                                    paddingBottom='0'
                                    width={{ 'xs': 'full', 'sm': '3/4', 'md': '3/4', 'lg': '1/2', 'xl': '1/2' }}
                                    height={'fit'}
                                    maxHeight={'full'}
                                    overflow={'hidden'}
                                    backgroundColor={'backgroundSecondary'}
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent={'flex-start'}
                                    gap={'4'}

                                >
                                        <Box position='sticky' 
                                        width='full'
                                        paddingX={'8'}
                                        zIndex={'100'}
                                        top='0'>
                                        <Input
                                            onFocus={() => focusArea.current = 'input'}
                                            prefix={<IconSearch />}
                                            width={'full'}
                                            inputMode='search'
                                            hideLabel placeholder='Search publication or text' label='Search'
                                            ref={search}
                                            onChange={(e) => {
                                                if (isSearch) {
                                                    thottleSearch(e)
                                                }
                                            }}
                                        />
                                        </Box>

                                        <Box width='full'
                                            display={'flex'}
                                            justifyContent={'flex-start'}
                                        maxHeight={'full'}
                                        paddingX={'8'}
                                        alignItems={'center'}
                                        flexDirection={'column'}
                                        overflow={'scroll'}
                                        gap={'0'}
                                        paddingBottom='4'
                                        >
                             
                                        <Box width='full' 
                                        paddingTop='2'
                                        paddingY='5' >
                                            <Toolbar.Root ref={filterArea}
                                                onFocus={() => focusArea.current = 'filter'}
                                            >
                                                <Stack direction='horizontal' space='2'>
                                                    <Toolbar.Button asChild>
                                                        <Button size='small'
                                                            onClick={() => setSearchMode(undefined)}
                                                            variant={searchMode === undefined ? 'primary' : 'tertiary'}
                                                        >All</Button>
                                                    </Toolbar.Button>
                                                    <Toolbar.Button asChild>
                                                        <Button size='small'
                                                            onClick={() => setSearchMode('PUBLICATIONS')}
                                                            variant={searchMode === 'PUBLICATIONS' ? 'primary' : 'tertiary'}
                                                        >Publications</Button>
                                                    </Toolbar.Button>
                                                    <Toolbar.Button asChild>
                                                        <Button
                                                            onClick={() => setSearchMode('ENTRIES')}
                                                            variant={searchMode === 'ENTRIES' ? 'primary' : 'tertiary'}
                                                            size='small'>Entries</Button>
                                                    </Toolbar.Button>
                                                </Stack>
                                            </Toolbar.Root>
                                        </Box>

                                        {(searchMode === 'PUBLICATIONS' || searchMode === undefined) && (
                                            <Box width='full' 
                                            paddingY='4'
                                            >
                                                <Stack align={'center'} justify={'flex-start'}>
                                                    <Box width='full'>
                                                        <Text color='textSecondary' weight='bold'>Publications</Text>
                                                    </Box>
                                                    {(!searchResult || search?.current?.value === '') && searchState === 'default' && (
                                                        <>
                                                            <Skeleton height={'10'} width={'full'} loading backgroundColor={'foregroundSecondary'}>
                                                                &nbsp;
                                                            </Skeleton>
                                                            <Skeleton height={'10'} width={'full'} loading backgroundColor={'foregroundSecondary'}>
                                                                &nbsp;
                                                            </Skeleton>
                                                        </>
                                                    )}
                                                    <Box width='full'>
                                                        <Toolbar.Root orientation='vertical'
                                                            onFocus={() => focusArea.current = 'publications'}
                                                            ref={publicationArea}
                                                            loop={false}>
                                                            <Stack>
                                                                {searchState !== 'loading' && search?.current?.value !== '' && searchResult && searchResult?.length >= 0 && searchResult.map((item, index, arr) => {
                                                                    return (
                                                                        <Toolbar.Link
                                                                            onFocus={() => focusArea.current = 'publications'}
                                                                            onKeyDown={(e) => {
                                                                                if (e.key === 'ArrowUp' && index === 0) {
                                                                                    e.stopPropagation()
                                                                                    focusArea.current = 'filter'
                                                                                    filterArea.current.focus()
                                                                                }
                                                                                if (e.key === 'ArrowDown' && index === arr.length - 1 && entryArea.current && searchResultText && searchResultText.length > 0) {
                                                                                    e.stopPropagation()
                                                                                    focusArea.current = 'entries'
                                                                                    entryArea.current.focus()
                                                                                }
                                                                                if (e.key === 'Enter') {
                                                                                    e.stopPropagation()
                                                                                    setIsOpen(false)
                                                                                    if (item.type === 'DOMAIN') {
                                                                                        router.push('/publication/' + item.ensLabel + '/')
                                                                                    } else {
                                                                                        router.push('/member/' + item.ensLabel + '/')
                                                                                    }
                                                                                }
                                                                            }}
                                                                            key={index + 'search_result'}
                                                                        >
                                                                            <Link href={
                                                                                item.type === 'DOMAIN'
                                                                                    ? '/publication/' + item.ensLabel + '/'
                                                                                    : '/member/' + item.ensLabel + '/'
                                                                            } passHref>
                                                                                <Box width='fit'
                                                                                >
                                                                                    <Publisher ensLabel={item.type === 'ADDRESS' ? item.ensLabel : item.ensLabel + '.mirror.xyz'} size='default' />
                                                                                </Box>
                                                                            </Link>
                                                                        </Toolbar.Link>

                                                                    )
                                                                })}
                                                            </Stack>
                                                        </Toolbar.Root>
                                                    </Box>
                                                    {searchState !== 'loading' && searchResult && searchResult?.length <= 0 && search?.current?.value !== '' && (
                                                        <Box height={'24'} display='flex' alignItems="center" justifyContent='center'>
                                                            <Text>No publications found</Text>
                                                        </Box>
                                                    )}
                                                    {searchState === 'loading' && (
                                                        <Box height={'24'} display='flex' alignItems="center" justifyContent='center'>
                                                            <Spinner />
                                                        </Box>
                                                    )}
                                                </Stack>
                                            </Box>)}


                                        {(searchMode === 'ENTRIES' || searchMode === undefined) && (
                                            <Box width='full' paddingY='4'
                                          
                                            >
                                                <Stack align={'center'} justify={'flex-start'}>
                                                    <Box width='full'>
                                                        <Text color='textSecondary' weight='bold'>Entries</Text>
                                                    </Box>
                                                    {(!searchResultText || search?.current?.value === '') && searchStateText === 'default' && (
                                                        <>
                                                            <Skeleton height={'10'} width={'full'} loading backgroundColor={'foregroundSecondary'}>
                                                                &nbsp;
                                                            </Skeleton>
                                                            <Skeleton height={'10'} width={'full'} loading backgroundColor={'foregroundSecondary'}>
                                                                &nbsp;
                                                            </Skeleton>
                                                        </>
                                                    )}
                                                    <Box width='full'>
                                                        <Toolbar.Root orientation='vertical'
                                                            onFocus={() => focusArea.current = 'entries'}
                                                            ref={entryArea}
                                                            loop={false}>
                                                            <Stack>
                                                                {searchStateText !== 'loading' && search?.current?.value !== '' && searchResultText && searchResultText?.length >= 0 && searchResultText.map((item, index) => {
                                                                    return (
                                                                        <Toolbar.Link
                                                                            key={index + 'search_result_text'}
                                                                            onFocus={() => focusArea.current = 'entries'}
                                                                            onKeyDown={(e) => {
                                                                                if (e.key === 'ArrowUp' && index === 0) {
                                                                                    e.stopPropagation()
                                                                                    if (publicationArea.current && searchResult && searchResult.length > 0) {
                                                                                        focusArea.current = 'publications'
                                                                                        publicationArea.current.focus()
                                                                                    } else if (filterArea.current) {
                                                                                        focusArea.current = 'filter'
                                                                                        filterArea.current.focus()
                                                                                    }
                                                                                }
                                                                                if (e.key === 'Enter') {
                                                                                    e.stopPropagation()
                                                                                    setIsOpen(false)
                                                                                    if (item?.domain) {
                                                                                        router.push('/publication/' + item?.domain.split('.')[0] + '/' + item.digest)
                                                                                    } else {
                                                                                        router.push('/member/' + item.project + '/' + item.digest)
                                                                                    }
                                                                                }

                                                                            }}
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    item?.domain
                                                                                        ? '/publication/' + item?.domain.split('.')[0] + '/' + item.digest
                                                                                        : '/member/' + item.project + '/' + item.digest
                                                                                } passHref>
                                                                                <Box width='full'

                                                                                    height='full'
                                                                                    backgroundColor={{ 'hover': 'foregroundSecondary', 'base': 'foregroundTertiary', 'active': 'accentSecondary' }}
                                                                                    borderWidth='0.375'
                                                                                    padding={'4'}
                                                                                    borderRadius={'2xLarge'}
                                                                                >
                                                                                    <Stack direction='vertical' space='3'>
                                                                                        <Text color='textSecondary'>{item.title.slice(0, 96)}{item.title.length >= 96 ? '...' : ''}</Text>
                                                                                        <Box width='fit'>
                                                                                            <Publisher
                                                                                                size='small'
                                                                                                ensLabel={item.domain ? item.domain : item.project} />
                                                                                        </Box>
                                                                                    </Stack>
                                                                                </Box>
                                                                            </Link>
                                                                        </Toolbar.Link>
                                                                    )
                                                                })}
                                                            </Stack>
                                                        </Toolbar.Root>
                                                    </Box>

                                                    {searchStateText === 'loading' && (
                                                        <Box height={'24'} display='flex' alignItems="center" justifyContent='center'>
                                                            <Spinner />
                                                        </Box>
                                                    )}
                                                    {searchStateText !== 'loading' && searchResultText && searchResultText?.length <= 0 && search?.current?.value !== '' && (
                                                        <Box height={'24'} display='flex' alignItems="center" justifyContent='center'>
                                                            <Text>No entries found</Text>
                                                        </Box>
                                                    )}
                                                </Stack>
                                            </Box>)}
                                            </Box>
                                        </Box>
                                </Box>
                        </>
                        ,

                        document.body)}
                </>
            )
            }
        </>
    )
}

export default SearchBar