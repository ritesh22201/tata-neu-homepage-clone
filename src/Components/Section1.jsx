import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import family from '../Assets/Section1/family.svg';
import frame1 from '../Assets/Section1/frame1.svg';
import frame2 from '../Assets/Section1/frame2.svg';
import frame3 from '../Assets/Section1/frame3.svg';
import frame4 from '../Assets/Section1/frame4.svg';


const Section1 = () => {
    return (
        <SECTION>
            <Flex className='container' p={{base : '10px', sm : '10px', md : '10px', lg : '41px 80px 0 80px', xl : '41px 80px 0 80px', '2xl' : '41px 80px 0 80px'}} flexDir={{base : 'column-reverse', sm : 'column-reverse', md : 'column-reverse', lg : 'row', xl : 'row', '2xl' : 'row'}}>
                <Box className='box1' w={{base : '100%', sm : '100%', md : '100%', lg : '60%', xl : '60%', '2xl' : '60%'}}>
                    <Heading className='heading1' fontSize={{base : '30px', sm : '30px', md : '50px', lg : '50px', xl : '50px', '2xl' : '50px'}}>Turn Dreams Into Reality With <span>Personal Loans</span></Heading>
                    <Flex className='flex1' gap={{base : '20px', sm : '20px', md : '100px', lg : '100px', xl : '100px', '2xl' : '100px'}}>
                        <Flex className='child'>
                            <Image src={frame1} />
                            <Box>
                                <Text fontWeight={'bold'}>Avail Zero</Text>
                                <Text>Processing Fee</Text>
                            </Box>
                        </Flex>
                        <Flex className='child'>
                            <Image src={frame2} />
                            <Box>
                                <Text fontWeight={'bold'}>Quick</Text>
                                <Text>Personal Loan</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex className='flex1 flex2' gap={{base : '20px', sm : '20px', md : '108px', lg : '100px', xl : '100px', '2xl' : '100px'}}>
                        <Flex className='child'>
                            <Image src={frame3} />
                            <Box>
                                <Text fontWeight={'bold'}>Lowest</Text>
                                <Text>Interest Rates</Text>
                            </Box>
                        </Flex>
                        <Flex className='child'>
                            <Image src={frame4} />
                            <Box>
                                <Text fontWeight={'bold'}>Miniamal</Text>
                                <Text>Documentation</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Button variant={'none'} className='btn'>APPLY NOW</Button>
                </Box>
                <Box className='box2' w={{base : '100%', sm : '100%', md : '100%', lg : '40%', xl : '40%', '2xl' : '40%'}}>
                    <Image w={'100%'} src={family} />
                </Box>
            </Flex>
        </SECTION>
    )
}

export default Section1;

const SECTION = styled.section`
    .container{
        width: 100%;
        gap: 16px;
        text-align: start;
    }

    .heading1{
        text-align: start;
        margin-top: 27px;
    }

    span{
        color: #FF0096;
    }

    .flex1{
        text-align: start;
        margin-top: 30.5px;
        align-items: center;
        margin-bottom: 35px;

        img{
            width: 50px;
            height: 50px;
        }

        .child{
            gap: 16px;
            align-items: center;
        }
    }

    .flex2{
        margin-bottom: 48px;
    }

    .btn{
        background: var(--1, #8800EC);
        color: white;
        border-radius: 3px;
        height: 45px;
        padding: 8px 16px;
        text-align: start;
    }

    .btn:hover{
        opacity: 0.9;
    }

    .btn:active{
        opacity: 0.9;
    }
`