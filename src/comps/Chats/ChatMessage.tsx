import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ListItem, Flex, ListIcon, Text } from "@chakra-ui/layout";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Message } from "../../store/messageSlice";
import { IconType } from "react-icons/lib";



const ChatMessage = ({ message, type }: Message) => {
  const messageBg = useColorModeValue("white", "gray.600");
  let justify: string
  let icon: IconType
  let color: string
  switch (type) {
    case 'inc':
      justify = "end"
      icon = HiChevronDown
      color = 'green.500'
      break
    case 'out':
      justify = "start"
      icon = HiChevronUp
      color = 'blue.500'
      break
  }

  return (
    <ListItem>
      <Flex
        justify={justify}
        alignItems={"center"}
        bg={messageBg}
        borderRadius="lg"
        p="4"
        m="2"
      >
        <Text>{message}</Text>
        <ListIcon as={icon} color={color} mx={2} />
      </Flex>
    </ListItem>
  )
}

export default ChatMessage