import { Dialog } from 'design-system'
import { Box, Button, Stack, Text } from 'design-system'
import { useStore } from 'contexts'
import Image from 'next/image'
import Link from 'next/link'

const Subscribe = () => {
    const { TogglePopUp, isEmailPopUp } = useStore()

    return (
        <Dialog isOpen={isEmailPopUp} setIsOpen={TogglePopUp}
            width={{ xs: 'full', sm: 'full', md: '192', lg: '224', xl: '224' }}
        >
            <Box width='full' padding={'8'} paddingY='8'>
                <Stack direction='vertical'
                    space='2'
                    align={'flex-start'} justify='flex-start'>
                    <Text color='textTertiary'>Tip: Add your email in the Settings</Text>
                    <Text size='headingTwo'
                        weight='semiBold'
                        color='accent'>Get notifications to your inbox</Text>
                    <Box width='full'>
                        <Stack direction={{ xs: 'vertical', sm: 'vertical', md: 'horizontal', lg: 'horizontal', xl: 'horizontal' }}>
                            <Box paddingY={{ xs: '4', sm: '4', md: '16', lg: '8', xl: '8' }}>
                                <Stack direction='vertical'>
                                    <Box
                                        lineHeight={'1.375'}
                                        color='textSecondary'
                                        as='li'>Visit your Profile Settings</Box>
                                    <Box
                                        as='hr' borderBottomWidth={'0.375'} />
                                    <Box
                                        lineHeight={'1.375'}
                                        color='textSecondary'
                                        as='li'>Manage Email and Subscriptions</Box>
                                    <Box
                                        as='hr' borderBottomWidth={'0.375'} />
                                    <Box
                                        lineHeight={'1.375'}
                                        color='textSecondary'
                                        as='li'>Receive Email notifications when new entries published</Box>
                                    <Box as='hr' borderBottomWidth={'0.375'} />
                                    <Box
                                        lineHeight={'1.375'}
                                        color='textSecondary'
                                        as='li'>No spam or marketing emails</Box>
                                </Stack>
                            </Box>
                            <Box width='3/4'
                                height='96'
                                display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}
                                position='relative'>
                                <Image
                                    quality={100}
                                    src='/Email.png'
                                    objectFit='scale-down'
                                    layout='fill' width='800px' height='571px' />
                            </Box>

                        </Stack>
                    </Box>


                    <Stack direction='horizontal' space='2'>
                        <Link href='/settings'>
                            <Button
                                onClick={() => {
                                    TogglePopUp(false)
                                }}
                                size='small'>Open Settings</Button>
                        </Link>
                        <Button size='small'
                            onClick={() => TogglePopUp(false)}
                            variant='tertiary'>Cancel</Button>
                    </Stack>
                </Stack>
            </Box>
        </Dialog>
    )
}

export default Subscribe