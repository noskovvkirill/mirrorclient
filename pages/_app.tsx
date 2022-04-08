import type { AppProps } from 'next/app'
import { ThemeProvider } from 'design-system'
import { StoreProvider } from 'contexts'
import { Provider, chain, defaultChains } from 'wagmi'
import type { Chain } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import splitbee from '@splitbee/web';
import { useEffect } from 'react'

const infuraId = process.env.INFURA_ID
const chains = defaultChains

const connectors = ({ chainId }: { chainId?: Chain['id'] | undefined }) => {
  const rpcUrl =
    chains.find((x: Chain) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: 'MirrorFeed',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('initializing 🐝')
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    })
  }, [])
  
  return (
    <Provider autoConnect connectors={connectors}>
      {/* <script async data-api="/_hive" src="/bee.js"></script> */}

    
      <StoreProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </Provider>
  )
}

export default MyApp
