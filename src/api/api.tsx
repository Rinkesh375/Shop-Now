import axios from "axios"
import { AdminInput } from "src/types/typeForAdmin"
export const userLoginAuth = (userInfo:string)=>{
        return axios.get(`http://localhost:8080/admins/${userInfo}`)

}
// export const adminGetProducts = ()=>{
//         return axios.get(`http://localhost:8080/products`)
// }
