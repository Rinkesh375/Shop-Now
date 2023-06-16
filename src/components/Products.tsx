import { Grid } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from 'src/store';
import ProductsCardItem from './ProductsCardItem';
export interface PropType{
  deleteProduct:(id:number)=>void
}

const Products = ({deleteProduct}:PropType) => {
  const productArr= useAppSelector(state=>state.adminProductReducer.productArr);

  return (
   <Grid templateColumns='repeat(4, 1fr)' gap="1rem">
    {productArr.map((ele,index)=><ProductsCardItem deleteProduct={deleteProduct} key={index} {...ele}/>)}
   </Grid>
  );
}

export default Products;
