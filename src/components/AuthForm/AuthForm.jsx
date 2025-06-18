import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login";
import Signup from "./Signup";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <>
    
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
        {isLogin ? (<Login />) : (<Signup/>)}
      

        {/* -----------------Or text --------------------*/}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"1px"} bg={"gray.400"}/>
            <Text mx={1} color={"white"}>OR</Text>
          <Box flex={2} h={"1px"} bg={"gray.400"}/>
        </Flex>

        {/* google login */}
        <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
          <Image src="/google.png" w={5} alt="Google Logo" />
          <Text mx="2" color={"blue.500"}>Log in with Google</Text>
        </Flex>
      </VStack>
    </Box>

    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </Box>
        <Box onClick={()=> setIsLogin(!isLogin)} color={"blue"} cursor={"pointer"}>
          {isLogin ? "Sign Up" : "Login"}
        </Box>
      </Flex>
    </Box>
</>
  )
}

export default AuthForm
