import { Badge, GridItem, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, Box, HStack, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
// import { ProductObj } from 'src/constraints/types';
import { ProductObj } from '../constraints/types';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
interface PropType extends ProductObj {
  deleteProduct:(id:number)=>void
}

const ProductsCardItem = ({ ratings, reviews, image, brand, title, size, discountprice, price, discountPercentage, id, isNew, assured, gender,deleteProduct }: PropType) => {

  return (
    <GridItem boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
      <Heading textAlign="center">{id--}</Heading>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={image}
            alt={title}
            borderRadius='lg'
          
          />
          <Stack mt='6' spacing='3' textAlign="left">
            {isNew  ?<HStack><Badge h="1rem" rounded="full" w="15%" m="auto" colorScheme='purple'>New</Badge><Badge h="1rem" rounded="full" w="26%" m="auto" color='white' bg="black">Assured</Badge></HStack>:isNew?<Badge h="1rem" rounded="full" w="15%" m="auto" colorScheme='purple'>New</Badge>:assured?<Badge h="1rem" rounded="full" w="26%" m="auto" color='white' bg="black">Assured</Badge>:<Text h="1rem"></Text>}
         
            <Heading size='md'>{title.substring(0,21)}...</Heading>
            <HStack><Heading size='sm'>Brand -</Heading> <Text> {brand}</Text></HStack>
            <StarRating numReviews ={reviews} rating ={ratings}/>

            <Box ><Text as="span" mr="2rem" fontSize="1.3rem" fontWeight="bold">₹ {discountprice}</Text>
              <Text as="span" textDecoration="line-through" >₹ {price} </Text>
              <Text as="span" color="rgb(39 160 65)"> ({Math.ceil((discountprice*100)/price)}% OFF)</Text>
            </Box>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex width="100%" justifyContent="space-evenly">
            <Box>
              <Link to={`/admin-edit-product/${id+1}`}>
              <Button variant='solid' colorScheme='blue'>
                Edit
              </Button>
              </Link>
            </Box>
            <Spacer />
            <Box> <Button variant='solid'  colorScheme='blue' onClick={()=>{
           
              deleteProduct(id+1)
            }}>
              Delete
            </Button></Box>
          </Flex>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default ProductsCardItem;
