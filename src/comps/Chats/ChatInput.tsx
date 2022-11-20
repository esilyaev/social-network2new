import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { SyntheticEvent, useState } from "react";

type InputProps = {
  addMessage: any;
};

const ChatInput: React.FC<InputProps> = ({ addMessage }) => {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    addMessage({ message: input, type: "out" });
    setInput("");
  };

  const handleKeyboard = (evt: any) => {
    switch (evt.key) {
      case 'Enter':
        sendMessage()
        break;
      case 'Escape':
        setInput('')
        evt.target.blur()
        break;

      default:
        break;
    }

  }
  return (
    <InputGroup size="lg">
      <Input
        pr="4.5rem"
        placeholder="Enter message"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        onKeyDown={(evt) => handleKeyboard(evt)}
      />
      <InputRightElement width="7rem">
        <Button h="1.75rem" size="lg" onClick={sendMessage}>
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default ChatInput;
