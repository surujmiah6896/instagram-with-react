import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post}) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box borderRadius={4} my={2} overflow={"hidden"}>
        <Image src={post.imageURL || "/img4.png"} alt="post image" />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
}

export default FeedPost
