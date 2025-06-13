import { Box, Button, Flex, VStack } from "@chakra-ui/react"
import ProfileAvatar from "../ProfileAvatar"
import { useState } from "react"

const SuggestedUser = ({name, followers, avatar}) => {
    const [isFollowed, setIsFollowed] = useState(false);
  return (
    <>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <ProfileAvatar img={avatar} />
                <VStack spacing={12}>
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
            >
                {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </Flex>
    </>
  )
}

export default SuggestedUser
SuggestedUser