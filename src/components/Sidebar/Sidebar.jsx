import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import {Link as RouterLink} from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
    const sidebarItems = [
        {
            icon:<AiFillHome size={25}/>,
            text: "Home",
            link: "/",
        },
        {
            icon:<SearchLogo />,
            text: "Search",
            // link: "/",
        },
        {
            icon:<NotificationsLogo />,
            text: "Notifications",
            // link: "/",
        },
        {
            icon:<CreatePostLogo/>,
            text: "Create",
            // link: "/",
        },
        {
            icon:<Avatar size={"sm"} name={"Md. Suruj Miah"} src="/profilepic.png"/>,
            text: "Profile",
            // link: "/",
        },
    ];
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
        
{sidebarItems.map((item, index) => (
    <Tooltip 
    key={index}
    hasArrow
    label={item.text}
    placement="right"
    ml={1}
    openDelay= {500}
    display={{base:"block", md:"none"}}
    >
        <Link
        display={"flex"}
        to={item.link || "#"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{bg:"whiteAlpha.400"}}
        borderRadius={6}
        p={2}
        w={9}
        justifyContent={{base:"center", md:"flex-start"}}
        >
            {item.icon}
            <Box display={{base:"none", md:"block"}}>
                {item.text}
            </Box>
        </Link>
    </Tooltip>
))}
    </Flex>

    </Box>
   </>
  )
}

export default Sidebar



