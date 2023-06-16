import { Divider, GridItem, Stack, Heading, FormControl, Input,Button,useToast } from '@chakra-ui/react';
import React,{useState,FormEvent} from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import { AdminInput } from 'src/types/typeForAdmin';
import { userLoginAuth } from 'src/api/api';

const AdminLoginRight = () => {
    const [adminInfo,setAdminInfo] = useState<AdminInput>({email:"",password:""})
    const toast = useToast()
    const navigator = useNavigate()
    const {email,password} = adminInfo;

    const handleSubmit = (e:FormEvent)=>{
            e.preventDefault();
            userLoginAuth(adminInfo.email)
            .then(req=>{
                if(req.data.id === email && req.data.password === password) {
                    toast({ position: "top", title: 'Login Successfully', status: 'success', duration: 3000, isClosable: true, });
                    setTimeout(() => navigator("/admin-products"), 3000);
                }
                else {
                    toast({ position: "top", title: 'Login Failed', status: 'error', duration: 2000, isClosable: true, description: "Please check your email and password" })
                   
                } 
            })
            .catch(()=> toast({ position: "top", title: 'Login Failed', status: 'error', duration: 2000, isClosable: true, description: "Please check your email and password" }))
          
    }

    return (
        <GridItem>
            <Stack spacing="3rem">
                <Divider />
                <Heading as='h3' size='lg'>Login as a Admin User</Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing="2rem">
                    <FormControl isRequired>
                       <Input type="email" placeholder='Enter Your Email :-' autoComplete='off' required border="2px solid #282828" value={email} onChange={(e)=>setAdminInfo({...adminInfo,email:e.target.value})} />
                    </FormControl>
                    <FormControl isRequired>
                       <Input type='password' placeholder='Enter Your Password :-' autoComplete='off' border="2px solid #282828" required value={password} onChange={(e)=>setAdminInfo({...adminInfo,password:e.target.value})} />
                    </FormControl>
                     <Stack width="50%"  m="auto"> <Button colorScheme='teal' variant='solid' type='submit'>Login</Button></Stack>
                    </Stack>
              
                </form>

                
            </Stack>

        </GridItem>
    );
}

export default AdminLoginRight;
