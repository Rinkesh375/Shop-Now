import { ProductObj, ProductState } from "src/constraints/types"
import { ADMIN_AUTH_FAILURE, ADMIN_AUTH_SUCCESS, ADMIN_GET_PRODUCT_LOADING, ADMIN_GET_PRODUCT_SUCCESS } from "../actionTypes";


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
}
const intitalState: ProductState = {
    productArr: [],
    isError: false,
    isLoading: false

}

export const adminProductReducer = (state: ProductState = intitalState, { type, payload }: ActionType): ProductState => {

    switch (type) {
        case ADMIN_GET_PRODUCT_LOADING: return { ...state, isLoading: true, isError: false };
        case ADMIN_AUTH_FAILURE: return { ...state, isLoading: false, isError: true };
        case ADMIN_GET_PRODUCT_SUCCESS: return { ...state, isLoading: false, isError: false, productArr: payload };
        default: return { ...state };
    }
}