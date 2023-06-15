import { Grid } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from 'src/store';
import ProductsCardItem from './ProductsCardItem';

const Products = () => {
  const productArr= useAppSelector(state=>state.adminProductReducer.productArr);

  return (
   <Grid templateColumns='repeat(4, 1fr)' gap="1rem">
    {productArr.map(ele=><ProductsCardItem key={ele.id} {...ele}/>)}
   </Grid>
  );
}

export default Products;
