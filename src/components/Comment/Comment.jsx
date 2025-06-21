import { Avatar, Flex, Text } from '@chakra-ui/react'
import useGetUserProfileById from "../../hooks/useGetUserProfileById"
import CommentSkeleton from './CommentSkeleton';

const Comment = ({comment}) => {
  const {userProfile, isLoading} = useGetUserProfileById(comment.createdBy);
  
  if(isLoading) return (<CommentSkeleton />);
  return (
    <>
      <Flex gap={4}>
        <Avatar
          src={userProfile.profilePicURL || ""}
          name={userProfile.username}
          size={"sm"}
        />
        <Flex direction={"column"}>
          <Flex gap={2}>
            <Text fontWeight={"bold"} fontSize={12}>
              {/* {userProfile.username} */}
            </Text>
            <Text fontSize={14}>{comment.comment || ""}</Text>
          </Flex>
          <Text fontSize={12} color={"gray"}>
            {/* {createdAt} */}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Comment
