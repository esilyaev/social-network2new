import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ListItem, Flex, ListIcon, Text } from "@chakra-ui/layout";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Message } from "../../store/messageSlice";

const IncOption = {
  justify: "end",
  icon: HiChevronDown,
  color: 'green.500',
}
const OutOption = {
  justify: "start",
  icon: HiChevronUp,
  color: 'blue.500',
}


const ChatMessage = ({ message, type }: Message) => {
  const messageBg = useColorModeValue("white", "gray.600");
  const option = type === 'inc' ? IncOption : OutOption

  return (
    <ListItem>
      <Flex
        justify={option.justify}
        alignItems={"center"}
        bg={messageBg}
        borderRadius="lg"
        p="4"
        m="2"
      >
        <Text>{message}</Text>
        <ListIcon as={option.icon} color={option.color} mx={2} />
      </Flex>
    </ListItem>
  )
}

export default ChatMessage