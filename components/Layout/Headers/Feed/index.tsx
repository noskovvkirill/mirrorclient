
//components
import { Box, Stack, Text, Heading, Tag } from 'design-system'
import Link from 'next/link'
//state 
import { useStore } from 'contexts'
import { useAccount } from 'wagmi'

type FeedType = typeof fetchOptions[number];
type FeedTypeEdge = Pick<FeedType, "edges">["edges"][number];

export const fetchOptions = [
  {
    name: 'Entries',
    baseHref: '/',
    isProtected: false,
    edges: [
      { name: "Publications", href: '/', isProtected: false },
      { name: 'All', href: '/all', isProtected: false },
      { name: 'Subscribed', href: '/subscribed', isProtected: true },
    ]
  },
  {
    name: 'Editions',
    baseHref: '/editions',
    isComingSoon: true,
    isProtected: false,
    edges: [
      { name: 'Latest', href: '/', isProtected: false },
      { name: 'Owned', href: '/owned', isProtected: true },
    ]
  },
  {
    name: 'Crowdfunds',
    baseHref: '/crowdfunds',
    isComingSoon: true,
    isProtected: false,
    edges: [
      { name: 'Latest', href: '/', isProtected: false },
      { name: 'Owned', href: '/participated', isProtected: true },
    ]
  },
]

