
import Root from './Root'

import { Box, IconTrendingUp, Tag, Text, Stack } from 'design-system'
import Publisher from '@/components/Publisher'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'

export type FeaturedType =  {id: number,  project:string, domain:string | null, featuredAt:string}
interface IFeaturedPublications {
    publications:FeaturedType[]
}
const FeaturedPublications = ({publications}:IFeaturedPublications) => {
    return(
        <Root maxWidth={'full'}>
        <Box
        zIndex='0'
        tabIndex={-1}
        borderRadius={'3xLarge'}
        width={'full'}
        style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.13) 100%)',
        }}
        backgroundColor={'foregroundSecondary'}
        paddingX={{xs:'4', sm: '4', md: '6', lg: '4', xl: '4'}}
        paddingY={'8'}
        >
            <Stack direction={'vertical'} space='5'>
                <Box width={'full'}>
                    <Stack 
                    align='center'
                    justify={'space-between'}
                    direction='horizontal' space='2'>
                    <Text 
                    size='large'
                    weight={'semiBold'}
                    color='textTertiary'>
                        Featured publications
                    </Text>
                    </Stack>
                </Box>
                <Box>
                        <Box
                    display={{ xs: 'grid', sm: 'grid', md: 'grid', lg: 'grid', xl: 'grid' }}
                    gridTemplateColumns={{ xs:4, sm: 4, md: 4, lg: 3, xl: 3, }}
                    gridTemplateRows={'auto'}
                    overflow={'hidden'}
                    flexDirection={'column'}
                    style={{
                        gridGap: '8px',
                        width: '100%',
                    }}
                >       
                   
                        {publications.map((publ)=>{
                            return(
                            <Box 
                            backgroundColor={'foregroundTertiary'}
                            borderRadius={'3xLarge'}
                            key={'featured' + publ?.domain + publ?.id}
                            width='full' height='full' textAlign={'center'} padding={{xs:'2', sm:'2', md:'2', lg:'2', xl:'2'}}>
                                <Stack 
                                space={'2'}
                                direction='vertical' align={'center'} justify='center'>
                                <Publisher
                                hideLabel
                                size='large'
                                ensLabel={publ.domain ? publ.domain : publ.project}
                                />
                                <Tag> 
                                    {AddressPrettyPrint(publ.project.toUpperCase(), 8)}
                                </Tag>
                                </Stack>
                            </Box>
                            )
                        })}
            

                    </Box>
                </Box>
                <Box width='full' marginTop='1'>
                    <Text 
                    size='label'
                    weight={'bold'}
                    color='foregroundSecondaryHover'>
                    Curation is coming soon
                    </Text>
                </Box>
            </Stack>
            </Box>
        </Root>
    )
}

export default FeaturedPublications