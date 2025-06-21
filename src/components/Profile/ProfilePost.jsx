
import {
  Button, 
  Flex, 
  Box,
  GridItem, 
  Image, 
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Avatar,
  Divider,
  VStack
} from "@chakra-ui/react"; 
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../../pages/FeedPosts/PostFooter";
import useUserProfileStore from "../../store/userProfileStore";
import UseAuthStore from "../../store/authStore";
import useDeletePost from "../../hooks/useDeletePost";

const ProfilePost = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = UseAuthStore((state) => state.user);
  const {isDeleting, deletePost} = useDeletePost();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.likes.length}
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src="/img4.png"
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap="4"
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                borderColor={"whiteAlpha.300"}
                border={"1px solid"}
                flex={1.5}
              >
                <Image src="/img3.png" alt="profile post" />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={userProfile.profilePicURL}
                      size={"sm"}
                      name={userProfile.username}
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {userProfile.fullName}
                    </Text>
                  </Flex>

                  {authUser.uid === userProfile.uid && (
                    <Button
                      size={"sm"}
                      bg={"transparent"}
                      borderRadius={4}
                      p={1}
                      isLoading={isDeleting}
                      onClick={()=>deletePost(post.id)}
                      _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    >
                      <MdDelete size={20} cursor="pointer" />
                    </Button>
                  )}
                </Flex>
                <Divider bg={"gray.500"} my={4} />
                <VStack
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                  w={"full"}
                >
                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img4.png"
                    text="Looking Good"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img4.png"
                    text="Looking Good"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img4.png"
                    text="Looking Good"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img3.png"
                    text="Looking Good"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img4.png"
                    text="Looking Good"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img2.png"
                    text="Looking Good"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img3.png"
                    text="Looking Good"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img3.png"
                    text="Looking Good"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img3.png"
                    text="Looking Good"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="Md. Suruj Miah"
                    profilePhoto="/img3.png"
                    text="Looking Good"
                  />
                </VStack>
                <Divider my={4} bg={"gray.800"} />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost
