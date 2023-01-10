import React from 'react'
import chef2 from '../assets/images/chef2.png'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react'
import { MinusIcon, AddIcon, } from '@chakra-ui/icons'

function Footer() {
    let isExpanded = false
    return (
        <div>
            <div className='xl:w-[40rem] xl:text-left xl:ml-[49rem] text-center lg:hidden'>
                <h2 className='text-3xl my-6 font-extrabold'>Frequently Asked Questions</h2>
                <p className='text-xl mb-12'>We offer a multidisciplinary and intregrative approach to joint care, which means we do everything we can to help you find fast, lasting relief.</p>
            </div>

            <div className='pt-10 flex justify-around items-start flex-wrap gap-2' >
                {/* image */}
                <div className='xl:w-[45rem] w-[30rem]'>
                    <img src={chef2} alt="Chef" className='' />
                </div>

                {/* faqs */}
                <div className='xl:w-[35rem] w-[25rem]'>
                    <div className='text-left hidden lg:block'>
                        <h2 className='text-3xl my-6 font-extrabold'>Frequently Asked Questions</h2>
                        <p className='text-xl mb-12'>We offer a multidisciplinary and intregrative approach to joint care, which means we do everything we can to help you find fast, lasting relief.</p>
                    </div>
                    <Accordion allowMultiple>

                        <AccordionItem className='mb-4 bg-gray-100 p-3 rounded-lg'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Question 1
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' color='red.500' />
                                            ) : (
                                                <AddIcon fontSize='12px' color='red.500' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem className='mb-4 bg-gray-100 p-3 rounded-lg'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Question 2
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' color='red.500' />
                                            ) : (
                                                <AddIcon fontSize='12px' color='red.500' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem className='mb-4 bg-gray-100 p-3 rounded-lg'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Question 3
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' color='red.500' />
                                            ) : (
                                                <AddIcon fontSize='12px' color='red.500' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem className='mb-4 bg-gray-100 p-3 rounded-lg'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Question 4
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' color='red.500' />
                                            ) : (
                                                <AddIcon fontSize='12px' color='red.500' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem className='mb-4 bg-gray-100 p-3 rounded-lg'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Question 5
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' color='red.500' />
                                            ) : (
                                                <AddIcon fontSize='12px' color='red.500' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Footer

