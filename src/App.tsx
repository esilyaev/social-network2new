import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import SideBar from "./comps/SideBar/SideBar";

import Main from "./comps/Main";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Container maxW={"container.lg"} p={0}>
          <Flex h="100vh" py={10} direction="column">
            <Flex justify={"end"} h={"4rem"} p={2} alignItems={"center"}>
              <Heading size="xl">Socal Network</Heading>
              <ColorModeSwitcher />
            </Flex>
            <Flex w="full" h="full">
              <VStack w="md" h="full" p="10" bg="white.100">
                <SideBar />
              </VStack>
              <Main />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
};
