import { Box, Flex, Heading, VStack, Text, Input, Button } from '@chakra-ui/react';
import { GrFacebook, GrInstagram, GrPinterest, GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box fontFamily='Poppins, sans-serif' letterSpacing="wide" margin="auto" backgroundColor="#010008" paddingTop="4%">
      <Flex borderBottom="1px solid gray" flexDirection={['column', 'column', 'row']} justifyContent="space-between" paddingBottom="5%">
        <Flex justifyContent="space-around" width={['100%', '100%', '45%']} margin="10px" color="gray">
          <VStack alignItems={['center', 'center', 'flex-start']} >
            <Heading color="white" size="md" marginBottom="10px">Shop</Heading>
            <Text>Fashion</Text>
            <Text>Gift Cards</Text>
            <Text>Store Locator</Text>
            <Text>Refer a friend</Text>
          </VStack>
          <VStack alignItems={['center', 'center', 'flex-start']}>
            <Heading color="white" size="md" marginBottom="10px">About</Heading>
            <Text>Our story</Text>
            <Text>Wholesale</Text>
            <Text>Careers</Text>
            <Text>Trends</Text>
            <Text>Press</Text>
          </VStack>
          <VStack alignItems={['center', 'center', 'flex-start']}>
            <Heading color="white" size="md" marginBottom="10px">Help</Heading>
            <Text>Contact Us</Text>
            <Text>FAQ</Text>
            <Text>Accessibility</Text>
          </VStack>
        </Flex>
        <VStack width={['100%', '100%', '45%']} alignItems={['center', 'center', 'flex-start']} gap="20px">
          <Heading color="white">Newsletter</Heading>
          <Text color="gray" width={['100%', '100%', '70%']}>Get the latest about us and signup to get 10% off today. Never miss a single promo.</Text>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Input borderColor="gray" width={['100%', '100%', '70%']} placeholder="Enter email address" />
            <Button color="white" bgColor="#FA6F1E" padding="20px" borderRadius="10px" width={['100%', '100%', '30%']}>SUBSCRIBE</Button>
          </Flex>
          <Flex justifyContent={['center', 'center', 'space-between']} width={['100%', '100%', '35%']} margin="20px">
            <Link to='#'><GrFacebook size="35px" color="#3b5998" /></Link>
            <Link to='#'><GrTwitter size="35px" color="#00acee" /></Link>
            <Link to='#'><GrPinterest size="35px" color="red" /></Link>
            <Link to='#'><GrInstagram size="35px" color="#d62976" /></Link>
          </Flex>
        </VStack>
      </Flex>
      <Flex justifyContent="space-between" width="92%" margin="auto" paddingBottom="10px" paddingTop="20px">
        <Text color="gray">Ⓒ 2023 Seative Digital All Rights Reserved</Text>
        <Flex justifyContent={['space-between', 'space-between', 'flex-start']} width={['100%', '100%', '30%']}>
          <Text color="gray">Terms and Service</Text>
          <Text color="gray">Privacy & Policy</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
