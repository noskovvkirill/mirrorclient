import { Dialog } from 'design-system'
import { Box, Button, Stack, Text } from 'design-system'
import { useState, useEffect, memo } from 'react'

const EmailConfirmed = ({isOpen}:{isOpen:boolean}) => {
    const [open, setIsOpen] = useState(false)
    useEffect(()=>{
        setIsOpen(isOpen)
    },[isOpen])
    return (
        <Dialog isOpen={open}
        setIsOpen={()=>setIsOpen(false)}
            width={{ xs: 'full', sm: 'full', md: '128', lg: '128', xl: '128' }}
        >
            <Box width='full' padding={'8'} paddingY='8'>
                <Stack direction='vertical'
                    space='2'
                    align={'flex-start'} justify='flex-start'>
                    <Text color='textTertiary'>You will get email notifications when your new entry lands</Text>
                    <Text size='headingTwo'
                        weight='semiBold'
                        color='green'>Your email is succesfully confirmed
                    </Text>
                    <br/>
                    <Stack direction='horizontal' space='2'>
                        
                        <Button size='small'
                            onClick={() => setIsOpen(false)}
                            variant='tertiary'>Close</Button>
                    </Stack>
                </Stack>
            </Box>
        </Dialog>
    )
}

export default memo(EmailConfirmed)