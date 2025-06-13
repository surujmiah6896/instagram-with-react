import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'

const FeedPost = ({img, username, avatar}) => {
  return (
   <>
    <PostHeader profileImg={avatar} username={username}/>
        <Box borderRadius={4} my={2} overflow={"hidden"}>
            <Image src={img} alt={username}/>
        </Box>
    <PostFooter username={username}/>
   </>
  )
}

export default FeedPost
