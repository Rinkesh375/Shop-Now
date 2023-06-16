import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from 'src/store';
interface PropType {
    page:number,
    updatePage:(value:number)=>void
}

const Pagination = ({page,updatePage}:PropType) => {
    const {  totalResult } = useAppSelector(state => state.adminProductReducer);
  return (
  <Flex justifyContent="space-evenly" my="2rem">
  <Button bg="#fa6f1e" color="white" _hover={{color:'white',bg:"#fa6f1e"}} onClick={()=>updatePage(-1)} isDisabled={page<=1}>Previous</Button>
  <Button bg="#fa6f1e" color="white" _hover={{color:'white',bg:"#fa6f1e"}} isDisabled>{page}</Button>
  <Button bg="#fa6f1e" color="white" _hover={{color:'white',bg:"#fa6f1e"}} onClick={()=>updatePage(1)}  isDisabled={page>=(Math.ceil(totalResult/12))}>Next</Button>
  </Flex>
  );
}

export default Pagination;
