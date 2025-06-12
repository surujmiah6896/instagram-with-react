import { Avatar } from "@chakra-ui/react"

const ProfileAvatar = ({img}) => {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src={img} />
    </Avatar.Root>
  )
}


export default ProfileAvatar;