import { ProductObj, ProductState } from "src/constraints/types"
import { ADMIN_AUTH_FAILURE, ADMIN_GET_PRODUCT_LOADING, ADMIN_GET_PRODUCT_SUCCESS } from "../actionTypes";


/*
        rating:number;
        review:string;
        image:string;
        brand:string;
        title:string;
        size:string;
        discountPrice:number;
        price:number;
        discountPercentage:string;
        id:string;
        isNew:boolean;
        assured:boolean;
        gender:string
*/
interface ActionType {
    type: string,
    payload: ProductObj[]
    totalResult:number
}
const intitalState: ProductState = {
    productArr: [],
    isError: false,
    isLoading: false,
    totalResult:0
    

}

export const adminProductReducer = (state: ProductState = intitalState, { type, payload ,totalResult}: ActionType): ProductState => {

    switch (type) {
        case ADMIN_GET_PRODUCT_LOADING: return { ...state, isLoading: true, isError: false };
        case ADMIN_AUTH_FAILURE: return { ...state, isLoading: false, isError: true };
        case ADMIN_GET_PRODUCT_SUCCESS: return { ...state, isLoading: false, isError: false, productArr: payload,totalResult:+totalResult };
        default: return { ...state };
    }
}