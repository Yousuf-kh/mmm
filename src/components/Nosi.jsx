import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Nosi = () => {
    return (
        < >
            <Box bgColor={'black'} w={'100%'} py={'50px'}>
                <Container maxW={'container.xl'}>
                    <Heading color={'red'} py={'70px'} >Why work with us</Heading>
                    <Flex flexWrap={'wrap'} justifyContent={{md:'space-between',base:'center'}}  >
                        <Box w={'320px'}  bgColor={'red'} borderRadius={'10px'} my={'30px'} >
                            <Box p={'25px'} >
                                <Heading fontSize={'15px'} bgColor={'black'} w={'140px'} color={'red'} m={'20px'} p={'10px'} h={'39px'} borderRadius={'10px'}>Lorem ipsum</Heading>
                                <Heading fontSize={'25px'} m={'20px'} >Lorem Ipsum</Heading>
                                <Heading fontSize={'15px'} m={'20px'} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Heading>
                            </Box>
                        </Box>
                        <Box w={'320px'}  bgColor={'red'} borderRadius={'10px'} my={'30px'}>
                            <Box p={'25px'}>
                                <Heading fontSize={'15px'} bgColor={'black'} w={'140px'} color={'red'} m={'20px'} p={'10px'} h={'39px'} borderRadius={'10px'}>Lorem ipsum</Heading>
                                <Heading fontSize={'25px'} m={'20px'} >Lorem Ipsum</Heading>
                                <Heading fontSize={'15px'} m={'20px'} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Heading>
                            </Box>
                        </Box>
                        <Box w={'320px'}  bgColor={'red'} borderRadius={'10px'} my={'30px'}>
                            <Box p={'25px'}>
                                <Heading fontSize={'15px'} bgColor={'black'} w={'140px'} color={'red'} m={'20px'} p={'10px'} h={'39px'} borderRadius={'10px'}>Lorem ipsum</Heading>
                                <Heading fontSize={'25px'} m={'20px'} >Lorem Ipsum</Heading>
                                <Heading fontSize={'15px'} m={'20px'} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Heading>
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </Box>

        </>
    )
}

export default Nosi