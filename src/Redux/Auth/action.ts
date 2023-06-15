import {  SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actiontype"
import axios from "axios"
export const signupsucces=(token:string)=>({
    type:SIGNUP_SUCCESS,
    payload:token
})
export const signupfailure=()=>({
    type:SIGNUP_FAILURE
})
export const signuprequest=()=>({
    type:SIGNUP_REQUEST
})

interface signupdata{

}

export const signUP=(formdata:signupdata)=>async(dispatch:any)=>{
    try {
        dispatch(signuprequest())
        const res= await axios.post("https://reqres.in/api/register",formdata)
        const token = res.data.token;
    dispatch(signupsucces(token));
        
    } catch (error) {
        dispatch(signupfailure())
    }

}