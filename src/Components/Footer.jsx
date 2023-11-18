import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import logo from '../Assets/Footer/logo.svg';
import fb from '../Assets/Footer/fb.svg';
import insta from '../Assets/Footer/insta.svg';
import youtube from '../Assets/Footer/youtube.svg';
import linkedin from '../Assets/Footer/linkedin.svg';

const Footer = () => {
  return (
    <FOOTER>
        <Flex gap={'20px'} justifyContent={'space-between'} flexDir={{base : 'column', sm : 'column', md : 'column', lg : 'row', xl : 'row', '2xl' : 'row'}}>
            <Box w={'20%'}>
                <Image src={logo} />
                <Flex mt={'40px'} gap={'30px'} alignItems={'center'}>
                    <Image src={fb} />
                    <Image src={linkedin} />
                    <Image src={youtube} />
                    <Image src={insta} />
                </Flex>
            </Box>
            <Flex gap={'20px'} color={'gray.200'} w={{base : '100%', sm : '100%', md : '100%', lg : '45%', xl : '45%', '2xl' : '45%'}} justifyContent={'space-between'} fontSize={'13px'} textAlign={'start'}>
                <Box lineHeight={'35px'}>
                    <Text fontSize={'15px'} fontWeight={'500'}>Help & Support</Text>
                    <Text>Terms & service</Text>
                    <Text>Privacy Policy</Text>
                    <Text>FAQ</Text>
                </Box>
                <Box lineHeight={'35px'}>
                    <Text fontSize={'15px'} fontWeight={'500'}>Customer care</Text>
                    <Text>2972 Westheimer Rd. Santa Ana, Illinois 85486</Text>
                    <Text>987654321</Text>
                    <Text>Tataneu Email ID</Text>
                </Box>
            </Flex>
        </Flex>
    </FOOTER>
  )
}

export default Footer;

const FOOTER = styled.footer`
  padding: 35px 50px;
  background-color: #212121;
`