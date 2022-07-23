import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Heading, HStack, IconButton, useColorMode, Text, Box, ButtonGroup, MenuButton, Menu, MenuList, MenuItem, Tooltip, MenuDivider, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { NextRouter } from 'next/router'
import { Donate } from './Donate'
import { UserProfile } from './types';

type layoutProps = {
    title?: string
    appTitle: string
    description?: string
    router: NextRouter
    user?: UserProfile
    authLoading: boolean
}

export function Header({ title, appTitle, description, router, user, authLoading }: layoutProps) {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isLoading, setLoading] = useState(false)

    function logout() {
        setLoading(true)
        return router.push('/api/auth/logout')
    }

    function login() {
        setLoading(true)
        return router.push('/api/auth/login')
    }

    const donateRef = useRef()

    return (
        <>
            <Donate ref={donateRef} />
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
                        {({ isOpen }) => (
                            <>
                                <Tooltip isDisabled={isOpen} label="Open menu" aria-label="Open menu">
                                    <MenuButton as={IconButton} variant="ghost" icon={<HamburgerIcon />} aria-label="Open menu" isLoading={isLoading || authLoading} />
                                </Tooltip>
                                <MenuList>
                                    {user ? <MenuItem onClick={logout}>Logout</MenuItem> : <MenuItem onClick={login}>Sign In</MenuItem>}
                                    <MenuDivider />
                                    {/* @ts-ignore */}
                                    <MenuItem onClick={() => donateRef.current.openModal()}>Donate to JacobHQ</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                    <Tooltip label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')} aria-label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')}>
                        <IconButton variant="ghost" onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} aria-label={'Set theme to'.concat(' ', colorMode === 'light' ? 'dark' : 'light')} />
                    </Tooltip>
                </ButtonGroup>
            </HStack>
        </>
    )
}