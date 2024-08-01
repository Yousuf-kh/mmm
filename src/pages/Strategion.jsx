import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'
import React from 'react'

const Strategion = () => {
    return (
        <>
            <Box w={'100%'} bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/8/8a/Hearts_of_Iron_IV_-_cover.png " alt="" />
                        <Text fontSize={'30px'}>Hearts of Iron IV</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/394360/Hearts_of_Iron_IV/?l=russian" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'410px'} h={'50vh'} alignItems={'center'} src="https://i.playground.ru/e/Uojhm8ghonmEQX1jdnRDIg.jpeg?1200x1200" alt="" />
                        <Text fontSize={'30px'}>Age of Empires 3</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/933110/Age_of_Empires_III_Definitive_Edition/?l=russian" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/3/38/Crusader_Kings_3_-_cover.jpg" alt="" />
                        <Text fontSize={'30px'}>Crusader Kings III  </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1158310/Crusader_Kings_III/ы" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>

            <Box w={'100%'} bgColor={'black'} >
                <Flex flexWrap={'wrap'} w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/en/3/3b/Steel_Division_2_cover_art.jpg" alt="" />
                        <Text fontSize={'30px'}>Steel Division 2</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/919640/Steel_Division_2/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/e/e7/Stellaris_cover_art.jpg" alt="" />
                        <Text fontSize={'30px'}>Stellaris </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/281990/Stellaris/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'350px'} h={'50vh'} alignItems={'center'} src="https://byxatab.org/uploads/posts/2024-06/1719507681_frozenheim.jpg" alt="" />
                        <Text fontSize={'30px'}>Frozenheim  </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1134100/Frozenheim/?l=russian" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Strategion