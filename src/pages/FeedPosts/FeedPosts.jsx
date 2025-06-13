import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[]);

  return (
    <Container maxW={"container.sm"} py={5} px={2}>
      {isLoading && [0, 1, 2, 3].map((_, index)=>(
        <VStack key={index} gap={4} alignItems={"center"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size="10" />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height={"10px"} w={"200px"} />
              <Skeleton height={"10px"} w={"200px"} />
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && ( 
        <>
          <FeedPost img="/img4.png" username="suruj6896" avatar="/img4.png"/>
          <FeedPost img="/img2.png" username="jamal43" avatar="/img2.png"/>
          <FeedPost img="/img3.png" username="sujun22" avatar="/img3.png"/>
          <FeedPost img="/img1.png" username="jahid34" avatar="/img1.png"/>
        </>
        )}
    </Container>
  )
}

export default FeedPosts
