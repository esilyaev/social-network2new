import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { SyntheticEvent, useState } from "react";

type InputProps = {
  addMessage: any;
};

const ChatInput: React.FC<InputProps> = ({ addMessage }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    addMessage({ message: input, type: "out" });
    setInput("");
  };

  const handleEnter = (evt: any) => {
    if (evt.key === 'Enter') {
      handleClick()
    }

  }
  return (
    <InputGroup size="lg">
      <Input
        pr="4.5rem"
        placeholder="Enter message"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        onKeyDown={(evt) => handleEnter(evt)}
      />
      <InputRightElement width="7rem">
        <Button h="1.75rem" size="lg" onClick={handleClick}>
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default ChatInput;