const HeaderFeed = ({ pathName }: { pathName: string }) => {
  const [{ data: accountData }] = useAccount()
  const { ToggleAuth, withEth } = useStore()

  const fetchOption = () => {
    if (pathName === '/') return ['/', '/']
    if (pathName === '/subscribed') return ['/', '/subscribed']
    if (pathName === '/all') return ['/', '/all']
    if (pathName === '/editions') return ['/editions', '/']
    if (pathName === '/crowdfunds') return ['/crowdfunds', '/']

    if (pathName.split('/').length === 1) {
      return [pathName, '/']
    }
    else return []
  }

  return (
    <Box width='full'
      marginTop={{ xs: '6', sm: '6', md: '16', lg: '16', xl: '16' }}
      paddingY={'8'}
      paddingX={{ xs: '0', sm: '0', md: '0', lg: '10', xl: '10' }}
      borderRadius={'2xLarge'}
      marginBottom={{ xs: '10', sm: '10', md: '12', lg: '12', xl: '12' }}
    >
      <Stack direction={{ xs: 'vertical', sm: 'horizontal', md: 'horizontal', lg: 'horizontal', xl: 'horizontal' }} space={'12'}>
        <Stack space={'2'}>
          {[...fetchOptions.find((option) => fetchOption()[0] === option.baseHref)?.edges || []]
            .sort((a: FeedTypeEdge, b: FeedTypeEdge) => {
              if (a.href === fetchOption()[1]) return -1;
              else if (b.href === fetchOption()[1]) return 1;
              else return 0;
            })
            .map((edge) => {
              if (!edge.isProtected)
                return (
                  <Box
                    width='fit'
                    style={{ userSelect: 'none' }}
                    cursor={fetchOption()[1] === edge.href ? 'default' : 'pointer'} key={'fetch_option_' + edge.name}>
                    <Stack space={'0'}>
                      {fetchOption()[1] === edge.href && (
                        <Text
                          weight={'bold'}
                          color={'textTertiary'}
                        >Filter</Text>
                      )}
                      <Link
                        href={edge.href}
                        passHref
                      >
                        <Box as={fetchOption()[1] === edge.href ? 'h1' : 'h2'}
                          lineHeight={'1.25'}
                          width='fit'
                          fontWeight={'semiBold'}
                          fontSize={fetchOption()[1] === edge.href ? { xs: 'headingTwo', sm: 'headingTwo', md: 'headingOne', lg: 'headingOne' } : { xs: 'headingTwo', sm: 'headingTwo', md: 'headingTwo', lg: 'headingTwo' }}
                          color={{ base: fetchOption()[1] === edge.href ? "accent" : "textTertiary", 'hover': 'accent' }}
                        >
                          {edge.name.toString()}
                        </Box>
                      </Link>
                    </Stack>

                  </Box>)
              if (accountData && withEth.address) {
                return (
                  <Box
                    style={{ userSelect: 'none' }}
                    key={'fetch_option_' + edge.name}
                    cursor={
                      fetchOption()[1] === edge.href ? 'default' : 'pointer'}>
                    <Stack space={'0'}>
                      {fetchOption()[1] === edge.href && (
                        <Text
                          weight={'bold'}
                          color={'textTertiary'}
                        >Filter</Text>
                      )}
                      <Link
                        href={edge.href}
                        passHref
                      >
                        <Box
                          lineHeight={'1.25'}
                          fontWeight={'semiBold'}
                          as={fetchOption()[1] === edge.href ? 'h1' : 'h2'}
                          fontSize={fetchOption()[1] === edge.href ? { xs: 'headingTwo', sm: 'headingTwo', md: 'headingOne', lg: 'headingOne' } : { xs: 'headingTwo', sm: 'headingTwo', md: 'headingTwo', lg: 'headingTwo' }}
                          color={{ base: fetchOption()[1] === edge.href ? "accent" : "textTertiary", 'hover': 'accent' }}
                          key={edge.name}>
                          {edge.name}
                        </Box>
                      </Link>
                    </Stack>
                  </Box>
                )
              }
              return (
                <Box
                  style={{
                    userSelect: 'none',
                    pointerEvents: !withEth.address ? 'all' : 'auto'
                  }}

                  cursor={fetchOption()[1] === edge.href ? 'default' : 'pointer'}
                  key={'fetch_option_' + edge.name}
                  onClick={() => {
                    if (!withEth.address) {
                      alert('Sign in with Ethereum')
                    }
                  }}>

                  <Stack space={'0'}>
                    {fetchOption()[1] === edge.href && (
                      <Text
                        weight={'bold'}
                        color={'textTertiary'}
                      >Filter</Text>
                    )}

                    <Box
                      as={fetchOption()[1] === edge.href ? 'h1' : 'h2'}
                      fontWeight={'semiBold'}
                      lineHeight={'1.25'}
                      fontSize={fetchOption()[1] === edge.href ? { xs: 'headingTwo', sm: 'headingTwo', md: 'headingOne', lg: 'headingOne' } : { xs: 'headingTwo', sm: 'headingTwo', md: 'headingTwo', lg: 'headingTwo' }}
                      color={{ base: fetchOption()[1] === edge.href ? "accent" : "textTertiary", 'hover': 'accent' }}
                      key={edge.name}>
                      {edge.name}
                    </Box>

                  </Stack>
                </Box>
              )
            })}
        </Stack>

        <Stack space={'2'}>
          {fetchOptions
            .sort((a: FeedType, b: FeedType) => {
              if (a.baseHref === fetchOption()[0]) return -1;
              else if (b.baseHref === fetchOption()[0]) return 1;
              else return 0;
            })
            .map((option) => {
              return (

                <Box
                  style={{ userSelect: 'none' }}
                  key={'fetch_option_' + option.name}
                  cursor={(fetchOption()[0] === option.baseHref || option.isComingSoon) ? 'default' : 'pointer'}
                >

                  <Stack space={'0'}>
                    {fetchOption()[0] === option.baseHref && (<Text
                      weight={'bold'}
                      color={'textTertiary'}
                    >Content type</Text>)}
                    {option.isComingSoon && (
                      <Box
                        fontWeight={'semiBold'}
                        lineHeight={'1.25'}
                        as={fetchOption()[0] === option.baseHref ? 'h1' : 'h2'}
                        fontSize={fetchOption()[0] === option.baseHref ? { xs: 'headingTwo', sm: 'headingTwo', md: 'headingOne', lg: 'headingOne' } : { xs: 'headingTwo', sm: 'headingTwo', md: 'headingTwo', lg: 'headingTwo' }}
                        color={{ base: fetchOption()[0] === option.baseHref ? "accent" : 'textTertiary' }}
                      >
                        <Stack direction='horizontal' align='center'>{option.name}   <Tag>Soon</Tag></Stack>
                      </Box>

                    )}
                    {!option.isComingSoon && (
                      <Link
                        href={option.baseHref}
                        passHref
                      >
                        <Box
                          fontWeight={'semiBold'}
                          lineHeight={'1.25'}
                          as={fetchOption()[0] === option.baseHref ? 'h1' : 'h2'}
                          fontSize={fetchOption()[0] === option.baseHref ? { xs: 'headingTwo', sm: 'headingTwo', md: 'headingOne', lg: 'headingOne' } : { xs: 'headingTwo', sm: 'headingTwo', md: 'headingTwo', lg: 'headingTwo' }}
                          color={{ base: fetchOption()[0] === option.baseHref ? "accent" : 'textTertiary', 'hover': 'accent' }}
                        >
                          {option.name}
                        </Box>
                      </Link>)}
                  </Stack>

                </Box>
              )
            })}
        </Stack>
      </Stack>
      {/* </Stack> */}
    </Box>
  )
}

export default HeaderFeed