import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from 'react-query'

import type { AppProps } from 'next/app'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>

    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
