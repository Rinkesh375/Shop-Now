import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch ,useSelector} from 'react-redux';
import { store } from '../Redux/store';
// import { RootState } from '../store';
// import { IArticle } from '../types';
import { signUP } from '../Redux/Auth/action';
  interface formtype{
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    
  }
  const initialdata:formtype={
    first_name:"",
    last_name:"",
    email:"",
    password:""
  }
  // import { RootState }from "../store"
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
//const isAuth=useSelector(store=>state.Authreducer.isAuth)
//const articles: readonly IArticle[] = useSelector((store: ArticleState) => store.articles);
const [formdata,setFormdata]=useState(initialdata)


const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=e.target;
    setFormdata((pre)=>({
        ...pre,[name]:value
    }))

}




const dispatch:any=useDispatch()
// const isAuth = useSelector(state => state.authReducer.isAuth);
const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
  e.preventDefault();
  const formData = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };
  dispatch(signUP(formData)).then((res:any)=>{
    return res.token
  })

};


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired    onSubmit={handleSubmit}
                   > 
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" 
                    name="first_name"
                    value={formdata.first_name}
                    onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" 
                      name="last_name"
                      value={formdata.last_name}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                      name="password"
                      value={formdata.password}
                      onChange={handleChange}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
               
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }