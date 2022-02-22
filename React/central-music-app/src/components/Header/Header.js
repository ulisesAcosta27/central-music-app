import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (

    <Flex w='100%' h='3rem' background='red' align='center'>
        <Box>
            Hola Mundo
        </Box>
        <Spacer />
        <Box>
            Menu
        </Box>
    </Flex>
  )
}

export default Header