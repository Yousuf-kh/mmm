import React from 'react'
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react'

const Horor = () => {
    return (
        <>
            <Box w={'100%'} bgColor={'black'} >
                <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image h={'50vh'} alignItems={'center'} src="https://www.goha.ru/s/f/Cr/Fr/2nNrg4FcEK.jpg" alt="" />
                        <Text fontSize={'30px'}>MADiSON</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1670870/MADiSON/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://steamuserimages-a.akamaihd.net/ugc/1853807042881842702/D7370FCAAE06F877E5BCAFBDE6AD1B59462622B6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="" />
                        <Text fontSize={'30px'}>PROGNOSTICE</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1671280/Prognostic/?l=russian" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'100%'} h={'50vh'} alignItems={'center'} src="https://itorrents-igruha.org/uploads/posts/2020-07/1595942351__cover.jpg" alt="" />
                        <Text fontSize={'30px'}>Visage</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/826940/Maid_of_Sker/?l=russian  " >Скачать</Link>
                    </Box>
                </Flex>
            </Box>

            <Box w={'100%'} bgColor={'black'} >
                <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'} gap={'150px'} p={'50px'}   >
                    <Box p={5} textAlign={'center'} bgColor={'red'} >
                        <Image w={'400px'} h={'50vh'} alignItems={'center'} src="https://m.media-amazon.com/images/M/MV5BNzgwYzNiOGUtN2ExMC00OTk5LWJmNWMtNzE4OWJmNGQyYmYwXkEyXkFqcGdeQXVyODI5NzA4MTA@._V1_FMjpg_UX1000_.jpg" alt="" />
                        <Text fontSize={'30px'}>Crossout</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/594330/Visage/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400PX'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/en/2/26/Blair_Witch_Project.jpg" alt="" />
                        <Text fontSize={'30px'}>Blair Witch</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1092660/Blair_Witch/" >Скачать</Link>
                    </Box>
                    <Box p={5} textAlign={'center'} bgColor={'red'}>
                        <Image w={'400PX'} h={'50vh'} alignItems={'center'} src="https://upload.wikimedia.org/wikipedia/ru/2/24/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Resident_Evil_Village.jpg" alt="" />
                        <Text fontSize={'30px'}>Resident Evil Village</Text>
                        <Link fontSize={'25px'} href="https://store.steampowered.com/app/1196590/Resident_Evil_Village/" >Скачать</Link>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Horor