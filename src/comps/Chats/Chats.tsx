import React from "react";
import { Flex, List } from "@chakra-ui/react";
import ChatInput from "./ChatInput";
import { MessageProps } from "./Message";
import ChatMessage from "./ChatMessage";
import { useSelector, useDispatch } from "react-redux";
import { messageAdd } from "../../store/messageSlice";


const Chats: React.FC = () => {
  const messages = useSelector((state: any) => state.messages)
  const dispatch = useDispatch()


  const handleInput = (message: MessageProps) => {
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
