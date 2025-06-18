import { useToast } from "@chakra-ui/react"

const useShowToast = () => {
    const toast = useToast();

    const showToast = (title, des, status) => {
        toast({
            title: title,
            description: des,
            status: status,
            duration: 3000,
            isClosable: true,
        });
    };
    return showToast;
}

export default useShowToast
