import { Button,Avatar, Flex, Text } from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'
import UseAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
    const authUser = UseAuthStore(state => state.user);
  return (
   <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
        <Avatar name='Dan Abrahmov' src={authUser.profilePicURL} />
        <Text fontSize={12} fontWeight={'bold'}>
            {authUser ? authUser.username : null}
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
