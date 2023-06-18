import axios from "axios"
// import { NewProductType } from "src/Pages/AdminAddProducts"
import { NewProductType } from "../Pages/AdminAddProducts"
// import { ProductObj } from "src/constraints/types"
import { ProductObj } from "../constraints/types"
import { AdminInput } from "../types/typeForAdmin"
// import { AdminInput } from "src/types/typeForAdmin"
export const userLoginAuth = (userInfo:string)=>{
        return axios.get(`http://localhost:8080/admins/${userInfo}`)

}
export const addNewProductAdmin  = (newProduct:NewProductType)=>{
        return axios.post(`http://localhost:8080/products`,newProduct)
}


export const getSingleEditProduct  = (id:any)=>{
        return axios.get(`http://localhost:8080/products/${id}`)
}

export const editAdminProduct = (id:any,product:ProductObj)=>{
        return axios.patch(`http://localhost:8080/products/${id}`,product)
}
