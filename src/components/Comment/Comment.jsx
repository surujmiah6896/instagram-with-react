import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'

const Comment = ({createdAt, username, profilePhoto, text}) => {
  return (
    <>
        <Flex gap={4}>
            <Avatar src={profilePhoto}>
        </Flex>
    </>
  )
}

export default Comment
