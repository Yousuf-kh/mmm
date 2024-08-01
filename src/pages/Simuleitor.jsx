import React from 'react'
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'

const Simuleitor = () => {
  return (
    <>
            <Box w={'100%'} bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image h={'50vh'} alignItems={'center'} src="https://media.forgecdn.net/game-box-art/83444_ab32bf79-bbad-408f-b91b-2716c20fdcac.png" alt="" />
                        <Text fontSize={'30px'}>WorldBox</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1206560/WorldBox__God_Simulator/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-281423-52.jpg" alt="" />
                        <Text fontSize={'30px'}>Reus</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/222730/Reus/?l=russian" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/5/5e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_The_Sims_4.jpeg" alt="" />
                        <Text fontSize={'30px'}>The Sims 4</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1222670/The_Sims_4/" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>

            <Box w={'100%'}  bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/en/6/60/Planet_coaster_box.png" alt="" />
                        <Text fontSize={'30px'}>Planet Coaster</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/493340/Planet_Coaster/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://i.playground.ru/e/unhz2mHcGF_lEmfeaNMqxg.jpeg" alt="" />
                        <Text fontSize={'30px'}>Farming Simulator 22</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1248130/Farming_Simulator_22/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://image.api.playstation.com/vulcan/ap/rnd/202107/1208/25pE8tZhyfg9FXIL9fwurS52.png" alt="" />
                        <Text fontSize={'30px'}>car mechanic simulator</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1190000/Car_Mechanic_Simulator_2021/" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>
        </>

  )
}

export default Simuleitor