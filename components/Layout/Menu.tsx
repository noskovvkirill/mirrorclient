import { Button, IconMenu, IconChevronLeft, Dropdown, DropdownItem, Stack, Box, Text, IconBookOpen, IconCollection, IconTrendingUp } from 'design-system'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStore } from 'contexts'
import {useAccount} from 'wagmi'
import type { PublisherType } from 'types'
import Publisher from '@/components/Publisher'


const Menu = ({ publisher }: { publisher?: PublisherType }) => {
    const { withEth } = useStore()
    const [{ data: accountData }] = useAccount()

    const router = useRouter()
    const trigger =  <Button
            variant='tertiary'
            size='small'
            shape={'circle'}>
            <IconMenu />
        </Button>
    const isUser =  withEth?.address && accountData?.address
    const isTrending = router.pathname.split('/').includes('trending')
    const isPublication = router.pathname.split('/').includes('publication')
    const isMember =  router.pathname.split('/').includes('member') 
    const isSettings = router.pathname.split('/').includes('settings')

    const triggerMobile =  <Button
    variant={'secondary'}
    tone={router.pathname !== '/about' ? isTrending ? 'green' : 'blue' : 'pink' }
    size='small'
    >
        <Stack direction='horizontal' align='center' space={'1.5'}>
           <IconMenu size={'6'}/>
        {router.pathname === '/' ? 'Home' : router.pathname === '/trending' ? 'Trending' :  router.pathname === '/about' ? 'About' : 'Home'}
        </Stack>
    </Button>

   
      
    const Menu =  <Dropdown 
        width={{xs:'72', sm:'72', md:'64', lg:'64', xl:'64'}}
        trigger={
            ((isPublication && !isUser) || (isMember && !isUser) || !isUser)
            ? trigger 
            : triggerMobile
        }>
        <DropdownItem width='full'
            size='small'
            onClick={() => router.push('/')}
            prefix={<IconCollection />}
            variant={router.pathname === '' || router.pathname === '/' ? 'primary' : 'tertiary'}>
            Feed
        </DropdownItem>

        <DropdownItem
            onClick={() => router.push('/trending')}
            width='full'
          
            tone='green'
            size='small'
            variant={router.pathname === '/trending' ? 'primary' : 'tertiary'}           
            prefix={<IconTrendingUp />}
           
        >
            Trending
        </DropdownItem>

        
        <DropdownItem
            onClick={() => router.push('/about')}
            width='full'
            size='small'
            tone='red'
            variant={router.pathname === '/about' ? 'primary' : 'tertiary'}
            prefix={<IconBookOpen />}
        >
            About
        </DropdownItem>

    </Dropdown>


    return (
        <Box
            width='fit'
            height='fit'
            borderRadius={'2xLarge'}
        >
            <Stack direction={'horizontal'} align='center'>
                    {!isSettings 
                    ? Menu
                    : <Button 
                    onClick={()=>router.back()}
                    size='small' shape='circle' variant='tertiary'><IconChevronLeft/></Button>
                    }

               
                    {!publisher && (
                         <Box
                         display={{ sm: 'none', xs: 'none', md: 'none', lg: 'block', xl: 'block' }}
                         style={{ userSelect: 'none' }}
                     >
                        <Box
                        width='fit'
                        display={{ sm: 'none', xs: 'none', md: 'none', lg: 'block', xl: 'block' }}
                        >
                        <Text
                            color='textTertiary'
                            weight={
                                'bold'
                            }
                            size='extraLarge'
                        >
                            
                            {!isSettings ? 'Mirrorfeed' : 'Home' }
                        </Text>
                        </Box>
                           </Box>
                    )}
                    {publisher && (
                        <>
                         <Box
                         display={{ sm: 'none', xs: 'none', md: 'block', lg: 'block', xl: 'block' }}
                         style={{ userSelect: 'none' }}
                     >
                        <Publisher
                     
                        publisher={publisher} />
                        </Box>
                        <Box
                         display={{ sm: 'block', xs: 'block', md: 'none', lg: 'none', xl: 'none' }}
                         style={{ userSelect: 'none' }}
                     >
                        <Publisher
                        hideLabel
                        publisher={publisher} />
                        </Box>
                        </>
                    )}


             
            </Stack>
        </Box>
    )
}

export default Menu