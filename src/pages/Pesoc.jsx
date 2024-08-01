import React from 'react'
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'

const Pesoc = () => {
  return (
    <>
    <Box w={'100%'}  bgColor={'black'} >
        <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
            <Box p={5} textAlign={'center'} bgColor={'red'} >
                <Image h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/f/f4/Minecraft_Cover_Art.png" alt="" />
                <Text fontSize={'30px'}>Minecraft</Text>
                <Link fontSize={'25px'} href="https://www.minecraft.net/ru-ru" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://images-cdn.ubuy.qa/634f7101111cd43dd365c133-lego-worlds-nintendo-switch.jpg" alt="" />
                <Text fontSize={'30px'}>LEGO Worlds</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/332310/LEGO_Worlds/" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/en/f/fb/Palworld_Steam_artwork.jpg" alt="" />
                <Text fontSize={'30px'}>Palworld</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/1623730/Palworld/" >Скачать</Link>
            </Box>
        </Flex>
    </Box>

    <Box w={'100%'} bgColor={'black'} >
        <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
            <Box p={5} textAlign={'center'} bgColor={'red'} >
                <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://itorrents-igruha.net/uploads/posts/2022-11/1667494863_cover.jpg" alt="" />
                <Text fontSize={'30px'}>Totally Accurate Battle Simulator</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/508440/Totally_Accurate_Battle_Simulator/?l=russian" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'400PX'} h={'50vh'} alignItems={'center'} src="https://i.playground.ru/e/a2MIgnzYEskqflVcscZcwg.jpeg" alt="" />
                <Text fontSize={'30px'}>Teardown</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/1167630/Teardown/" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'400PX'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/c/ca/No_Mans_Sky_logo.png" alt="" />
                <Text fontSize={'30px'}>No Man's Sky </Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/275850/No_Mans_Sky/" >Скачать</Link>
            </Box>
        </Flex>
    </Box>
</>
  )
}

export default Pesoc