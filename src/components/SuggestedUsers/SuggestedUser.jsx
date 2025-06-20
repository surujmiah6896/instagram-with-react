import { Box, Button,Avatar, Flex, VStack } from "@chakra-ui/react"
import useFollowUser from "../../hooks/useFollowUser";
import { Link } from "react-router-dom";
import UseAuthStore from "../../store/authStore";

const SuggestedUser = ({user, setUser}) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = UseAuthStore((state) => state.user);

  const followUser = async () => {
    await handleFollowUser();
    setUser({
        ...user,
        followers: isFollowing 
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  } 
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link to={`/${user.username}`}>
            <Avatar name={user.username} src={user.profilePicURL}  size={"md"}/>
          </Link>
          <VStack spacing={2} alignItems={"flex-start"}>
            <Link to={`/${user.username}`}>
              <Box fontSize={12} fontWeight={"bold"}>
                {user.fullName || ""}
              </Box>
            </Link>
            <Box fontSize={11} color={"gray.500"}>
              {user.followers.length} followers
            </Box>
          </VStack>
        </Flex>
        {authUser.uid !== user.uid && (
          <Button
            fontSize={12}
            color={"blue.500"}
            bg={"transparent"}
            p={0}
            h={"max-content"}
            fontWeight={"medium"}
            cursor={"pointer"}
            _hover={{ color: "whiteAlpha.500" }}
            isLoading={isUpdating}
            onClick={followUser}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default SuggestedUser
SuggestedUser