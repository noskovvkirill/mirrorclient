//state
import { useOnClickOutside } from 'hooks/useClickOutside'
import useLockBodyScroll from 'hooks/useLockBodyScroll'
import { useThrottleCallback } from '@react-hook/throttle'
import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
//components
import { Box, Input, Stack, Spinner, Skeleton, IconSearch } from 'design-system'
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
                <Box as='button'
                    position={(!isSearch && !isVisible) ? 'relative' : 'relative'}
                    // style={{ transform: (!isSearch && !isVisible) ? 'translateY(-1000px)' : 'translateY(0)' }}
                    transitionProperty='all'
                    transitionDuration={'500'}
                    onMouseEnter={() => {
                        setIsVisible(true)
                    }}
                    onClick={() => setIsOpen(true)}>
                    <Input
                        size={'small'}
                        width={{ xs: 'full', sm: '64', md: '64', lg: '96', xl: '96' }}
                        inputMode='search'
                        readOnly hideLabel placeholder='search' label='Search' />
                </Box>
            )}
            {isSearch && (
                <SearchPanel setIsOpen={setIsOpen} isSearch />
            )}
        </>
    )
}

const SearchPanel = ({ setIsOpen }: ISearch) => {

    useLockBodyScroll()
    const ref = useRef(null)
    const search = useRef<any>()
    useOnClickOutside(ref, () => { setIsOpen(false) })

    const router = useRouter()
    const [searchResult, setSearchResult] = useState<null | Array<any>>(null)
    const [searchState, setSearchState] = useState<'default' | 'loading' | 'not found' | 'error'>('default')
    const [searchMode, setSearchMode] = useState<'PUBLICATIONS' | 'ENTRIES'>('PUBLICATIONS')

    useEffect(() => {
        if (search.current) {
            search.current.focus()
        }
    }, [search])

    const handleSearch = async (query: string, mode: 'PUBLICATIONS' | 'ENTRIES') => {
        setSearchState('loading')
        const result = await SearchQuery(query, mode).catch(() => setSearchState('error'))
        if (!result) {
            setSearchState('error')
            return
        }
        if (result.length > 0) {
            const items = result[0]
            console.log('items')
            const publ = result[1]
            console.log('publ', publ)
            if (items.length <= 0) {
                setSearchResult([])
                setSearchState('not found')
                return
            }
            setSearchResult(items)
            setSearchState('default')
            return
        }
        const items = result[0]
        setSearchResult(items)
        setSearchState('default')
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
                            <Box position='absolute'
                                boxShadow={'1'}
                                ref={ref}
                                borderColor={'accent'}
                                borderRadius={'2xLarge'}
                                padding={'8'}
                                width={{ 'xs': 'full', 'sm': '3/4', 'md': '3/4', 'lg': '1/2', 'xl': '1/2' }}
                                backgroundColor={'backgroundSecondary'}
                                style={{
                                    left: '50%', top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}

                            >
                                <Stack align={'center'} justify={'center'}>
                                    <Input

                                        prefix={<IconSearch />}
                                        width={'full'}
                                        inputMode='search'
                                        hideLabel placeholder='Search publication or text' label='Search'
                                        ref={search}
                                        onChange={thottleSearch}

                                    />
                                    {(!searchResult || searchResult.length === 0) && searchState === 'default' && (
                                        <>
                                            <Skeleton height={'8'} width={'full'} loading backgroundColor={'foregroundSecondary'}>
                                                &nbsp;
                                            </Skeleton>
                                            <Skeleton height={'8'} width={'full'} loading backgroundColor={'foregroundSecondary'}>
                                                &nbsp;
                                            </Skeleton>
                                        </>
                                    )}
                                    {searchResult && searchResult?.length >= 0 && searchResult.map((item, index) => {
                                        return (
                                            <Skeleton
                                                key={index + 'search_result'}
                                                height={'8'} width={'full'} loading backgroundColor={'foregroundSecondary'}>
                                                {JSON.stringify(item)}
                                            </Skeleton>
                                        )
                                    })}

                                    {/* {JSON.stringify(searchResult)} */}
                                    {searchState === 'loading' && (
                                        <Box height='20' display='flex' alignItems="center" justifyContent='center'>
                                            <Spinner />
                                        </Box>
                                    )}
                                </Stack>
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