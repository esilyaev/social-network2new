import { List, ListItem, ListIcon, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Text, useColorModeValue } from "@chakra-ui/react";
import ChatInput from "./Chats/ChatInput";

type MessageProps = {
  message: string;
  type: "inc" | "out";
};

const Chats: React.FC = () => {
  const messageBg = useColorModeValue("white", "gray.600");
  const IncomeMessage = (props: MessageProps) => {
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
  };

  const [messages, setMessages] = useState<MessageProps[]>([]);
  useEffect(() => {
    setMessages([
      { message: "Hi there!", type: "inc" },
      { message: "Hi you too", type: "out" },
      { message: "How are you?", type: "inc" },
    ]);
  }, []);

  const addMessage = (message: MessageProps) => {
    setMessages([...messages, message]);
  };

  return (
    <Flex direction="column" justify="space-between" w="full" h="full">
      <List spacing={3} w="full">
        {messages.map((m) => (
          <IncomeMessage message={m.message} type={m.type} key={m.message} />
        ))}
      </List>
      <ChatInput addMessage={addMessage} />
    </Flex>
  );
};

export default Chats;
