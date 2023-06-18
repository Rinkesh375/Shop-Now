import { Grid } from '@chakra-ui/react';
import React from 'react';
// import { useAppSelector } from 'src/store';
import { useAppSelector } from '../Redux/store';
import ProductsCardItem from './ProductsCardItem';
export interface PropType{
  deleteProduct:(id:number)=>void
}

const Products = ({deleteProduct}:PropType) => {
  const productArr= useAppSelector(state=>state.adminProductReducer.productArr);

  return (
   <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']} gap={['0.5rem', '1rem']}>
    {productArr.map((ele:any)=><ProductsCardItem deleteProduct={deleteProduct} key={ele.id} {...ele}/>)}
   </Grid>
  );
}

export default Products;
