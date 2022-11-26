import React from "react";
import { Flex, List } from "@chakra-ui/react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { Message, messageAdd } from "../../store/messageSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";



const Chats: React.FC = () => {
  const messages = useAppSelector(state => state.messages)
  const dispatch = useAppDispatch()


  const handleInput = (message: Message) => {
    dispatch(messageAdd(message))
  };

  return (
    <Flex direction="column" justify="space-between" w="100%">
      <List spacing={3} w="full">
        {messages.map((m: any) => (
          <ChatMessage message={m.message} type={m.type} key={m.message} />
        ))}
      </List>
      <ChatInput handleInput={handleInput} />
    </Flex>
  );
}

export default Chats;
