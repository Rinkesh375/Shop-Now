import axios from "axios";
import { Dispatch } from 'redux';
import { ADMIN_GET_PRODUCT_FAILURE,ADMIN_GET_PRODUCT_SUCCESS, ADMIN_GET_PRODUCT_LOADING, PAGE_UPDATE, ADMIN_AUTH_LOGIN_SUCCESS, ADMIN_AUTH_LOGOUT_SUCCESS } from "../actionTypes";
import { ProductObj } from "src/constraints/types";


/*
export const ADMIN_GET_PRODUCT_SUCCESS = "ADMIN_GET_PRODUCT_SUCCESS";
export const ADMIN_GET_PRODUCT_FAILURE = "ADMIN_GET_PRODUCT_FAILURE";
export const ADMIN_GET_PRODUCT_LOADING = "ADMIN_GET_PRODUCT_LOADING";
*/

export const  getAdminProudcts = (dispatch:Dispatch,page:number,productArr:ProductObj[])=>()=>{
  
    dispatch({type:ADMIN_GET_PRODUCT_LOADING})
    try {
        axios.get(`http://localhost:8080/products?_page=${page}&_limit=12`)
        .then(req=>{
      
          dispatch({type:ADMIN_GET_PRODUCT_SUCCESS,payload:req.data,totalResult:req.headers['x-total-count']})
      })
   } catch (err) {
        dispatch({type:ADMIN_GET_PRODUCT_FAILURE})
   }
}


export const deleteAdminProduct = (id:number)=>{
       return  axios.delete(`http://localhost:8080/products/${id}`)
}


export const adminLogin = (dispatch:Dispatch)=>()=>{
    dispatch({type:ADMIN_AUTH_LOGIN_SUCCESS})
}

export const adminLogout = (dispatch:Dispatch)=>()=>{
    dispatch({type:ADMIN_AUTH_LOGOUT_SUCCESS})
}
