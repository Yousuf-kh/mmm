import React from 'react'
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'

const Stels = () => {
  return (
    <>
            <Box w={'100%'}  bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/a/a2/Deus_Ex_Mankind_Divided_cover.jpg" alt="" />
                        <Text fontSize={'30px'}>Deus Ex</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/agecheck/app/6910/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/c/c1/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%B8%D0%B3%D1%80%D1%8B_A_Plague_Tale_Innocence.jpg" alt="" />
                        <Text fontSize={'30px'}>A Plague Tale: Innocence </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/752590/A_Plague_Tale_Innocence/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/4/43/Official_Saboteur_Game_Cover_Art.JPG" alt="" />
                        <Text fontSize={'30px'}>The Saboteur</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/24880/The_Saboteur/" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>

            <Box w={'100%'} bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/0/02/Thief_box_art.jpg" alt="" />
                        <Text fontSize={'30px'}>Thief</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/agecheck/app/239160/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://i.redd.it/zm1qqjx99ryb1.jpg" alt="" />
                        <Text fontSize={'30px'}>Tom Clancy’s Splinter Cell</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/13560/Tom_Clancys_Splinter_Cell/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://gamemag.ru/images/imagemanager/cache/7c/53f1/7c53f1_IMG-0784.jpg" alt="" />
                        <Text fontSize={'30px'}>Assassin's Creed</Text>
                        <Link fontSize={'25px'} href="https://www.ubisoft.com/en-gb/game/assassins-creed  www" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>
        </>


  )
}

export default Stels