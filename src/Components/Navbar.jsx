import {
    Box, Drawer, Flex, Image, Input, Text, useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import logo from '../Assets/Logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import search from '../Assets/search.svg';
import location from '../Assets/location.svg';
import cart from '../Assets/cart.svg';
import bell from '../Assets/bell.svg';
import userProfile from '../Assets/userProfile.svg';
import { HamburgerIcon } from '@chakra-ui/icons';
import DrawerLeft from './DrawerLeft';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    useEffect(() => {
        console.log(onOpen)
    }, [])
    return (
        <DIV>
            <Flex boxShadow={'base'} p={'24px'} alignItems={'center'} justifyContent={'space-between'}>
                <DrawerLeft onOpen={onOpen} btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
                <Flex className='container1' >
                    <Box fontSize={'20px'} display={{ base: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none', '2xl': 'none' }}>
                        <HamburgerIcon ref={btnRef} onClick={() => {
                            onOpen();
                        }} />
                    </Box>
                    <Image src={logo} />
                    <Flex gap={'24px'} display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }}>
                        <Link to={'#'}>Offers</Link>
                        <Link to={'#'}>Stories</Link>
                        <Link to={'#'}>Tata Pay</Link>
                        <Link to={'#'}>NeuPass</Link>
                    </Flex>
                </Flex>
                <Flex className='container2'>
                    <Flex className='innerflex' display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}>
                        <Input _focusVisible={'none'} placeholder='Search Tata Neu' _placeholder={{ color: 'black' }} />
                        <Image src={search} />
                    </Flex>
                    <Flex alignItems={'center'} gap={'3px'}>
                        <Text display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }} fontWeight={'500'}>122018</Text>
                        <Image src={location} />
                    </Flex>
                    <Flex>
                        <Image src={cart} />
                    </Flex>
                    <Flex position={'relative'}>
                        <Box position={'absolute'} w={'10px'} h={'10px'} right={'0'} top={'6%'} borderRadius={'50%'} bg={'#006A6A'}></Box>
                        <Image src={bell} />
                    </Flex>
                    <Flex>
                        <Image src={userProfile} />
                    </Flex>
                </Flex>
            </Flex>
        </DIV>
    )
}

export default Navbar;

const DIV = styled.div`
     a{
        font-weight: 500;
     }

     a:hover{
        text-decoration: underline;
     }

     .container1{
        gap: 16px;
        align-items: center;
     }

     .container2{
        gap: 24px;
        .innerflex{
            position: relative;
            img{
                position: absolute;
                left: 2.5%;
                top: 33%;
            }
        }
        input{
            border-radius: 3px;
            padding-left: 30px;
            background: var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12));
        }
     }
`