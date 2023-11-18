import {
    Box, Button, Flex, Heading, Image, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import question from '../Assets/Section8/questionCircle.svg';
import plusIcon from '../Assets/Section8/plusIcon.svg';

const Section8 = () => {

    const contents = [
        {
            title: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            text:
                'Lorem ipsum. Nisi numquam nam laudantium accusantium iusto reprehenderit. Animi quis facere dicta cum delectus itaque dignissimos, fuga, repellat ullam perspiciatis placeat omnis mollitia.',
        },
        {
            title: '2. Lorem ipsum dolor sit amet',
            text:
                'Lorem ipsum. Nisi numquam nam laudantium accusantium iusto reprehenderit. Animi quis facere dicta cum delectus itaque dignissimos, fuga, repellat ullam perspiciatis placeat omnis mollitia.',
        },
        {
            title: '3. Lorem ipsum dolor sit amet, consectetur',
            text:
                'Lorem ipsum. Nisi numquam nam laudantium accusantium iusto reprehenderit. Animi quis facere dicta cum delectus itaque dignissimos, fuga, repellat ullam perspiciatis placeat omnis mollitia.',
        },
        {
            title: '4. Lorem ipsum dolor sit amet, consectetur',
            text:
                'Lorem ipsum. Nisi numquam nam laudantium accusantium iusto reprehenderit. Animi quis facere dicta cum delectus itaque dignissimos, fuga, repellat ullam perspiciatis placeat omnis mollitia.',
        },
        {
            title: '5. Lorem ipsum dolor sit amet, consectetur adipiscing',
            text:
                'Lorem ipsum. Nisi numquam nam laudantium accusantium iusto reprehenderit. Animi quis facere dicta cum delectus itaque dignissimos, fuga, repellat ullam perspiciatis placeat omnis mollitia.',
        },
        {
            title: '6. Lorem ipsum',
            text:
                'Lorem ipsum. Nisi numquam nam laudantium accusantium iusto reprehenderit. Animi quis facere dicta cum delectus itaque dignissimos, fuga, repellat ullam perspiciatis placeat omnis mollitia.',
        },
        {
            title: '7. Lorem ipsum dolor sit',
            text:
                'Lorem ipsum. Nisi numquam nam laudantium accusantium iusto reprehenderit. Animi quis facere dicta cum delectus itaque dignissimos, fuga, repellat ullam perspiciatis placeat omnis mollitia.',
        },
    ]

    return (
        <SECTION>
            <Box fontWeight={'500'} >
                <Flex gap={'6px'} m={'50px 0 30px 0'}>
                    <Image w={'40px'} src={question} />
                    <Text fontSize={'25px'} fontWeight={'500'}>FAQ'S</Text>
                </Flex>
                {contents.map((el, i) => {
                    return <Flex mb={'25px'} className='faq' justifyContent={'space-between'} alignItems={'center'}>
                        <Accordion border={'1px solid white'} w={'100%'} allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' fontWeight={'500'}>
                                            {window.screen.availWidth > 430 ? el.title : `${el.title.substring(0, 34)}...`}
                                        </Box>
                                        <Image w={'16px'} src={plusIcon} />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                   {window.screen.availWidth > 430 ? el.text : `${el.text.substring(0, 70)}...`}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                })}
            </Box>
            <Box m={'60px 0 20px 0'} p={'10px 20px'} bg={'#f4ecf9'} textAlign={'start'}>
                <Text fontWeight={'bold'}>Anything not clear?</Text>
                <Flex gap={'20px'} alignItems={'center'} flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}>
                    <Text mt={'15px'} color={'gray.600'} >You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...</Text>
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

    .faq{
        border: none;
    }
`