import { useAccount, useConnect, useSignMessage, useNetwork } from 'wagmi'
//components
import { Dialog } from 'design-system'
import { Box, Button, Stack, Avatar, Text, IconUserSolid, IconClose } from 'design-system'
import { Dropdown, DropdownItem } from 'design-system'
//state
import { useStore } from 'contexts'
import { useEffect, useCallback } from 'react'
//utils
import { SiweMessage } from 'siwe'
import AddressPrettyPrint from 'src/helpers/AddressPrettyPrint'
import { useRouter } from 'next/router'


const UserProfile = () => {

    const router = useRouter()


    const [{ data: connectData, error: connectError }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })
    const [{ data: networkData }] = useNetwork()

    const { ToggleAuth, isAuth, withEth: state, setWithEth: setState } = useStore()
    const [, signMessage] = useSignMessage()


    const signIn = useCallback(async () => {
        try {
            const address = accountData?.address
            const chainId = networkData?.chain?.id
            if (!address || !chainId) return
            console.log('sign in')
            setState((x) => ({ ...x, error: undefined, loading: true }))
            // Fetch random nonce, create SIWE message, and sign with wallet
            const nonceRes = await fetch('/api/user/nonce')
            const message = new SiweMessage({
                domain: window.location.host,
                address,
                statement: 'Sign in with Ethereum to the app.',
                expirationTime: new Date(Number(new Date()) + 604800000).toISOString(),
                uri: window.location.origin,
                version: '1',
                chainId,
                nonce: await nonceRes.text(),
            })
            const signRes = await signMessage({ message: message.prepareMessage() })
            if (signRes.error) throw signRes.error

            // Verify signature
            const verifyRes = await fetch('/api/user/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, signature: signRes.data }),
            })
            if (!verifyRes.ok) throw new Error('Error verifying message')
            setState((x) => ({ ...x, address, loading: false }))
        } catch (error) {
            console.log('error', error)
            if (typeof error === "string") {
                const errorMessage: string = error
                setState((x) => ({ ...x, errorMessage, loading: false }))
            } else {
                const errorMessage: Error = new Error('something went wrong  signing in')
                setState((x) => ({ ...x, errorMessage, loading: false }))
            }
        }
    }, [accountData, connectData])


    useEffect(() => {
        const handler = async () => {
            try {
                const res = await fetch('/api/user/me')
                const json = await res.json()
                setState((x) => ({ ...x, address: json.address }))
            } finally {
                setState((x) => ({ ...x, loading: false }))
            }
        }
            // 1. page loads
            ; (async () => await handler())()

        // 2. window is focused (in case user logs out of another window)
        window.addEventListener('focus', handler)
        return () => window.removeEventListener('focus', handler)
    }, [])

    if (accountData) {
        return (
            <Stack direction='horizontal'>
                {state.address
                    ? <></>
                    : <Button
                        size='small'
                        loading={state.loading}
                        onClick={signIn}>Sign in with Ethereum</Button>}
                <Dropdown trigger={
                    <Box>
                        <Stack direction='horizontal' align='center'>
                            <Box display={{ xs: 'none', sm: 'none', md: 'inline-block', lg: 'inline-block', xl: 'inline-block' }}>
                                <Text
                                    weight={'medium'}
                                    color='textTertiary'>{accountData.ens?.name
                                        ? `${accountData.ens?.name}`
                                        : AddressPrettyPrint(accountData.address)
                                    }</Text>
                            </Box>
                            <Button size='small' shape='circle' variant='tertiary'>
                                {accountData.ens?.avatar
                                    ? (<Avatar src={accountData.ens?.avatar} label="ENS Avatar" />)
                                    : <IconUserSolid />}
                            </Button>

                        </Stack>
                    </Box>
                }>


                    <Box textAlign={'center'}
                        display={{ xs: 'inline-block', sm: 'inline-block', md: 'none', lg: 'none', xl: 'none' }}>
                        <Text
                            size={'label'}
                            weight={'medium'}
                            color='textTertiary'>{accountData.ens?.name
                                ? `${accountData.ens?.name}`
                                : AddressPrettyPrint(accountData.address)
                            }</Text>
                    </Box>

                    {!state.address && (
                        <Box textAlign={'center'}><Text
                            size={{ xs: 'label', sm: 'label', md: 'base', lg: 'base', xl: 'base' }}
                            color='textTertiary'>Sign in with Ethereum to change the settings</Text></Box>
                    )}
                    {state.address && (
                        <Box textAlign={'center'}><Text
                            size={{ xs: 'label', sm: 'label', md: 'base', lg: 'base', xl: 'base' }}
                            color='textTertiary'>Connected to {accountData?.connector?.name}</Text></Box>
                    )}
                    <DropdownItem
                        disabled={!state.address}
                        onClick={() => {
                            router.push('/settings')
                        }}
                        variant='secondary'>
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        variant='secondary'
                        tone='red'
                        onClick={disconnect}>
                        Disconnect
                    </DropdownItem>
                </Dropdown>
            </Stack>
        )
    }



    return (
        <Dialog
            isOpen={isAuth}
            setIsOpen={ToggleAuth}
            width={{ xs: '3/4', sm: '3/4', md: '96', lg: '96', xl: '96' }}
            size={'small'}
            trigger={'Connect Wallet'}>
            <Box width='full'>
                <Stack direction='vertical'>
                    <Box width='full'
                        padding={'5'}
                        position='relative'
                        textAlign={'center'}
                        borderBottomWidth={'0.75'}>

                        <Text weight={'bold'}>Connect Wallet</Text>
                        <Box position='absolute'
                            cursor='pointer'
                            transitionProperty='colors'
                            transitionDuration={'150'}
                            onClick={() => ToggleAuth(false)}
                            top='4'
                            color={{ 'hover': 'text', 'base': 'textTertiary' }}
                            right='4'>
                            <IconClose
                                color={'inherit'}
                            />
                        </Box>


                    </Box>
                    <Box width='full' paddingX={'4'}
                        paddingTop={'2'}
                        paddingY={'6'}
                    >
                        <Stack direction='vertical'>
                            {connectData?.connectors.map((x) => {
                                if (!x.ready) return null
                                return (<Button
                                    variant='tertiary'
                                    width='full'
                                    disabled={!x.ready} key={x.id} onClick={() => connect(x)}>
                                    {x.name}
                                </Button>)
                            })}
                            {/* <Box width='full'
                                padding={'2'}
                                textAlign={'center'}
                            >
                                <Text color='textSecondary'>I don't have a wallet</Text>
                            </Box> */}
                        </Stack>
                        {connectError && <Text>{connectError?.message ?? 'Failed to connect'}</Text>}
                    </Box>
                </Stack>
            </Box >
        </Dialog >
    )
}

export default UserProfile