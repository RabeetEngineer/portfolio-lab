import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hafiz Rabeet Ahmad!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

  <VStack spacing={16}>
    <Avatar src={"https://i.pravatar.cc/150?img=7"}
    size='2xl'
    name='Hafiz Rabeet Ahmad'
    />
    <Heading as='h4' size='md' noOfLines={1}>
      {greeting}
    </Heading>

    <VStack spacing={16}>
      <Heading as='h1' size='3xl' noOfLines={1}>{bio1}</Heading>
      <Heading as='h1' size='3xl' noOfLines={1}>{bio2}</Heading>
    </VStack>

  </VStack>

  </FullScreenSection>
);

export default LandingSection;
