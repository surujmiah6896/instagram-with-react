import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'

const FeedPost = () => {
  return (
   <>
    <PostHeader/>
        <Box borderRadius={4} my={2} overflow={"hidden"}>
            <Image src="/img2.png" alt='user profile pic'/>
        </Box>
    <PostFooter/>
   </>
  )
}

export default FeedPost
