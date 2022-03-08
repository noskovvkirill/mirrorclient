import { useRef, useEffect } from 'react'
import useOnScreen from 'hooks/useOnScreen'
//components
import { Box, Spinner as Loader } from 'design-system'
import Entry from '@/components/Cards/Entry'
//types
import type { EntryType } from 'types'


type DataType = Array<EntryType['digest'] | null | undefined> | Array<EntryType> | null | undefined;

interface IGrid {
    data: DataType;
    setSize?: any;
    error?: any;
    isValidating?: boolean;
    pathName: string;
    fetchEntries?: boolean
}

const Grid = ({ data, error, isValidating, setSize, pathName, fetchEntries }: IGrid) => {
    // const appSettings = useRecoilValue(settings)
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useOnScreen(ref, {
        threshold: 0,
        rootMargin: '100%'
    })

    const isVisible = !!entry?.isIntersecting
    useEffect(() => {
        if (isVisible) {
            setSize((s: number) => s += 1)
        }
    }, [isVisible, setSize])


    if (error) return <Box>Something went wrong...Refresh the page  {JSON.stringify(error)}</Box>


    return (
        <Box
            display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'grid', xl: 'grid' }}
            minHeight={'viewHeight'}
            gridTemplateColumns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, }}
            gridTemplateRows={'auto'}
            overflow={'hidden'}
            flexDirection={'column'}
            style={{
                gridColumnGap: '18px',
                gridRowGap: '18px',
                width: '100%',
            }}
        >

            {data?.map((item: EntryType | EntryType['digest'] | null | undefined) => {
                if (!item) {
                    return (<></>)
                }
                if (typeof item === 'string') {
                    return (
                        <Entry
                            maxWidth={'full'}
                            key={item + 'card'} digest={item} />
                    )
                } else {
                    if (!fetchEntries && item.digest) {
                        return (
                            <Entry
                                digest={item.digest}
                                entry={item}
                                maxWidth={'full'}
                                key={item.digest + 'card'} />
                        )
                    }
                }
            })}

            <Box
                width={'full'}
                display='flex'
                ref={setSize && ref}
                justifyContent='center'
                alignItems='center'
                style={{
                    gridColumn: 'span 3'
                }}
                height={'24'}>
                {isValidating && <Loader size='large' />
                }
            </Box>

            {/* {setSize && (
                <div
                    style={{ backgroundColor: 'red', opacity: 0, bottom: 0, height: '256px' }}
                    ref={ref}>
                    &nbsp;
                </div>
            )} */}

        </Box>
    )


}

export default Grid