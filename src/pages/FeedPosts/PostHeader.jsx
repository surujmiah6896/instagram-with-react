import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../components/ProfileAvatar";


const PostHeader = ({profileImg, username}) => {

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
			<Flex alignItems={"center"} gap={2}>
				<ProfileAvatar img={profileImg}/>

				<Flex fontSize={12} fontWeight={"bold"} gap='2' >
					<Link color={"white"} to="#">{username}</Link>
					<Box color={"gray.500"}>
                        • 1w
                    </Box>
				</Flex>
			</Flex>
			<Box cursor={"pointer"}>
				<Button
					size={"xs"}
					bg={"transparent"}
					fontSize={12}
					color={"blue.500"}
					fontWeight={"bold"}
					_hover={{
						color: "white",
					}}
					transition={"0.2s ease-in-out"}
				>
                    Unfollow
				</Button>
			</Box>
		</Flex>
	);
};

export default PostHeader;
