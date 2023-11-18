import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import logo from '../Assets/Logo.svg';
import fb from '../Assets/Footer/fb.svg';
import insta from '../Assets/Footer/insta.svg';
import youtube from '../Assets/Footer/youtube.svg';
import linkedin from '../Assets/Footer/linkedin.svg';

const Footer = () => {
  return (
    <FOOTER>
        <Flex>
            <Box w={'20%'}>
                <Image src={logo} />
                <Flex>
                    <Image src={fb} />
                    <Image src={insta} />
                    <Image src={youtube} />
                    <Image src={linkedin} />
                </Flex>
            </Box>
        </Flex>
    </FOOTER>
  )
}

export default Footer;

const FOOTER = styled.footer`
  padding: 30px 50px;
  background-color: #212121;
`