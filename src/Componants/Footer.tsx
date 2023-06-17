import { Flex, Heading, VStack, Text, Input, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { GrFacebook, GrInstagram, GrPinterest, GrTwitter } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <Box fontFamily='Poppins,sans-serif' letterSpacing="wide" borderRadius="40px" width="97%" margin="auto" backgroundColor="#010008" paddingTop="4%">
            <Flex display={{ sm: "column", md: "flex", xl: "flex", base: "column" }} borderBottom="1px solid gray" justifyContent="space-between" paddingBottom="5%">
                <Flex display={{ sm: "flex", md: "flex", xl: "flex", base: "column" }} justifyContent="space-around" width={["80%","80%","50%","45%"]} margin="auto" color="gray">
                    <VStack alignItems={{sm:"centre",md:"flex-start",xl:"flex-start",base:"flex-start"}} >
                        <Heading color="white" size="md" marginBottom="10px">Shop</Heading>
                        <Text>Fashion</Text>
                        <Text>Gift Cards</Text>
                        <Text>Store Locator</Text>
                        <Text>Refer a friend</Text>
                    </VStack>
                    <VStack alignItems="flex-start">
                        <Heading color="white" size="md" marginBottom="10px">About</Heading>
                        <Text>Our story</Text>
                        <Text>Wholesale</Text>
                        <Text>Careers</Text>
                        <Text>Trends</Text>
                        <Text>Press</Text>
                    </VStack>
                    <VStack alignItems="flex-start">
                        <Heading color="white" size="md" marginBottom="10px">Help</Heading>
                        <Text>Contact Us</Text>
                        <Text>FAQ</Text>
                        <Text>Accessibility</Text>
                    </VStack>
                </Flex>
                <VStack width={["80%","80%","50%","45%"]} alignItems="flex-start" gap="20px" margin="auto">
                    <Heading color="white">Newsletter</Heading>
                    <Text color="gray" width="70%">Get the latest about us and signup to get 10% off today.Never miss a single promo.</Text>
                    <Flex>
                        <Input borderColor="gray" color="white" width="70%" placeholder="Enter email address"></Input>
                        <Button color="white" bgColor="#FA6F1E" fontSize={["10px","15px","15px","15px"]} padding="20px" borderRadius="10px" width={["45%","30%","30%","30%"]}>SUBSCRIBE</Button>
                    </Flex>
                    <Flex justifyContent="space-between" width={["70%","40%","35%","35%"]} margin="20px" >
                        <Link to='#'><GrFacebook size="35px" color="#3b5998" /></Link>
                        <Link to='#'><GrTwitter size="35px" color="#00acee" /></Link>
                        <Link to='#'><GrPinterest size="35px" color="red" /></Link>
                        <Link to='#'><GrInstagram size="35px" color="#d62976" /></Link>
                    </Flex>
                </VStack>

            </Flex>
            <Flex justifyContent="space-between" width="92%" margin="auto" paddingBottom="10px" paddingTop="20px">
                <Text color="gray" width={["30%","30%","40%","40%"]}>Ⓒ 2023 Seative Digital All Rights Reserved</Text>
                <Flex justifyContent="space-between" width={["60%","50%","30%","30%"]}>
                    <Text color="gray">Terms and Service </Text>
                    <Text color="gray">Privacy & Policy </Text>
                </Flex>
            </Flex>
        </Box>

    )
}
export default Footer