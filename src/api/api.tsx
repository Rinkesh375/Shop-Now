import axios from "axios"
import { NewProductType } from "../Pages/AdminAddProducts"
import { ProductObj } from "../constraints/types"

export const userLoginAuth = (userInfo:string)=>{
        return axios.get(`https://shop-now-api-pz3r.onrender.com/admins/${userInfo}`)

}
export const addNewProductAdmin  = (newProduct:NewProductType)=>{
        return axios.post(`https://shop-now-api-pz3r.onrender.com/data`,newProduct)
}


export const getSingleEditProduct  = (id:any)=>{
        return axios.get(`https://shop-now-api-pz3r.onrender.com/data/${id}`)
}

export const editAdminProduct = (id:any,product:ProductObj)=>{
        return axios.patch(`https://shop-now-api-pz3r.onrender.com/data/${id}`,product)
}
