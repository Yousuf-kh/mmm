import React from 'react'
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'

const Ekshen = () => {
  return (
    <>
    <Box w={'100%'} bgColor={'black'} >
        <Flex w={'100%'} flexWrap={'wrap'}  justifyContent={'center'} gap={'150px'} p={'50px'}   >
            <Box p={5} textAlign={'center'} bgColor={'red'} >
                <Image h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Returnal_cover_art.jpg/220px-Returnal_cover_art.jpg" alt="" />
                <Text fontSize={'30px'}>Returnal</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/agecheck/app/1649240/" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/e/ed/Monster_Hunter_-_Rise_%28cover%29.jpg" alt="" />
                <Text fontSize={'30px'}>MONSTER HUNTER RISE</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/228380/Wreckfest/" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/9/9a/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Deathloop.jpg" alt="" />
                <Text fontSize={'30px'}>Deathloop</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/agecheck/app/1252330/  " >Скачать</Link>
            </Box>
        </Flex>
    </Box>

    <Box w={'100%'} bgColor={'black'} >
        <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
            <Box p={5} textAlign={'center'} bgColor={'red'} >
                <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://wildroid.ru/promo/2403-mad-driver-1.jpg" alt="" />
                <Text fontSize={'30px'}>Crossout</Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/386180/Crossout/?l=russian" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'400PX'} h={'50vh'} alignItems={'center'} src="https://image.api.playstation.com/vulcan/ap/rnd/202308/1103/8c3ce3611a4bb187418bb5e24924a055ba33d3046a7aaacb.png" alt="" />
                <Text fontSize={'30px'}>Honkai Star Rail  </Text>
                <Link fontSize={'25px'} href="https://store.steampowered.com/app/690790/DiRT_Rally_20/" >Скачать</Link>
            </Box>
            <Box p={5} textAlign={'center'} bgColor={'red'}>
                <Image w={'400PX'} h={'50vh'} alignItems={'center'} src="https://cdn1.epicgames.com/spt-assets/c1586295960b46f88bbfeec32c199e0e/wuthering-waves-1sbdg.jpg" alt="" />
                <Text fontSize={'30px'}>WUTHERING WARS</Text>
                <Link fontSize={'25px'} href="https://play.google.com/store/apps/details?id=com.kurogame.wutheringwaves.global&hl=en_US" >Скачать</Link>
            </Box>
        </Flex>
    </Box>
</>
  )
}

export default Ekshen