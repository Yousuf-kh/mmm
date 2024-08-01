import {
    Box, Container, Flex, Heading, Link, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import React from 'react'

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box zIndex={'99'} bg={'black'} color={'red'} w={'100%'} h={'10vh'} pos={'fixed'} top={'0'}>
            <Container maxW={'container.xl'}>
                <Flex align={'center'} h={'10vh'} justify={'space-between'}>
                    <Heading display={{ md: 'block', base: 'none' }}>MuhammadAziz</Heading>
                    <Heading display={{ md: 'none', base: 'block' }}>M</Heading>
                    <Flex display={{ md: 'flex', base: 'none' }} gap={'10px'} align={'center'}>
                        <Link href='#hero'>HOME</Link>
                        <Link href='#games'>GAMES</Link>
                        <Link href='#about'>ABOUT</Link>
                    </Flex>
                    <Button display={{ md: 'none', base: 'block' }} ref={btnRef} colorScheme='red' onClick={onOpen}>
                        MENU
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody bg={'red'}>
                                <Flex h={'80vh'} flexDir={'column'} justify={'center'} align={'center'}>
                                    <Heading fontSize={'20px'} px={5} py={3} bg={'black'} color={'red'} borderRadius={'10px'} my={6}>
                                        <Link href='#hero'>HOME</Link>
                                    </Heading>

                                    <Heading fontSize={'20px'} px={5} py={3} bg={'black'} color={'red'} borderRadius={'10px'} my={6}>
                                        <Link href='#games'>GAMES</Link>
                                    </Heading>

                                    <Heading fontSize={'20px'} px={5} py={3} bg={'black'} color={'red'} borderRadius={'10px'} my={6}>
                                        <Link href='#about'>ABOUT</Link>
                                    </Heading>
                                </Flex>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header