import { Box, Container, Flex } from "@chakra-ui/react"
import FeedPosts from "../FeedPosts/FeedPosts"
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers"
import UseAuthStore from "../../store/authStore";


const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} >
            <FeedPosts/>
            <FeedPosts/>
            <FeedPosts/>
            <FeedPosts/>
        </Box>
        <Box flex={3} mr={20} display={{base:"none", lg: "block"}} maxW={"300px"}>
          {/* <SuggestedUsers /> */}
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage
