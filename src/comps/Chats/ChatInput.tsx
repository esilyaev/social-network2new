import { Button } from '@chakra-ui/button'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import React, { useState } from 'react'

type InputProps = {
  addMessage: any
}

const ChatInput: React.FC<InputProps> = ({ addMessage }) => {

  const [input, setInput] = useState('')

  const handleClick = () => {
    console.log(input)
    addMessage({ message: input, type: 'out' })
    setInput('')
  }
  return (
    <InputGroup size='lg' >
      <Input
        pr='4.5rem'
        placeholder='Enter message'
        value={input}
        onChange={evt => setInput(evt.target.value)}
      />
      <InputRightElement width='7rem'>
        <Button h='1.75rem' size='lg' onClick={handleClick}>
          Send
        </Button>
      </InputRightElement>
    </InputGroup >
  )
}

export default ChatInput