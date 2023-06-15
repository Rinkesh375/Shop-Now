import React,{useEffect,useState} from 'react';
import { Grid, GridItem,Image } from '@chakra-ui/react';
import LeftSiderFilter from 'src/components/LeftSiderFilter';
import Products from 'src/components/Products';
import { Dispatch } from 'redux';

import { shallowEqual, useDispatch } from 'react-redux';
import { getAdminProudcts } from 'src/redux/AdminProductReducer/actions';
import { useAppSelector } from 'src/store';
import LoadingSpinner from "../assests/Loading Spinner.gif"


const AdminProductPage = () => {
  const {isLoading,productArr}= useAppSelector(state  =>state.adminProductReducer,shallowEqual);
  const [page,setPage] = useState<number>(1)

const handleScrolling = ()=>{
  // console.log("Height",document.documentElement.scrollHeight);
  // console.log("innerHeight",window.innerHeight);
  // console.log("scrollTop",document.documentElement.scrollTop)
  if((window.innerHeight+document.documentElement.scrollTop+1)>=document.documentElement.scrollHeight) {
    setPage((prev:number)=>prev+1)
  }
    
}
  const dispatch:Dispatch<any> = useDispatch();
  useEffect(()=>{
    window.addEventListener("scroll",handleScrolling);
    return ()=>{
      window.removeEventListener("scroll",handleScrolling);
    }
  },[])
  useEffect(() => {
        dispatch(getAdminProudcts(dispatch,page,productArr))
  }, [page]);
  
  return (
         <>
         {isLoading?<Image m="auto" src={LoadingSpinner}/>:   <Grid templateColumns='1fr 4fr'>
              <GridItem ><LeftSiderFilter/></GridItem>
              <GridItem ><Products/></GridItem>
          </Grid>}
       
         </>
  );
}

export default AdminProductPage;
