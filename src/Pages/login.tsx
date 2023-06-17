import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/Authcontext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseauth';
import { error } from 'console';
import { Box, Heading, Input, Button, FormLabel } from '@chakra-ui/react';


interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,loginForm.email,loginForm.password)
    .then((res)=>{
      console.log(res)
      

    })
    .catch((error)=>{
      console.log(error)
    })

  
  };

  return (
    <Box p={4} maxWidth="400px" mx="auto" borderColor="gray.200" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px">
    <Heading as="h1" mb={4} color={"#010008"}>Login</Heading>
    <form onSubmit={handleSubmit}>
    <FormLabel>Email ID</FormLabel>
      <Input
        type="text"
        name="email"
        value={loginForm.email}
        onChange={handleInputChange}
        placeholder="Email"
        mb={4}
      />
         <FormLabel >Password</FormLabel>
      <Input
        type="password"
        name="password"
        value={loginForm.password}
        onChange={handleInputChange}
        placeholder="Password"
        mb={4}
      />
      <Button type="submit" bg="#FA6F13" color={"white"}>Login</Button>
    </form>
  </Box>
  );
};

export default Login;
