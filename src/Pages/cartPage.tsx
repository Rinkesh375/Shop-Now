import { Box, Button, Flex, Heading, Stack, StackDivider, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import CartItems from "./CartItem";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

interface CartItem {
    id: string;
    image:string;
    brand:string;
    price:number;
  }

const CartPage=()=>{
    const [cartData,setcartData]=useState<CartItem[]>([])
   async function cartdata(){
    try {
        await axios.get("https://cloudy-red-cheetah.cyclic.app/data")
        .then(res=>{
            setcartData(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }

    }
  
    useEffect(()=>{
        cartdata()
    },[])
    let total=0;
    let delivery=100;

    for(let i=0;i<2;i++){
       // total+=+cartData[i].price
    }
    console.log(total)
// let totalprice,discount;
//     if(total>=1000){
  
//          discount=total+delivery*0.20
//     }
//     console.log(discount)
    return <>
    <Box>
        <Heading>Your Shoping Cart</Heading>
        <Box display={"flex"} >
                    <Box w={"65%"}  >
                    <TableContainer >
                <Table variant='simple' >
                    <Thead  border={"2px solid red"} gap={"0px"}>
                    <Tr>
                    <Th >image</Th>
                    <Th >brand</Th>
                    <Th >prcie</Th>
                    <Th>Quantity</Th>
                    <Th>Total</Th>
                </Tr>
                    </Thead>
                <Tbody>
                    
                { cartData?.map((e)=>(<CartItems key={e.id} {...e}/>))}
                
    </Tbody>

                </Table>
                </TableContainer>

       
       

   
    
    
    
   


           
                    </Box>
                <Box>
                                    <Card>
                    <CardHeader>
                        <Heading size='md'>    Order Summary</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Sub Total
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                             
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                           Discount
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                           
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Delivery Fee
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                           Total
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {total}
                            </Text>
                        </Box>
                        </Stack>
                        <Button>Place Order</Button>
                    </CardBody>
                    </Card>

                </Box>
        </Box>
    </Box>
    </>
}
export default CartPage