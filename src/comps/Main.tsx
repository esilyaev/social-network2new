import { useColorModeValue } from '@chakra-ui/color-mode'
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import Profile from './Profile'
import MineSweeper from './MineSweeper'
import Dialogs from './Dialogs'

const Main: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'green.700')

  return (
    <VStack w='full' h='full' p='10' bg={bg}>

      <Routes>
        <Route index element={<Home />} />
        <Route path="dialogs" element={<Dialogs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="minesweeper" element={<MineSweeper />} />
      </Routes>

    </VStack>
  )
}

export default Main