import { Box, Button,Avatar, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({name, followers, avatar}) => {
    const [isFollowed, setIsFollowed] = useState(false);
  return (
    <>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
            <Avatar name='Dan Abrahmov' src={avatar} />
                <VStack spacing={12} alignItems={"flex-start"}>
                    <Box fontSize={12} fontWeight={"bold"}>
                        {name}
                    </Box>
                    <Box fontSize={11} color={"gray.500"}>
                        {followers} followers
                    </Box>
                </VStack>
            </Flex>
            <Button 
                fontSize={12} 
                color={"blue.500"}
                bg={"transparent"}
                p={0}
                h={"max-content"}
                fontWeight={"medium"}
                cursor={"pointer"}
                _hover={{color:"whiteAlpha.500"}}
                onClick={() => setIsFollowed(!isFollowed)}
            >
                {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </Flex>
    </>
  )
}

export default SuggestedUser
SuggestedUser