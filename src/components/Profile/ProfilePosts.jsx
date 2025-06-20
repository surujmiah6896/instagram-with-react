import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import ProfilePost from './ProfilePost';
import useGetUserPosts from '../../hooks/useGetUserPosts';
import NoPostsFound from "./NoPostsFound";

const ProfilePosts = () => {
    const { isLoading, posts} = useGetUserPosts();
    
    const noPostFound = !isLoading && posts.length === 0;
    if(noPostFound) return <NoPostsFound />;
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      column={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, index) => (
          <VStack key={index} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts
