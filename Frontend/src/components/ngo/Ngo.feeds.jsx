import React from 'react'
import './ngo.feeds.css'

import { Card, CardHeader, Flex,Avatar, Box, Heading, IconButton, CardBody, Image, CardFooter, Button, Text} from '@chakra-ui/react'
function Ngofeeds({ name, description, image, title, goal, raised}) {
  return (
    <div id=''>
        {/* <div id='title'>
        <img src={logo} alt="" />
        <p>{name}</p>
        </div>
       <img src={img} alt=""/>
        
        <p>{description}</p> */}
  <Card width={"500px"} marginTop={"20px"}>
  <CardHeader>
    <Flex >
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={name} src={`https://ui-avatars.com/api/?name=${name.split(' ').join('+')}`} />

        <Box>
          <Heading size='sm'>{name}</Heading>
          <Text>{title}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      {description}
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src={image}
    alt='Chakra UI'
    alignItems={"center"}
    width={"auto"}

  />

  <CardFooter
    alignItems={"center"}
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Text flex='1' variant='ghost' >
      Likes: 
    </Text>
    <Button colorScheme={"twitter"} flex='1' variant='ghost' >
      Donate
    </Button>
  </CardFooter>
  </Card>


    </div>
  )
}

export default Ngofeeds