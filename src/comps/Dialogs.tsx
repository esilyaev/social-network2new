import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { FC, useState } from 'react'
import Chats from './Chats/Chats'

const Dialogs: FC = () => {

  const [chosenDialog, setChosenDialog] = useState<number | undefined>(undefined)
  const dialogChoice = (idx: number): void => {
    setChosenDialog(idx)
  }
  return (
    <Box w={'100%'} h={'100%'}>Dialogs here ...
      <Flex mt='10' justify={'space-between'} h='90%'>
        <Flex direction={'column'} p='5' w='35%' minW={'150px'}>
          {[...Array(5).keys()].map(k => {
            return (
              <Box alignContent={'center'} key={k} onClick={() => dialogChoice(k)}
                cursor='pointer'>
                <Avatar name='default user'
                  src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y' />
                <Text ml='2'>User {k}</Text>
              </Box>
            )
          })}
        </Flex>
        {chosenDialog !== undefined && <Chats />}
      </Flex>


    </Box>
  )
}

export default Dialogs