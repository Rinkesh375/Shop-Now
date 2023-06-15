import { Box ,Button,HStack,Image,Text} from "@chakra-ui/react";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,

  } from '@chakra-ui/react'
import { useEffect, useState } from "react";

interface cartdatatype{
    id:number|string;
    image:string;
    brand:string;
    price:number;
}


const CartItems=({id,image,brand,price}:cartdatatype)=>{
    const [quantity, setQuantity] = useState(1);
    const [total,setTotal]=useState(0)
    const handleAdd=(e:React.MouseEvent<HTMLButtonElement> )=>{
        if(quantity>=1){
        setQuantity((pre)=>(pre+1))
        }

    }
    const handleReduce=(e:React.MouseEvent<HTMLButtonElement>)=>{
        if(quantity>0){
          
                setQuantity((pre)=>(pre-1))
           
      
        }
      

    }
    useEffect(() => {
        setTotal(quantity * price);
      }, [quantity, price]);
    

    return <>
     <Box>

           <Tr>
                <Td><Image src={image} alt="" w={"80px"}/></Td>
                <Td>{brand}</Td>
                <Td >{price}</Td>
                <Td>
                    <HStack>
                        <Button onClick={handleAdd}>+</Button>
                        <Text>{quantity}</Text>
                        <Button onClick={handleReduce}>-</Button>
                
                    </HStack>
                </Td>
                <Td>
                    {total}
                </Td>
                </Tr>
    


        </Box>
    </>
}
export default CartItems