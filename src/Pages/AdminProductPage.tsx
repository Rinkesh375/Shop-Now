import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Image } from '@chakra-ui/react';
import LeftSiderFilter from 'src/components/LeftSiderFilter';
import Products from 'src/components/Products';
import { Dispatch } from 'redux';



import { useDispatch } from 'react-redux';
import { deleteAdminProduct, getAdminProudcts } from 'src/redux/AdminProductReducer/actions';
import { useAppSelector } from 'src/store';


import LoadingSpinner from "../assests/Loading Spinner.gif"
import Navbar from 'src/components/Navbar';
import Pagination from 'src/components/Pagination';



const AdminProductPage = () => {
  const [page, setPage] = useState(1)
  const { isLoading, productArr} = useAppSelector(state => state.adminProductReducer);
  const dispatch: Dispatch<any> = useDispatch();

  const deleteProduct = (id:number)=>{

         deleteAdminProduct(id)
         .then(()=> dispatch(getAdminProudcts(dispatch, page, productArr))) 
  }
  const updatePage = (value:number)=>{
        setPage(pre=>pre+value)
  }


  useEffect(() => {

    dispatch(getAdminProudcts(dispatch, page, productArr))
   
  
  }, [page]);

  return (
    <>
    <Navbar/>
      {isLoading ? <Image m="auto" src={LoadingSpinner} /> : <Grid templateColumns='1fr 4fr'>
        <GridItem ><LeftSiderFilter /></GridItem>
        <GridItem >
        
            <Products deleteProduct ={deleteProduct} />

          </GridItem>
      </Grid>}
      <Pagination page={page} updatePage={updatePage}/>

    </>
  );
}

export default AdminProductPage;
