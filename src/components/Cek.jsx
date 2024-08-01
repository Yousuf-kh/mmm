import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Cek = () => {
  return (
    <Box w={'100%'} py={'30px'} bgColor={'red'} id='about'>
        <Box w={'100%'} >
            <Box > 
                <Heading fontSize={'30px'} textAlign={'center'} w={'50%'} mx={'auto'}  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>
            </Box>
            <Box >
                <Heading fontSize={'15px'} textAlign={'center'} w={'50%'} mx={'auto'} > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Heading>
            </Box>
        </Box>
        <Flex p={'130px'} flexWrap={'wrap'} justifyContent={'space-around'} textAlign={'center'}   >
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Image alignItems={'center'} src="/hello.png" alt="" />
                    <Heading textAlign={'center'} fontSize={'20px'} p={'20px'}   >Mobile Game Development</Heading>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}  >
                    <Image src="/yoy.png" alt="" />
                    <Heading textAlign={'center'} fontSize={'20px'} p={'20px'} >PC Game Development</Heading>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Image src="/oioioi.png" alt="" />
                    <Heading textAlign={'center'} fontSize={'20px'} p={'20px'} >PS4 Game Development</Heading>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Image src="/bedgays.png" alt="" />
                    <Heading textAlign={'center'} fontSize={'20px'} p={'20px'} >AR/VR Solutions</Heading>
                </Box>
        </Flex>
        <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'200px'} >
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Image justifyContent={'center'} src="/tiktok.png" alt="" ></Image>
                    <Heading textAlign={'center'} fontSize={'20px'} p={'20px'} >AR/ VR design</Heading>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Image src="/sigma.png" alt="" ></Image>
                    <Heading textAlign={'center'} fontSize={'20px'} p={'20px'} >3D Modelings</Heading>
                </Box>
        </Flex>
    </Box>
  )
}

export default Cek