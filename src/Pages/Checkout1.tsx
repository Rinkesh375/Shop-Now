import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PaymentPage from "./Paymentpage";

interface CheckoutItem {
  name: string;
  price: number;
  quantity: number;
}

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  //const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justify="center"
      align="center"
      py={8}
    >
      <Box
        w={{ base: "100%", md: "70%" }}
        //bg={bgColor}
        borderRadius="md"
        p={6}
        shadow="md"
      >
        <Heading size="lg" mb={4} color={textColor}>
          Checkout
        </Heading>
        <Stack spacing={4} mb={8}>
          <FormControl id="name">
            <FormLabel color={textColor}>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e:any) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel color={textColor}>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e:any) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="address">
            <FormLabel color={textColor}>Address</FormLabel>
            <Input
              type="text"
              value={address}
              onChange={(e:any) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl id="phone">
            <FormLabel color={textColor}>Phone</FormLabel>
            <Input
              type="tel"
              value={phone}
              onChange={(e:any) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl id="paymentMethod">
            <FormLabel color={textColor}>Payment Method</FormLabel>
            <Input
              type="text"
              value={paymentMethod}
              onChange={(e:any) => setPaymentMethod(e.target.value)}
            />
          </FormControl>
        </Stack>
        
      </Box>
      <Box w={{ base: "100%", md: "30%" }} ml={{ base: 0, md: 6 }}>
        <PaymentPage />
      </Box>
    </Flex>
  );
};

export default CheckoutPage;
