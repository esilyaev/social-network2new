import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { HiChatAlt2, HiUser, HiHome } from "react-icons/hi"
import { useNavigate } from "react-router-dom";

const SideBar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Flex direction={'column'} w='full'>
      <Button leftIcon={<HiHome />} my={2} onClick={() => navigate('/')}>
        Home
      </Button>
      <Button leftIcon={<HiChatAlt2 />} my={2} onClick={() => navigate('chats')}>
        Chats
      </Button>
      <Button leftIcon={<HiUser />} my={2} onClick={() => navigate('profile')}>
        Profile
      </Button>
      <Button leftIcon={<HiUser />} my={2} onClick={() => navigate('minesweeper')}>
        MineSweeper
      </Button>
    </Flex>
  )
}

export default SideBar