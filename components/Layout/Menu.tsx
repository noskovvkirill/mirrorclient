import { Button, IconMenu, Dropdown, DropdownItem, Stack, Box, Tag, Text, IconBookOpen, IconCollection } from 'design-system'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import type { PublisherType } from 'types'
import Publisher from '@/components/Publisher'

const Menu = ({ publisher }: { publisher?: PublisherType }) => {
    const router = useRouter()
    return (
        <Box
            width='fit'
            height='fit'
            borderRadius={'2xLarge'}
        >
            <Stack direction={'horizontal'} align='center'>
                <Dropdown trigger={
                    <Button
                        // tabIndex={0}
                        variant='tertiary'
                        size='small'
                        shape='circle'>
                        <IconMenu />
                    </Button>
                }>

                    <DropdownItem width='full'
                        size='small'
                        onClick={() => router.push('/')}
                        prefix={<IconCollection />}
                        variant={router.pathname === '' || router.pathname === '/' ? 'primary' : 'tertiary'}>
                        Feed
                    </DropdownItem>



                    <DropdownItem
                        disabled
                        onClick={() => router.push('/trending')}
                        width='full'
                        size='small'
                        variant={'secondary'}
                        // variant={router.pathname === '/trending' ? 'primary' : 'tertiary'}
                        prefix={<Tag size='small' tone={'blue'}>Soon</Tag>}
                    >
                        Trending
                        {/* Trending <Tag tone={'green'}>Coming soon</Tag> */}
                    </DropdownItem>


                    <DropdownItem
                        onClick={() => router.push('/about')}
                        width='full'
                        size='small'
                        variant={router.pathname === '/about' ? 'primary' : 'tertiary'}
                        prefix={<IconBookOpen />}
                    >
                        About
                    </DropdownItem>

                </Dropdown>


                <Box
                    display={{ sm: 'none', xs: 'none', md: 'none', lg: 'block', xl: 'block' }}
                    style={{ userSelect: 'none' }}
                >
                    {!publisher && (
                        <Text
                            color='textTertiary'
                            weight={
                                'bold'
                            }
                            size='extraLarge'
                        >Mirrorfeed
                        </Text>
                    )}
                    {publisher && (
                        <Publisher publisher={publisher} />
                    )}


                </Box>
            </Stack>
        </Box>
    )
}

export default Menu