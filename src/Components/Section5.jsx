import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import hands from '../Assets/Section5/handHeart.svg';
import accountant from '../Assets/Section5/accountant.svg';
import invertedComma from '../Assets/Section5/invertedComma.svg';

const Section5 = () => {
    return (
        <SECTION>
            <Box className='main-container'>
                <Flex className='container-heading'>
                    <Image src={hands} />
                    <Heading as={'h1'}>What Our Customer Says</Heading>
                </Flex>
                <Flex className='main-flex' flexDir={{base : 'column', sm : 'column', md : 'column', lg : 'row', xl : 'row', '2xl' : 'row'}}>
                    <Image src={accountant} />
                    <Image src={invertedComma} />
                    <Box className='inner-box'>
                        <Text>SUNIT GUPTA</Text>
                        <Text>Chartered Accountant</Text>
                        <Text color={'gray.600'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam voluptates totam placeat alias quam vero tempora esse atque optio amet est nostrum tempore, cumque dolores voluptatum! Hic, voluptas? Officia.
                            Ab, magnam esse totam porro sunt saepe quidem velit facilis blanditiis fugit sed non a? Magnam quae eos ducimus repellat mollitia nostrum, illo modi ipsam, earum quod laudantium reprehenderit aliquam.
                            Odio incidunt culpa tempora odit fuga quibusdam quia reiciendis veniam nisi quae recusandae atque officia id vel amet quod deserunt, dolores debitis eveniet? Minus dignissimos recusandae explicabo ipsum reprehenderit similique?
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </SECTION>
    )
}

export default Section5;

const SECTION = styled.section`

   .main-container{
      background-color: #F8F9FA;
      padding: 50px 60px 0 60px;

      .container-heading{
        gap: 10px;
        align-items: center;
        justify-content: center;
      }

      .main-flex{
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        position: relative;
        text-align: start;

        .inner-box > p:nth-child(1){
            font-weight: bold;
        }

        .inner-box > p:nth-child(2){
            font-weight: 500;
        }

        .inner-box > p:nth-child(3){
            font-size: 14px;
            margin-top: 10px;
        }

        img:nth-child(2){
           align-self: flex-start;
           margin-top: 50px;
        }
      }
   }
`