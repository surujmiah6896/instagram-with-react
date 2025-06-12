import { Container } from '@chakra-ui/react'
import React from 'react'

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost/>
    </Container>
  )
}

export default FeedPosts
