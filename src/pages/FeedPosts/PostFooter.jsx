import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';
import useCommentPost from '../../hooks/useCommentPost';
import UseAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';
import { timeAgo } from "../../utils/timeAgo";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const [comment, setComment] = useState("");
  const { isCommenting, onCommentPost } = useCommentPost();
  const authUser = UseAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { isLiked, likes, isUpdating, handleLikePost } = useLikePost(post);

  const handleSubmitComment = async () => {
    await onCommentPost(post.id, comment);
    setComment("");
  };
  // const handleLike = () =>{
  //     if(liked){
  //         setLiked(false);
  //         setLikes(likes - 1);
  //     }else{
  //         setLiked(true);
  //         setLikes(likes + 1);
  //     }
  // }
  return (
    <>
      <Box my={4} marginTop={"auto"}>
        <Flex alignItems={"center"} gap={2} w={"full"} pt={0} mb={0} my={4}>
          <Box onClick={handleLikePost} cursor={"pointer"} fontSize={15}>
            {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
          </Box>

          <Box
            cursor={"pointer"}
            fontSize={18}
            onClick={() => commentRef.current.focus()}
          >
            <CommentLogo />
          </Box>
        </Flex>

        <Text fontWeight={600} fontSize={"sm"}>
          {likes} likes
        </Text>

        {isProfilePage && (
          <Text fontSize="12" color={"gray"}>
            Posted {timeAgo(post.createdAt)}
          </Text>
        )}

        {!isProfilePage && (
          <>
            <Text fontSize="sm" fontWeight={700}>
              {creatorProfile?.username}{" "}
              <Text as={"span"} fontWeight={400}>
                {post.caption}
              </Text>
            </Text>
            {post.comments.length > 0 && (
              <Text
                fontSize="sm"
                color={"gray"}
                cursor={"pointer"}
                // onClick={onOpen}
              >
                View all {post.comments.length} comments
              </Text>
            )}
          </>
        )}

        {authUser && (
          <Flex
            alignItems={"center"}
            gap={2}
            justifyContent={"space-between"}
            w={"full"}
          >
            <Input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              color={"whiteAlpha.600"}
              placeholder={"Add a Comment..."}
              fontSize={14}
              ref={commentRef}
            ></Input>
            <Button
              isLoading={isCommenting}
              onClick={handleSubmitComment}
              fontSize={14}
              fontWeight={600}
              cursor={"pointer"}
              color={"blue.500"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default PostFooter
