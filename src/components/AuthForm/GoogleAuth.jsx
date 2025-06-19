import { Flex, Image, Text } from '@chakra-ui/react'
import useGoogleLogin from '../../hooks/useGoogleLogin'

const GoogleAuth = ({prefix}) => {
  const { handelGoogleLogin } = useGoogleLogin();
  return (
    <>
         <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} 
         onClick={() => handelGoogleLogin()}
         >
            <Image src="/google.png" w={5} alt="Google Logo" />
            <Text mx="2" color={"blue.500"}>{prefix} with Google</Text>
        </Flex>
    </>
  )
}

export default GoogleAuth
