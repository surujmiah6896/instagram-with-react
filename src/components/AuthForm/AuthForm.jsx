import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputes] = useState({
    email: '',
    password: '',
    confirmPassword:''
  })

  const handleAuth = () => {
    console.log("inputs:", inputs);
    if(!inputs.email || !inputs.password){
      alert('Please fill all the fields');
      return;
    }
  }

  return (
    <>
    
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
        <Input placeholder="Enter Email" type="email" value={inputs.email} onChange={(e) => setInputes({...inputs, email:e.target.value})} border={"0.5px solid"} fontSize={14} />
        <Input placeholder="Enter Password" type="password" value={inputs.password} onChange={(e) => setInputes({...inputs, password:e.target.value})} border={"0.5px solid"} fontSize={14} />
        {!isLogin ? (<Input placeholder="Enter Confirm Password" type="password" value={inputs.confirmPassword} onChange={(e) => setInputes({...inputs,confirmPassword:e.target.value})} border={"0.5px solid"} fontSize={14} />) : null}
        <Button onClick={handleAuth} w={"full"} colorScheme='blue' size={"sm"} color={"white"} fontSize={14} >
          {isLogin ? "Login" : "Sign Up"}
        </Button>

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
