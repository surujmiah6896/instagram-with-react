import { Container, Flex } from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'

const ProfilePage = () => {
  return (
    <>
        <Container maxW={"container.lg"} py={5}>
            <Flex py={10}
                px={4}
                pl={{base:4, md:10}}
                w={"full"}
                mx={"auto"}
                flexDirection={"column"}
            >
                <ProfileHeader profileImg="/img2.png"/>
            </Flex>
            <Flex
            px={{base:2, sm:4}}
            maxW={"full"}
            borderTop={"1px solid"}
            borderColor={"whiteAlpha.200"}
            direction={"column"}
            >
                <ProfileTabs/>
            </Flex>
        </Container>
    </>
  )
}

export default ProfilePage