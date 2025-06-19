import { Container, Flex } from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import UseAuthStore from '../../store/authStore';
import { useParams } from 'react-router-dom';
import useGetUserProfileBYUserName from '../../hooks/useGetUserProfileBYUserName';
import UserNotFound from '../../components/User/UserNotFound';
import ProfileHeaderSkeleton from './ProfileHaderSkeleton';

const ProfilePage = () => {
    const {username} = useParams();
    const {isLoading, userProfile} = useGetUserProfileBYUserName(username);
    const userNotFound = !isLoading && !userProfile;
    
    if(userNotFound) return <UserNotFound/>;
    
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
                {!isLoading && userProfile && (<ProfileHeader/>)}
                {isLoading && <ProfileHeaderSkeleton/>}
                
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

