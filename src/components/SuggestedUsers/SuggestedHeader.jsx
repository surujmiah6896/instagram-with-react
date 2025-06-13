import { Button, Flex, Text } from "@chakra-ui/react"
import ProfileAvatar from "../ProfileAvatar"
import {Link as RouterLink} from 'react-router-dom'

const SuggestedHeader = () => {
  return (
   <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
        <ProfileAvatar img="profilepic.png"/>
        <Text fontSize={12} fontWeight={'bold'}>
            username_
        </Text>
    </Flex>
    <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
    >
        Log out
    </Button>
   </Flex>
  )
}

export default SuggestedHeader
