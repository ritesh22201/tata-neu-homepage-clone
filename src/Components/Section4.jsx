import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import backgroundImg from '../Assets/Section4/backgroundImg.svg';
import iphone from '../Assets/Section4/iphone.svg';
import range from '../Assets/Section4/range.svg';
import logo from '../Assets/Logo.svg';
import interest from '../Assets/Section4/interests.svg';
import rates from '../Assets/Section4/rates.jpg';
import hospital from '../Assets/Section4/Hospital.svg';
import travel from '../Assets/Section4/Travel.svg';
import hammer from '../Assets/Section4/hammer.svg';
import shopping from '../Assets/Section4/Shopping.svg';
import building from '../Assets/Section4/Buildings.svg';
import lightning from '../Assets/Section4/lightning.svg';

const Section4 = () => {
    return (
        <SECTION>
            <Flex minH={'80vh'} className='main-container' flexDir={{base : 'column', sm : 'column', md : 'column', lg : 'row', xl : 'row', '2xl' : 'row'}}>
                <Box className='box1' backgroundImage={`url(${backgroundImg})`} w={{base : '100%', sm : '100%', md : '100%', lg : '50%', xl : '50%', '2xl' : '50%'}}>
                    <Box position={'relative'}>
                        <Image src={iphone} />
                        <Image className='img2' src={logo} />
                        <VStack className='innerBox'>
                            <Image src={interest} />
                            <Text color={'gray.600'}>Personal Loan</Text>
                            <Text color={'#8800ec'} fontWeight={'bold'}>upto Rs 10 Lacs</Text>
                        </VStack>
                        <VStack className='innerBox2'>
                            <Image src={rates} />
                            <Text color={'gray.600'}>Personal Loan</Text>
                            <Text color={'#8800ec'} fontWeight={'bold'}>upto Rs 10 Lacs</Text>
                        </VStack>
                    </Box>
                    <Flex className='small-boxes' top={'15%'} left={'12%'} bg={'#FFE0B3'}>
                        <Image src={hospital} />
                        <Text>Medical</Text>
                    </Flex>
                    <Flex className='small-boxes' top={'9%'} right={'2%'} bg={'#B3E0FF'}>
                        <Image src={hammer} />
                        <Text>Rennovations</Text>
                    </Flex>
                    <Flex className='small-boxes' top={'46%'} right={'2%'} bg={'#FFB3E0'}>
                        <Image src={building} />
                        <Text>School Loans</Text>
                    </Flex>
                    <Flex className='small-boxes' bottom={'12%'} right={'11.5%'} bg={'#D0FFB3'}>
                        <Image src={travel} />
                        <Text>Travel</Text>
                    </Flex>
                    <Flex className='small-boxes' bottom={'38%'} left={'6%'} bg={'#DFB3FF'}>
                        <Image src={shopping} />
                        <Text>Shopping</Text>
                    </Flex>
                </Box>
                <Box className='box2' w={{base : '100%', sm : '100%', md : '100%', lg : '50%', xl : '50%', '2xl' : '50%'}}>
                    <Flex marginLeft={'4%'}>
                        <Image src={lightning} />
                        <Text fontSize={'30px'} fontWeight={'500'}>Lightning Fast Process</Text>
                    </Flex>
                    <Box marginTop={'11%'}>
                        <Image className='range-img' src={range} />
                    </Box>
                    <Button variant={'none'} className='btn'>APPLY NOW</Button>
                </Box>
            </Flex>
        </SECTION>
    )
}

export default Section4;

const SECTION = styled.section`
   width: 85%;
   margin: 20px auto;
   
   .main-container{
     gap: 8%;
     align-items: center;
   }

   .box1{
    display: grid;
    place-items: center;
    position: relative;
    line-height: 15px;

      img{
        background-color: white;
      }

      .img2{
        position: absolute;
        top: 13%;
        left: 38%;
        width: 31%;
      }

      .innerBox{
        background-color: #f4e9fc;
        border-radius: 8px;
        padding: 10px 20px;
        width: 80%;
        position: absolute;
        top: 30%;
        left: 10%;

        img{
            width: 40px;
        }

        p{
            font-weight: 500;
        }
      }

      .innerBox2{
        background-color: #e9f7ff;
        border-radius: 8px;
        padding: 10px 20px;
        width: 80%;
        position: absolute;
        bottom: 13%;
        left: 10%;

        img{
            width: 40px;
        }

        p{
            font-weight: 500;
        }
      }

      .small-boxes{
        padding: 9px 20px;
        border-radius: 25px;
        gap: 7px;
        align-items: center;
        position: absolute;
      }

   }

   .box2{
    position: relative;
    min-height: 45vh;

      .range-img{
          width: 84%;
       }
      .btn{
        background: var(--1, #8800EC);
        color: white;
        border-radius: 2px;
        font-weight: 500;
        height: 40px;
        padding: 8px 55px;
        text-align: start;
        position: absolute;
        bottom: 0%;
        left: 23%;

        &:hover{
            opacity: 0.9;
        }
      }
   }

   .box2 > div{
      gap: 5px;
      align-items: center;
   }  
   
   .box2 img{
     width: 9%;
     margin-top: 6px;
   }

`