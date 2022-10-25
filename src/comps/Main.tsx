import { useColorModeValue } from '@chakra-ui/color-mode'
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import { Routes, Route } from 'react-router'
import Chats from './Chats'
import Home from './Home'
import Profile from './Profile'

const Main: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'green.700')

  return (
    <VStack w='full' h='full' p='10' bg={bg}>

      <Routes>
        <Route index element={<Home />} />
        <Route path="chats" element={<Chats />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

    </VStack>
  )
}

export default Main