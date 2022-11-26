import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ListItem, Flex, ListIcon, Text } from "@chakra-ui/layout";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { MessageProps } from "./Message";



const ChatMessage = (props: MessageProps) => {
  const messageBg = useColorModeValue("white", "gray.600");
  switch (props.type) {
    case "inc":
      return (
        <ListItem>
          <Flex
            justify={"end"}
            alignItems={"center"}
            bg={messageBg}
            borderRadius="lg"
            p="4"
            m="2"
          >
            <Text>{props.message}</Text>
            <ListIcon as={HiChevronDown} color="green.500" mx={2} />
          </Flex>
        </ListItem>
      );
    case "out":
      return (
        <ListItem>
          <Flex
            justify={"start"}
            alignItems={"center"}
            bg={messageBg}
            borderRadius="lg"
            p="4"
            m="2"
          >
            <ListIcon as={HiChevronUp} color="blue.500" mx={2} />
            <Text>{props.message}</Text>
          </Flex>
        </ListItem>
      );
    default:
      return <h2>Something wrong !</h2>;
  }
}

export default ChatMessage