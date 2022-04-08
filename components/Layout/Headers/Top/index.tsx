import Root from '../Root'
import {Text, Stack, Tag, Box} from 'design-system'

const Top = () => {
    return(
        <Root>
            <Stack direction='vertical' space='6'>
            <Text 
             size={{ xs: 'headingTwo', sm: 'headingTwo', md: 'headingOne', lg: 'headingOne' }}
              weight={'bold'}
             color={'green'}
            >
                Popular entries 
            </Text>
            <Text color='green' lineHeight={'1.5'}>
                Most popular entries from Mirror publications are displayed here. <br/>
                Community curation is <Box display='inline-block'><Tag size='small' tone='green'>Coming soon</Tag></Box>
            </Text>
            </Stack>
        </Root>
    )

}
export default Top