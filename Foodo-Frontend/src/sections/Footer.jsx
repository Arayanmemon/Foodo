import React from 'react'
import chef2 from '../assets/images/chef2.png'
import {
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box,
  } from '@chakra-ui/react'
import { MinusIcon, AddIcon,  } from '@chakra-ui/icons'

function Footer() {
  return (
    <div className='pt-10 flex justify-around items-center' >
        {/* image */}
      <div>
        <img src={chef2} alt="Chef" className='w-1/2 ' />
      </div>

      {/* faqs */}
      <div>
        <Accordion allowMultiple>
           
            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Section 2 title
                        </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
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
            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Section 2 title
                        </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
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
            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Section 2 title
                        </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
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
  )
}

export default Footer

