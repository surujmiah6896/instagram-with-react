import { Avatar } from "@chakra-ui/react"

const ProfileAvatar = ({img, name="Md. Suruj Miah"}) => {
  return (
    <Avatar.Root>
      <Avatar.Fallback name={name} />
      <Avatar.Image src={img}/>
    </Avatar.Root>
  )
}


export default ProfileAvatar;