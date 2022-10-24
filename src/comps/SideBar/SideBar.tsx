import { Button } from "@chakra-ui/button";
import { ButtonGroup, Flex } from "@chakra-ui/react";
import React from "react";
import { HiUser } from "react-icons/hi"

const SideBar: React.FC = () => {
    return (
        <Flex direction={'column'} w='full'>
            <Button w='full' size={'lg'} my={2}>
                Button
            </Button>
            <Button w='full' size={'lg'} my={2}>
                Chats
            </Button>
            <Button leftIcon={<HiUser />} w='full' my={2} >
                Profile
            </Button>
        </Flex>
    )
}

export default SideBar