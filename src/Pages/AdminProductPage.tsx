import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Image } from '@chakra-ui/react';
import SideBarFilter from 'src/components/SideBarFilter';
import Products from 'src/components/Products';
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch } from 'react-redux';
import { deleteAdminProduct, getAdminProudcts } from 'src/redux/AdminProductReducer/actions';
import { useAppSelector } from 'src/store';
import LoadingSpinner from "../assests/Loading Spinner.gif"
import Navbar from 'src/components/Navbar';
import Pagination from 'src/components/Pagination';
import { useSearchParams } from 'react-router-dom';

const AdminProductPage = () => {
  const [page, setPage] = useState(1)
  const [searchParam, setSearchParam] = useSearchParams();
  const [gender, setGender] = useState<string[]>(searchParam.getAll("gender") || []);
  const [rating, setRating] = useState<string[]>(searchParam.getAll("rating") || []);
  const [order, setOrder] = useState<string>(searchParam.get("order") || "")
  const { isLoading, productArr,isAdminAuth} = useAppSelector(state => state.adminProductReducer,shallowEqual);
  const dispatch: Dispatch<any> = useDispatch();

  const deleteProduct = (id:number)=>{

         deleteAdminProduct(id)
         .then(()=> dispatch(getAdminProudcts(dispatch, page, productArr))) 
  }
  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    let tempArr = [...gender];
    if (tempArr.includes(value)) tempArr = tempArr.filter(ele => ele !== value)
    else tempArr.push(value);
    setGender(tempArr)
}

const handleRating = (e:React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  let tempArr = [...rating];
  if (tempArr.includes(value)) tempArr = tempArr.filter(ele => ele !== value)
  else tempArr.push(value);
  setRating(tempArr)
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
        <GridItem ><SideBarFilter handleGender={handleGender} handleRating={handleRating} gender={gender} rating={rating} order={order} /></GridItem>
        <GridItem >
        
            <Products deleteProduct ={deleteProduct} />

          </GridItem>
      </Grid>}
      <Pagination page={page} updatePage={updatePage}/>

    </>
  );
}

export default AdminProductPage;
