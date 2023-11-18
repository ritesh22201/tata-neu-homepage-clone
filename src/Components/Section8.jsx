import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import question from '../Assets/Section8/questionCircle.svg';
import plusIcon from '../Assets/Section8/plusIcon.svg';

const Section8 = () => {
  return (
    <SECTION>
        <Box fontWeight={'500'}>
            <Flex gap={'6px'} m={'50px 0 30px 0'}>
                <Image w={'40px'} src={question} />
                <Text fontSize={'25px'} fontWeight={'500'}>FAQ'S</Text>
            </Flex>
            <Flex mb={'25px'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Image w={'16px'} src={plusIcon} />
            </Flex>
            <Flex mb={'25px'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>2. Lorem ipsum dolor sit amet</Text>
                <Image w={'16px'} src={plusIcon} />
            </Flex>
            <Flex mb={'25px'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>3. Lorem ipsum dolor sit amet, consectetur</Text>
                <Image w={'16px'} src={plusIcon} />
            </Flex>
            <Flex mb={'25px'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>4. Lorem ipsum dolor sit amet, consectetur</Text>
                <Image w={'16px'} src={plusIcon} />
            </Flex>
            <Flex mb={'25px'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>5. Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                <Image w={'16px'} src={plusIcon} />
            </Flex>
            <Flex mb={'25px'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>6. Lorem ipsum</Text>
                <Image w={'16px'} src={plusIcon} />
            </Flex>
            <Flex mb={'25px'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>7. Lorem ipsum dolor sit</Text>
                <Image w={'16px'} src={plusIcon} />
            </Flex>
        </Box>
        <Box m={'60px 0 20px 0'} p={'22px 30px'} bg={'#f4ecf9'} textAlign={'start'}>
            <Text fontWeight={'bold'}>Anything not clear?</Text>
            <Flex gap={'20px'} alignItems={'center'} flexDir={{base : 'column', sm : 'column', md : 'column', lg : 'row', xl : 'row', '2xl' : 'row'}}>
                <Text mt={'15px'} color={'gray.600'} w={'80%'}>You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...</Text>
                <Button mt={'10px'} variant={'none'} className='btn'>CONTACT US</Button>
            </Flex>
        </Box>
    </SECTION>
  )
}

export default Section8;

const SECTION = styled.section`
   width: 85%;
   margin: 0 auto;
   padding-bottom: 30px;

   .btn{
        background: var(--1, #8800EC);
        color: white;
        border-radius: 2px;
        font-weight: 400;
        height: 40px;
        padding: 8px 55px;
        text-align: start;

        &:hover{
            opacity: 0.9;
        }
      }
`