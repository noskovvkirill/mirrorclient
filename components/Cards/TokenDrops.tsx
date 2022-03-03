import thunder from 'src/fetcher'
import useSWR from 'swr'
import { Button, Box, Text, Heading, Stack, IconTokens } from 'design-system'
import Root from './Root'
import type { BoxMaxWidth } from './Root'

// mirrorERC20TokenAtAddress
const fetcher = (address: string) => {
    return thunder('query')({
        mirrorERC20TokenAtAddress: [{
            tokenAddress: address,
        }, {
            name: true,
            symbol: true,
            numDecimals: true,
            totalSupply: true,
            totalSupplyFormatted: true,
            description: true,
            iconMedia: {
                mimetype: true,
                url: true
            },
            publisher: {
                project: {
                    address: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true,
                    ens: true,
                    theme: {
                        accent: true
                    }
                },
                member: {
                    address: true,
                    ens: true,
                    displayName: true,
                    avatarURL: true,
                    domain: true

                }
            },
            createdAt: true,
            network: true,
        }]
    }
    )
}


const TokenDrop = ({ projectAddress = 'society', maxWidth }: { projectAddress: string, maxWidth?: BoxMaxWidth }): JSX.Element => {
    const { data, error, isValidating } = useSWR(projectAddress, fetcher, {
        revalidateOnFocus: false
    });

    return (
        <Root maxWidth={maxWidth}>
            <Box display="flex"
                position={"relative"}
                borderRadius={"3xLarge"}
                padding="6"
                width="full" flexDirection="column" gap="4" backgroundColor={"background"}>
                <Stack align='center' justify={'center'}>
                    <IconTokens
                        size={'36'}
                        color={'red'} />
                    <Heading color='red'>Token Drop wen?</Heading>
                    <Text>Work in a progress. Stay tuned.</Text>
                    <Box width='full'>
                        <Stack>
                            <Button
                                center
                                size="small"
                                variant="secondary"
                                width={"full"}
                                tone='red'>
                                BOP
                            </Button>
                        </Stack>
                    </Box>
                    {JSON.stringify(data)}
                    {JSON.stringify(error)}
                </Stack>
            </Box>
        </Root>
    )
}

export default TokenDrop