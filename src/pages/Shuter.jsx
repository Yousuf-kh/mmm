import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'
import React from 'react'

const Shuter = () => {
    return (
        <>
            <Box w={'100%'}  bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg" alt="" />
                        <Text fontSize={'30px'}>Counter-Strike 2 </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/730/CounterStrike_2/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c9/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg/800px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg" alt="" />
                        <Text fontSize={'30px'}>PUBG MOBILE </Text>
                        <Link fontSize={'25px'} href="https://play.google.com/store/apps/details?id=com.tencent.ig&hl=ru" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://i.playground.ru/e/nEZvZr1KwUz-mjZykkPjqQ.jpeg" alt="" />
                        <Text fontSize={'30px'}>Call of Duty  </Text>
                        <Link fontSize={'25px'} href="https://www.callofduty.com/ru" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>

            <Box w={'100%'} bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://www.metroworldnews.com.br/resizer/v2/YFBLM4TK4NEQ3FQVKFQTIKFDGY.jpg?auth=4ac746d745882220a55996c86354512eee843439f1d25c0173ce6c7d3061c632&width=1200&height=1200&smart=true" alt="" />
                        <Text fontSize={'30px'}>Free Fire</Text>
                        <Link fontSize={'25px'} href="https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=ru" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://man-made.ru/upload/resize_cache/webp/iblock/957/94.webp" alt="" />
                        <Text fontSize={'30px'}>War Thunder </Text>
                        <Link fontSize={'25px'} href="https://warthunder.com/uz/registration?r=sem_1576282015_145992345090_664178389659_kwd-356907020567&placement=&gad_source=1&gclid=EAIaIQobChMI-aClmIqShwMVmAuiAx3lmwL1EAAYASAAEgI8f_D_BwE#/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://gameguru.ru/media/games/infinite-button-1713363504862.jpg" alt="" />
                        <Text fontSize={'30px'}>Arena Breakout </Text>
                        <Link fontSize={'25px'} href="https://arenabreakout.com/#/" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>
        </>




    )
}

export default Shuter