import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  extendTheme,
  ChakraProvider,Image, RadioGroup, Stack, Radio, useToast
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

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
  const toast = useToast()
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
    console.log("success")
    if(cardNumber&&expiryDate &&cvv){
    setTimeout(()=>{
      alert("Order Placed Successfull")
      navigate("/")

    },1000)
    
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  }else{
    alert("All the field mandatory")
  }
  };
  
  
  const navigate=useNavigate()

  const handleGoBack=()=>{
    navigate(-1)
  }
  const [value, setValue] = React.useState('1')
 
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Image src="https://devathon.com/wp-content/uploads/2020/02/Top-10-Payment-Gateways-Devathon.png" alt="" w={"180px"}/>
        <Heading as="h2" size="md" color="secondary.900">Payment Mode</Heading>
        <br />
        <Box>
          <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1'>Cash on Delivery</Radio>
        <Radio value='2'>Card</Radio>
        
      </Stack>
    </RadioGroup>


          </Box>
          <br />
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
              type="date"
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
          <br />
        

          <Button type="submit" colorScheme="primary"  w={"200px"}>Pay</Button>
        </form>
        <Box w="100px">
        <button onClick={handleGoBack} > <br /><ArrowBackIcon marginRight={"10px"}/>Back</button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default PaymentPage;
