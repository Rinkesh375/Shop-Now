import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/Authcontext';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseauth';

import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

interface RegisterForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate=useNavigate()
  const { isAuthenticated } = useContext(AuthContext);
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerForm.email,registerForm.password)
    createUserWithEmailAndPassword(auth,registerForm.email,registerForm.password)
    .then((res)=>{
      console.log(res)
      navigate("/login")
    })
    .catch((error)=>{
      console.log(error)
    })

 
  };
 

const handleGoBack=()=>{
  navigate(-1)
}
  return (
    <Box maxWidth="sm" mx="auto" p={4}  borderColor="gray.200" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px" marginTop={"5%"}>
      <Heading mb={4} color={"#010008"}>Register</Heading>
      <form onSubmit={handleSubmit} >
        <Stack spacing={3}>
          <FormControl id="email" isRequired>
            <FormLabel>Email ID</FormLabel>
            <Input
              type="text"
              name="email"
              placeholder='Email Id'
              value={registerForm.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Stack spacing={3}>
            <Input
              type="password"
              name="password"
              value={registerForm.password}
              onChange={handleInputChange}
              variant='outline' placeholder='password'
             h={"40px"}
            />

            </Stack>
            
          </FormControl>
          <Button type="submit" colorScheme="#FA6F13"  bg="#FA6F13" color={"white"}>
          SignUp
          </Button>
        </Stack>
        <Box w="100px">
        <button onClick={handleGoBack} > <br /><ArrowBackIcon marginRight={"10px"}/>Back</button>
        </Box>
      </form>
      
    </Box>
  );
};

export default SignUp;
