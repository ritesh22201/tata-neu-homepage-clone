import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, Text, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import frame1 from '../Assets/Section6/frame1.svg';
import frame2 from '../Assets/Section6/frame2.svg';
import frame3 from '../Assets/Section6/frame3.svg';
import frame4 from '../Assets/Section6/frame4.svg';
import bus from '../Assets/Section6/bus.svg';
import star2 from '../Assets/Section2/star2.svg';

const Section6 = () => {
    const colors = [
        { text: 'Eligibilty', url: frame1 },
        { text: 'How to apply', url: frame2 },
        { text: 'Documentation', url: frame3 },
        { text: 'Fees & Charges', url: frame4 },
    ]
    const [tabColors, setTabColors] = useState(Array(colors.length).fill(false));
    const tabChild1 = [
        { title: 'Citizenship Proof 001', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 002', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 003', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 004', description: 'Indian Citizen With Valid ID Proof' }
    ]

    const tabChild2 = [
        { title: 'Citizenship Proof 005', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 006', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 007', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 008', description: 'Indian Citizen With Valid ID Proof' }
    ]

    const tabChild3 = [
        { title: 'Citizenship Proof 009', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 010', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 011', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 012', description: 'Indian Citizen With Valid ID Proof' }
    ]

    const tabChild4 = [
        { title: 'Citizenship Proof 013', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 014', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 015', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 016', description: 'Indian Citizen With Valid ID Proof' }
    ]

    const handleTabColors = (ind) => {
        let tColors = Array(colors.length).fill(false);
        tColors[ind] = !tColors[ind];
        setTabColors(tColors);
    }

    return (
        <SECTION>
            <Tabs variant='enclosed' className='tabs-container'>
                <TabList className='tablist'>
                    {colors.map((el, i) => {
                        return <Tab fontWeight={tabColors[i] ? 'bold' : 'normal'} color={tabColors[i] ? '#8800EC' : i === 0 ? '#8800EC' : 'gray.600'} key={i} onClick={() => handleTabColors(i)}>
                            <Image w={'26%'} src={el.url} />
                            <Text>{el.text}</Text>
                        </Tab>
                    })}
                </TabList>
                <TabPanels className='table-panels'>
                    <TabPanel className='tabpanel'>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild1.map(el => {
                                return <Box key={el} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>{el.description}</Text>
                                </Box>
                            })}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                    <TabPanel className='tabpanel'>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild2.map(el => {
                                return <Box key={el} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>{el.description}</Text>
                                </Box>
                            })}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                    <TabPanel className='tabpanel'>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild3.map(el => {
                                return <Box key={el} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>{el.description}</Text>
                                </Box>
                            })}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                    <TabPanel className='tabpanel'>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild4.map(el => {
                                return <Box key={el} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>{el.description}</Text>
                                </Box>
                            })}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </SECTION>
    )
}

export default Section6;

const SECTION = styled.section`
  width: 85%;
  margin: 40px auto;

  .tabs-container{
    border-bottom: 1px solid #CBD5E0;
    border-left: 1px solid #CBD5E0;
    border-right: 1px solid #CBD5E0;
    border-radius: 6px;

    .tablist > *{
        display: flex;
        width: 25%;
        align-items: center;
        gap: 10px;
    }

    .tabpanel{
        display: flex;
        justify-content: space-around;
    }
  }
`