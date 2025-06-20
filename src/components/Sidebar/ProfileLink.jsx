import { Box,Tooltip,Link, Avatar } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import {Link as RouterLink} from 'react-router-dom';
import UseAuthStore from '../../store/authStore';

const ProfileLink = () => {
    const authUser = UseAuthStore((state) => state.user);
  return (
    <Tooltip
			hasArrow
			label={"Profile"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={`/${authUser.username}`}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<Avatar size={"sm"} name={authUser.username || ""} src={authUser.profilePicURL || "" } />
				<Box display={{ base: "none", md: "block" }}>Profile</Box>
			</Link>
		</Tooltip>
  )
}

export default ProfileLink
