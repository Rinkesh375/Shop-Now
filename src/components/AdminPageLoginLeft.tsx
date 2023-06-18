import { GridItem ,Image} from '@chakra-ui/react';
import AdminImage from "../assests/Admin Login page image.png";
// import React,{useEffect} from "react"
// import { Dispatch } from 'redux';
// import { useDispatch } from 'react-redux';
// import { getAdminProudcts } from 'src/redux/AdminProductReducer/actions';
// import { ProductState,ProductObj } from 'src/constraints/types';
// import { useSelector } from 'react-redux';



const AdminPageLoginLeft = () => {

  return (
    <GridItem>
        <Image src={AdminImage} alt="Admin Image"/>
    </GridItem>
  );
}

export default AdminPageLoginLeft;
