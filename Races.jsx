import React from 'react'
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'

const Races = () => {
  return (
    <>
            <Box w={'100%'} h={'85vh'} bgColor={'black'} >
                <Flex w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image h={'50vh'} alignItems={'center'} src="https://cdn-bgp.bluestacks.com/BGP/ru/gametiles_com.ea.game.nfs14_row.jpg" alt="" />
                        <Text fontSize={'30px'}>Need for Speed </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1262540/Need_for_Speed/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/e/e8/Wreckfest.jpg" alt="" />
                        <Text fontSize={'30px'}>Wreckfest </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/228380/Wreckfest/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://store-images.s-microsoft.com/image/apps.36093.14343301090572358.2000000000007864116.1feb0fed-abe9-4849-b638-8d7eca69cff4" alt="" />
                        <Text fontSize={'30px'}>Forza Horizon 4</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1293830/Forza_Horizon_4/" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>

            <Box w={'100%'} h={'85vh'} bgColor={'black'} >
                <Flex w={'100%'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image w={'370px'} h={'50vh'} alignItems={'center'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBc_lW6NyaTUse7axjbzZbNMSjArQsaWZW52Irr3tY2YnQIHNtEQSV2Lsh_KqJ4hz9Pg&usqp=CAU" alt="" />
                        <Text fontSize={'30px'}>MXGP</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/256370/MXGP__The_Official_Motocross_Videogame/?l=russian&cc=ar" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://static-cdn.jtvnw.net/ttv-boxart/509698_IGDB-272x380.jpg" alt="" />
                        <Text fontSize={'30px'}>Dirt Rally 2.0 </Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/690790/DiRT_Rally_20/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://www.allkeyshop.com/blog/wp-content/uploads/GRIDLegends.jpg" alt="" />
                        <Text fontSize={'30px'}>GRID Legends</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1307710/GRID_Legends/" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>
    </>
  )
}

export default Races