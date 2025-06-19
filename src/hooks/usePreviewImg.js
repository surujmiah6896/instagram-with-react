import { useState } from "react"
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const Toast = useShowToast();
    const maxFileSizeInBytes = 2 * 1024 * 1024; //2MB

    const handleImage = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith("image/")){
            if(file.size > maxFileSizeInBytes){
                Toast("Error", "File size must be less than 2MB", "error");
                setSelectedFile(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };

            reader.readAsDataURL(file);
        }else{
            Toast("Error", "Please select an image file", "error");
            setSelectedFile(null);
        }
    };

  return {handleImage, selectedFile, setSelectedFile};
}

export default usePreviewImg
