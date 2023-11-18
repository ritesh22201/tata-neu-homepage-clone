import { Box, Flex, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import hdfc from '../Assets/Section3/hdfc.svg';
import icici from '../Assets/Section3/icici.svg';
import baroda from '../Assets/Section3/baroda.svg';

const Section3 = () => {
    return (
        <SECTION>
            <Flex className='container' gap={'10px'} flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}>
                <Text w={{base : '100%', sm : '100%', md : '100%', lg : '20%', xl : '20%', '2xl' : '20%'}}>Our Partners</Text>
                <Grid w={'80%'} className='grid' templateColumns={{base : 'repeat(1, 1fr)', sm : 'repeat(1, 1fr)', md : 'repeat(2, 1fr)', lg : 'repeat(4, 1fr)', xl : 'repeat(4, 1fr)', '2xl' : 'repeat(4, 1fr)'}}>
                    <VStack>
                        <Image src={hdfc} />
                        <Text fontSize={'17px'}>HDFC Bank</Text>
                    </VStack>
                    <VStack>
                        <Image src={icici} />
                        <Text fontSize={'17px'}>ICICI Bank</Text>
                    </VStack>
                    <VStack>
                        <Image src={icici} />
                        <Text fontSize={'17px'}>ICICI Bank</Text>
                    </VStack>
                    <VStack>
                        <Image src={baroda} />
                        <Text fontSize={'17px'}>Bank of Baroda</Text>
                    </VStack>
                </Grid>
            </Flex>
        </SECTION>
    )
}

export default Section3;

const SECTION = styled.section`
    .container{
        background-color: #F8F9FA;
        padding: 60px 50px;

        p{
            font-size: 18px;
            font-weight: 500;
        }
    }

    .container > p{
        font-size: 35px;
        font-weight: 500;
    }

    .grid{
        text-align: center;
    }
`