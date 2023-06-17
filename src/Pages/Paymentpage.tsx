import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  extendTheme,
  ChakraProvider,Image
} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#FF6E14', // Orange color
    },
    secondary: {
      900: '#000000', // Black color
    },
  },
});

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform payment processing logic here
    // You can send the payment details to a server, integrate with a payment gateway, etc.

    // Reset the form after payment processing is complete
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };
  const handlePay=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    setTimeout(()=>{
      alert("placed succssfully")

    },1000)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Image src="https://devathon.com/wp-content/uploads/2020/02/Top-10-Payment-Gateways-Devathon.png" alt="" w={"200px"}/>
        <Heading as="h2" size="md" color="secondary.900">Payment Information</Heading>
        <form onSubmit={handlePaymentSubmit}>
          <FormControl>
            <FormLabel htmlFor="cardNumber">Card Number:</FormLabel>
            <Input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              color="secondary.900"
              bg="white"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="expiryDate">Expiry Date:</FormLabel>
            <Input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              color="secondary.900"
              bg="white"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="cvv">CVV:</FormLabel>
            <Input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              color="secondary.900"
              bg="white"
            />
          </FormControl>

          <Button type="submit" colorScheme="primary" onClick={handlePay}>Pay</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default PaymentPage;
