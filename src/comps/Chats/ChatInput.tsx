import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState, KeyboardEvent } from "react";
import { Message } from "../../store/messageSlice";


type InputProps = {
  handleInput: (message: Message) => void;
};

const ChatInput: React.FC<InputProps> = ({ handleInput }) => {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    handleInput({ message: input, type: "out" });
    setInput("");
  };

  const handleKeyboard = (evt: KeyboardEvent) => {
    switch (evt.key) {
      case 'Enter':
        sendMessage()
        break;
      case 'Escape':
        setInput('')
        const target = evt.target as HTMLInputElement
        target.blur()
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
