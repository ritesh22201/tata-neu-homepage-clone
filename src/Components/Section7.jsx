import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftAddon, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import handStar from '../Assets/Section7/handStar.svg';
import ellipse from '../Assets/Section7/ellipse.svg';

const Section7 = () => {
    return (
        <SECTION>
            <Flex mb={'30px'} className='heading-flex' gap={'5px'}>
                <Image w={'42px'} src={handStar} />
                <Text fontWeight={'500'} fontSize={'30px'}>EMI Calculator</Text>
            </Flex>
            <Flex justifyContent={'space-between'} flexDir={{base : 'column', sm : 'column', md : 'column', lg : 'row', xl : 'row', '2xl' : 'row'}}>
                <Box w={{base : '100%', sm : '100%', md : '100%', lg : '30%', xl : '30%', '2xl' : '30%'}} p={'15px 15px 0 15px'} borderRadius={'10px'} boxShadow={'md'} color={'gray.500'}>
                    <Box mb={'20px'}>
                        <Text mb={'5px'}>Loan Amount</Text>
                        <InputGroup>
                            <InputLeftAddon children='₹' />
                            <Input readOnly type='text' value={'300000'} placeholder='Enter Loan Amount' />
                        </InputGroup>
                        <Slider mt={'10px'} aria-label='slider-ex-2' color={'#FF0096'} colorScheme='purple' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Box>
                    <Box mb={'20px'}>
                        <Text mb={'5px'}>Interest Rates(%)</Text>
                        <InputGroup>
                            <InputLeftAddon children='%' />
                            <Input readOnly type='text' value={'10.5'} placeholder='Enter Loan Amount' />
                        </InputGroup>
                        <Slider mt={'10px'} aria-label='slider-ex-2' color={'#FF0096'} colorScheme='purple' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Box>
                    <Box mb={'20px'}>
                        <Text mb={'5px'}>Loan Tenure(In Months)</Text>
                        <InputGroup>
                            <InputLeftAddon children='Months' />
                            <Input readonly type='text' value={'24'} placeholder='Enter Loan Amount' />
                        </InputGroup>
                        <Slider mt={'10px'} aria-label='slider-ex-2' color={'#FF0096'} colorScheme='purple' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Box>
                </Box>
                <Flex gap={'20px'} w={{base : '100%', sm : '100%', md : '100%', lg : '65%', xl : '65%', '2xl' : '65%'}} flexDir={{base : 'column-reverse', sm : 'column-reverse', md : 'column-reverse', lg : 'row', xl : 'row', '2xl' : 'row'}} shadow={'md'} p={'30px'} justifyContent={'space-between'} borderRadius={'10px'}>
                    <Box w={{base : '100%', sm : '100%', md : '100%', lg : '48%', xl : '48%', '2xl' : '48%'}} fontWeight={'500'}>
                        <Image src={ellipse} />
                        <Flex mt={'40px'} justifyContent={'space-between'}>
                            <Flex gap={'10px'} alignItems={'center'}>
                                <Box borderRadius={'1px'} w={'10px'} h={'10px'} bg={'#FF0096'}></Box>
                                <Text>Pricipal Amount</Text>
                            </Flex>
                            <Text color={'#8800EC'} fontWeight={'500'}>₹3,00,000</Text>
                        </Flex>
                        <Flex mt={'40px'} justifyContent={'space-between'}>
                            <Flex gap={'10px'} alignItems={'center'}>
                                <Box borderRadius={'1px'} w={'10px'} h={'10px'} bg={'#BFBFBF'}></Box>
                                <Text>Pricipal Amount</Text>
                            </Flex>
                            <Text color={'#8800EC'} fontWeight={'500'}>₹59,454</Text>
                        </Flex>
                        <Flex mt={'40px'} justifyContent={'space-between'}>
                            <Text>Total Amount Payable</Text>
                            <Text color={'#8800EC'} fontWeight={'500'}>₹3,59,454</Text>
                        </Flex>
                    </Box>
                    <Box w={{base : '100%', sm : '100%', md : '100%', lg : '40%', xl : '40%', '2xl' : '40%'}} position={'relative'}>
                        <Box bg={'#FCF8FF'} p={'40px 20px'} textAlign={'center'}>
                            <Text fontWeight={'bold'} mb={'25px'} fontSize={'20px'}>Equated Monthly Installments (EMI)</Text>
                            <Heading>₹14,977</Heading>
                        </Box>
                        <Button variant={'none'} className='btn'>APPLY NOW</Button>
                    </Box>
                </Flex>
            </Flex>
        </SECTION>
    )
}

export default Section7;

const SECTION = styled.section`
    width: 85%;
    margin: 0 auto;
    text-align: start;
    margin-bottom: 30px;

    .btn{
        background: var(--1, #8800EC);
        color: white;
        border-radius: 2px;
        font-weight: 500;
        width: 100%;
        height: 40px;
        padding: 8px 55px;
        text-align: start;
        position: absolute;
        bottom: 0;

        &:hover{
            opacity: 0.9;
        }
      }
`