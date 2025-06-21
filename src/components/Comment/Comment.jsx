import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import useGetUserProfileById from "../../hooks/useGetUserProfileById"
import CommentSkeleton from './CommentSkeleton';
import {timeAgo} from "../../utils/timeAgo";

const Comment = ({comment}) => {
  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

  if(isLoading) return (<CommentSkeleton />);

  // const handleTime = () =>{
  //   const time = null;
  //   setTimeout(()=>{
  //     this.time = timeAgo(comment.createdAt);
  //   },2000);
  //   return time;
  // }
  return (
    <>
      <Flex gap={4}>
        <Link to={`/${userProfile.username}`}>
          <Avatar
            src={userProfile.profilePicURL}
            name={userProfile.username}
            size={"sm"}
          />
        </Link>
        <Flex direction={"column"}>
          <Flex gap={2} alignItems={"center"}>
            <Link to={`/${userProfile.username}`}>
              <Text fontWeight={"bold"} fontSize={12}>
                {userProfile.username}
              </Text>
            </Link>
            <Text fontSize={14}>{comment.comment}</Text>
          </Flex>
          <Text fontSize={12} color={"gray"}>
            {timeAgo(comment.createdAt)}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Comment
