import Layout from '@/components/Layout'
import { Box, Text, Stack } from 'design-system'
import Image from 'next/image'

const Page = () => {
    return (
        <Layout color='pink'> 
            <Box width={'full'} height='full'>
                <Stack direction='horizontal' align='center' justify='center'>
                    <Box maxWidth='192' paddingY={'12'} paddingX='1.5'>
                        <Stack direction='vertical'>
                            <Text
                                weight='bold'
                                size='headingOne' lineHeight={'1.375'} color='pink'>
                                About us
                            </Text>
                            <Stack direction='vertical' space='4'>
                            <Text
                                color='textSecondary'
                                size='large' lineHeight={'1.375'} >
                                MirrorFeed is a reader for decentralized publishing platform Mirror.xyz.
                            </Text>
                            <Text
                                color='textSecondary'
                                size='large' lineHeight={'1.375'} >
                                We aggregate the contents from the Mirror ecosystem in one place
                            </Text>
                            <Text
                                color='textSecondary'
                                size='large' lineHeight={'1.375'} >
                                The goal is to build the set of web3 native tools for curation and discovery that works for the Mirror community.
                            </Text>
                            <Text
                                color='textSecondary'
                                size='large' lineHeight={'1.375'} >
                                This project is possible thanks to <a target='_blank' rel="noreferrer noreferrer" href='https://degen-xyz.vercel.app'>Mirror Degen</a> and public Mirror API
                            </Text>
                            <Box 
                            position='relative'
                            height='96'
                            width='full' maxWidth='full' overflow='hidden'>
                            <Image src={'/cover.png'} 
                            layout='responsive'
                            alt='cover'
                            width={'1200px'} height={'630px'} />
                            </Box>
                            <Text color='textTertiary'>
                                Built by noskovvkirill.eth
                            </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Layout>
    )
}



export default Page