import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  theme,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import SideBar from "./comps/SideBar/SideBar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">


      <Container maxW={'container.xl'} p={0} >
        <Flex h='100vh' py={10} direction='column'>
          <Flex justify={'end'} alignItems={'center'}>
            <Heading size='xl'>Socal Network</Heading>
            <ColorModeSwitcher />
          </Flex>
          <Flex w='full' h='full'>
            <VStack w='md' h='full' p='10' bg='white.100'>
              <SideBar />
            </VStack>
            <VStack w='full' h='full' p='10' bg='gray.300'></VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  </ChakraProvider >
)
