import Layout from '@/components/Layout'
import { Box, Text, Stack } from 'design-system'


const Page = () => {
    return (
        <Layout>
            <Box width={'full'} height='full'>
                <Stack direction='horizontal' align='center' justify='center'>
                    <Box maxWidth='192' paddingY={'12'} paddingX='1.5'>
                        <Stack>
                            <Text
                                weight='bold'
                                size='headingOne' lineHeight={'1.375'} color='accent'>
                                About us
                            </Text>
                            <Text
                                color='textSecondary'
                                size='large' lineHeight={'1.375'} >
                                MirrorFeed is a reader for decentralized publishing platform Mirror.xyz.<br />
                                We aggregate the contents from the Mirror ecosystem in one place.<br />
                                The goal is to build the set of web3 native tools for curation and discovery that works for the Mirror community.
                            </Text>
                            <Text color='textTertiary'>
                                Built by noskovvkirill.eth
                            </Text>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Layout>
    )
}



export default Page