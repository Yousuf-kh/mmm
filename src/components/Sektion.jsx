import {
  Box, Flex, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sektion = () => {
  return (
    <Box bgColor={'red'} h={'10vh'} id='games'>
      <Flex align={'center'} w={'100%'} h={'10vh'} justifyContent={'start'} gap={'45px'} fontSize={'30px'} >
        <Flex display={{ md: 'flex', base: 'none' }} align={'center'} justifyContent={'center'} gap={'45px'} fontSize={'30px'}>
          <Link to={'/'} border={'1px solid #555'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Шутеры</Link>
          <Link to={'/strategion'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Стратегии</Link>
          <Link to={'/races'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Гонки</Link>
          <Link to={'/ekshen'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Экшен</Link>
          <Link to={'/horor'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Хоррор</Link>
          <Link to={'/pesoc'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Песочница</Link>
          <Link to={'/stels'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Стелс</Link>
          <Link to={'/simuleitor'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Симуляторы</Link>
        </Flex>


        <Box display={{ md: 'none', base: 'block' }} p={5}>
          <Menu >
            <MenuButton as={Button} bg={'black'} color={'red'} >
              Genres
            </MenuButton>
            <MenuList>
              <MenuItem><Link to={'/'} border={'1px solid #555'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Шутеры</Link></MenuItem>
              <MenuItem><Link to={'/strategion'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Стратегии</Link></MenuItem>
              <MenuItem> <Link to={'/races'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Гонки</Link></MenuItem>
              <MenuItem><Link to={'/ekshen'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Экшен</Link></MenuItem>
              <MenuItem><Link to={'/horor'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Хоррор</Link></MenuItem>
              <MenuItem><Link to={'/pesoc'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Песочница</Link></MenuItem>
              <MenuItem><Link to={'/stels'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Стелс</Link></MenuItem>
              <MenuItem><Link to={'/simuleitor'} border={'1px solid #333'} textDecorationColor={'none'} _hover={{ textDecor: 'none' }} borderRadius={'20px'} p={'8px'} href="#">Симуляторы</Link></MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>



    </Box>
  )
}

export default Sektion