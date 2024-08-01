import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Box id='hero'
     bgImage={'https://png.pngtree.com/background/20220806/original/pngtree-black-red-abstract-background-picture-image_1915160.jpg'} bgSize={'cover'} h={'70vh'}  bgPos={'center'} bgAttachment={'fixed'} >
        <Flex color={'red'} h={'70vh'} align={'center'} justify={'center'}>
            <Heading textAlign={'center'} >НАЙДИ СВОЮ ИГРУ!</Heading>
        </Flex>
    </Box>
  )
}

export default Hero