import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import friends from '../Assets/Footer/friends.svg';

const Section9 = () => {
    return (
        <SECTION>
            <Flex gap={'10px'} justifyContent={'space-between'} flexDir={{base : 'column-reverse', sm : 'column-reverse', md : 'column-reverse', lg : 'row', xl : 'row', '2xl' : 'row'}} alignItems={'center'}>
                <Box w={{base : '100%', sm : '100%', md : '100%', lg : '40%', xl : '40%', '2xl' : '40%'}}>
                    <Text mb={'20px'} fontSize={'35px'} fontWeight={'500'}>Refer & Earn Now</Text>
                    <Text mb={'10px'}>Get a ₹500 Big Basket gift card</Text>
                    <Button mb={'18px'} mt={'10px'} variant={'none'} className='btn'>REFER AND EARN</Button>
                    <Text textDecor={'underline'} fontSize={'11px'}>Terms and Conditions apply</Text>
                </Box>
                <Box w={{base : '100%', sm : '100%', md : '100%', lg : '40%', xl : '40%', '2xl' : '40%'}}>
                    <Image src={friends} />
                </Box>
            </Flex>
        </SECTION>
    )
}

export default Section9;

const SECTION = styled.section`
  width: 85%;
  margin: 20px auto 50px auto;
  padding: 50px 0;
  text-align: start;

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