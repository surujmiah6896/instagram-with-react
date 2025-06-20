import { Avatar, Box, Button, Flex, Link,Tooltip } from "@chakra-ui/react";
import {Link as RouterLink} from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import SidebarItems from "./SidebarItems";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
    const {handelLogout, loading} = useLogout();
    
  return (
   <>
    <Box 
    height={"100vh"}
    borderRadius={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2, md:4}}
    >
    

    <Flex direction={"column"} gap={10} w={"full"} height={'full'}> 
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}}
        cursor={"pointer"}>
            <InstagramLogo/>
        </Link>
        <Link to={"/"} 
        as={RouterLink} 
        pl={2} 
        display={{base:"block", md:"none"}}
        borderRadius={6}
        _hover={{
            bg: "whiteAlpha.200",
        }}
        w={10}
        cursor={"pointer"}>
            <InstagramMobileLogo/>
        </Link>

    

        
           <Flex direction={"column"} gap={5} cursor={'pointer'}>
           <SidebarItems />
           </Flex>

           <Tooltip 
                hasArrow
                label={"Logout"}
                placement='right'
                openDelay={500}
                ml={1}
                display={{base:"block", md:"none"}}
                >
                    <Flex
                    onClick={handelLogout}
                    alignItems={"center"}
                    gap={4}
                    _hover={{bg:"whiteAlpha.400"}}
                    borderRadius={6}
                    p={2}
                    w={{base:10, md:"full"}}
                    mt={"auto"}
                    color={"white"}
                    >
                        <BiLogOut size={25}/>
                        <Button display={{base:"none", md:"block"}} 
                        variant={"ghost"}
                        _hover={{bg:"transparent"}}
                        isLoading={loading}>
                           Logout
                        </Button>
                    </Flex>
                </Tooltip>
    </Flex>


    </Box>
   </>
  )
}

export default Sidebar



