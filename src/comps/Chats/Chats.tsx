import React, { useEffect, useState } from "react";
import { Flex, List } from "@chakra-ui/react";
import ChatInput from "./ChatInput";
import { MessageProps } from "./Message";
import ChatMessage from "./ChatMessage";


const Chats: React.FC = () => {
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
    <Flex direction="column" justify="space-between" w="100%">
      <List spacing={3} w="full">
        {messages.map((m) => (
          <ChatMessage message={m.message} type={m.type} key={m.message} />
        ))}
      </List>
      <ChatInput addMessage={addMessage} />
    </Flex>
  );
}

export default Chats;
