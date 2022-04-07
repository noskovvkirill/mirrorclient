
import Root from './Root'

import { Box, Heading, Skeleton, SkeletonGroup, Stat, Tag, Text, Stack, Avatar } from 'design-system'
import Publisher from '@/components/Publisher'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'


interface IFeaturedPublications {
    publications: {name: string, type: 'member' | 'domain' | string}[]
}
const FeaturedPublications = ({publications}:IFeaturedPublications) => {
    return(
        <Root maxWidth={'full'}>
        <Box
        zIndex='0'
        tabIndex={0}
        borderRadius={'3xLarge'}
        width={'full'}
        backgroundColor={'foregroundSecondary'}
        padding={'4'}
        paddingY={'8'}
        >
            <Stack direction={'vertical'}>
                <Text 
                size='large'
                weight={'bold'}
                color='foregroundSecondaryHover'>Featured publications</Text>
                <Box>
                        <Box
                    display={{ xs: 'grid', sm: 'grid', md: 'grid', lg: 'grid', xl: 'grid' }}
                    gridTemplateColumns={{ xs:4, sm: 4, md: 4, lg: 3, xl: 3, }}
                    gridTemplateRows={'auto'}
                    overflow={'auto'}
                    flexDirection={'column'}
                    style={{
                        gridColumnGap: '18px',
                        gridRowGap: '18px',
                        width: '100%',
                    }}
                >       
                   
                        {publications.map((publ)=>{
                            return(
                            <Box 
                            key={'featured' + publ?.name}
                            width='full' height='full' textAlign={'center'} padding={{xs:'0', sm:'0', md:'2', lg:'0', xl:'2'}}>
                                <Stack direction='vertical' align={'center'} justify='center'>
                                <Publisher
                                hideLabel
                                size='large'
                                ensLabel={publ.type === 'domain' ? `${publ.name}.mirror.xyz` : publ.name}
                                />
                                <Text 
                                whiteSpace='pre'
                                size='small'
                                weight={'bold'}
                                color='textTertiary'>
                                    {AddressPrettyPrint(publ.name.toUpperCase(), 8)}
                                    </Text>
                                </Stack>
                            </Box>
                            )
                        })}
            

                    </Box>
                </Box>
            </Stack>
            </Box>
        </Root>
    )
}

export default FeaturedPublications