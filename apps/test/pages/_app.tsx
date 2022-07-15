import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <UserProvider>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    </UserProvider>
}