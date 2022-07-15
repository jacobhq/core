import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Container, Heading, HStack, IconButton, useColorMode, Text, Box, ButtonGroup, MenuButton, Menu, MenuList, MenuItem, Tooltip, MenuDivider, Modal, Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast, Link, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode, useRef, useState } from 'react'
import { UnlockIcon } from '@chakra-ui/icons'
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'
import { Donate } from './Donate'

type layoutProps = {
  title?: string
  appTitle: string
  description?: string
  children: ReactNode
}

export function Layout({ children, title, appTitle, description }: layoutProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const { user, isLoading: authLoading } = useUser();
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  function authClick() {
    if (user) {
      return
    }
    setLoading(true)
    return router.push('/api/auth/login')
  }

  function logout() {
    setLoading(true)
    return router.push('/api/auth/logout')
  }

  const donateRef = useRef()

  return (
    <div>
      <Head>
        <title>{title ? title + ` | ${appTitle}` : appTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Donate ref={donateRef} />
      <Container mt={16} maxW='container.lg'>
        <HStack justify="space-between">
          <div>
            <Box mb={4} hidden={!title}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href='#'>{title}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Heading mb={2}>{title ? title : appTitle}</Heading>
            <Text>{description}</Text>
          </div>
          <ButtonGroup>
            <Menu>
              <Tooltip isDisabled={isOpen} label="Open menu" aria-label="Open menu">
                <MenuButton as={IconButton} variant="ghost" icon={<HamburgerIcon />} aria-label="Open menu" isLoading={isLoading || authLoading} />
              </Tooltip>
              <MenuList>
                <MenuItem onClick={logout}>Logout</MenuItem>
                <MenuDivider />
                {/* @ts-ignore */}
                <MenuItem onClick={() => donateRef.current.openModal()}>Donate to JacobHQ</MenuItem>
              </MenuList>
            </Menu>
            <Tooltip label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')} aria-label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')}>
              <IconButton variant="ghost" onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} aria-label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')} />
            </Tooltip>
          </ButtonGroup>
        </HStack>
        <Box mt={16}>
          {children}
        </Box>
      </Container>
    </div>
  )
}