import axios from "axios";
import { Dispatch } from 'redux';
import { ADMIN_GET_PRODUCT_FAILURE,ADMIN_GET_PRODUCT_SUCCESS, ADMIN_GET_PRODUCT_LOADING } from "../actionTypes";
import { ProductObj } from "src/constraints/types";

/*
export const ADMIN_GET_PRODUCT_SUCCESS = "ADMIN_GET_PRODUCT_SUCCESS";
export const ADMIN_GET_PRODUCT_FAILURE = "ADMIN_GET_PRODUCT_FAILURE";
export const ADMIN_GET_PRODUCT_LOADING = "ADMIN_GET_PRODUCT_LOADING";
*/

export const  getAdminProudcts = (dispatch:Dispatch,page:number,productArr:ProductObj[])=>()=>{
  
    console.log(productArr,"I am array",page)
    dispatch({type:ADMIN_GET_PRODUCT_LOADING})
   try {
      axios.get(`http://localhost:8080/products?_page=${page}&_limit=12`)
      .then(req=>{
          productArr = [...productArr,...req.data]
          // console.log(productArr,"I am product arr",page)
          dispatch({type:ADMIN_GET_PRODUCT_SUCCESS,payload:productArr})
      })
   } catch (err) {
        dispatch({type:ADMIN_GET_PRODUCT_FAILURE})
   }
}