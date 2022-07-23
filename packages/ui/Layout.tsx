import { Container, Box } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import { NextRouter } from 'next/router'
import { Header } from './Header'
import { UserProfile } from './types'

type layoutProps = {
  title?: string
  appTitle: string
  description?: string
  children: ReactNode
  router: NextRouter
  user?: UserProfile
  authLoading: boolean
}

export function Layout({ children, title, appTitle, description, router, authLoading, user }: layoutProps) {

  return (
    <div>
      <Head>
        <title>{title ? title + ` | ${appTitle}` : appTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container mt={16} maxW='container.lg'>
        <Header appTitle={appTitle} title={title} description={description} user={user} router={router} authLoading={authLoading} />
        <Box mt={16}>
          {children}
        </Box>
      </Container>
    </div>
  )
}