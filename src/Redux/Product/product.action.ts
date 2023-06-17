import { AppDispatch } from "../store";
import { getProductsAPI, updateProuctAPI } from "./prooduct.api";
import * as types from "./product.type";
import { ProductDatatype } from "../../type";

export interface IProductRequest {
  type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
  type: typeof types.PRODUCT_ERROR;
}

export interface IGetProductSuccess {
  type: typeof types.GET_PRODUCTS_SUCCESS;
  payload: ProductDatatype[];
}

export interface IUpdateProductSuccess {
  type: typeof types.UPDATE_PRODUCT_SUCCESS;
  payload: ProductDatatype;
}

export type AppAction =
  | IProductRequest
  | IProductError
  | IGetProductSuccess
  | IUpdateProductSuccess;

//action creators
const productRequest = (): IProductRequest => {
  return { type: types.PRODUCT_REQUEST };
};

const productError = (): IProductError => {
  return { type: types.PRODUCT_ERROR };
};

const getProductSuccess = (data: ProductDatatype[]): IGetProductSuccess => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload: data };
};

// const updateProductSuccess = (
//   payload: ProductDatatype
// ): IUpdateProductSuccess => {
//   return { type: types.UPDATE_PRODUCT_SUCCESS, payload };
// };

export const getProducts =
  (getProductsParam?: {
    params: { category: string[]; gender?: string[]; order?: string };
  }): any =>
  async (dispatch: AppDispatch) => {
    dispatch(productRequest());
    try {
      let data = await getProductsAPI(getProductsParam);
      if (data) {
        dispatch(getProductSuccess(data));
      }
    } catch (e) {
      dispatch(productError());
    }
  };

// export const updateProduct =
//   (id: number, payload: { title: string; price: number }): any =>
//   async (dispatch: AppDispatch) => {
//     dispatch(productRequest());
//     try {
//       let data = await updateProuctAPI(id, payload);
//       if (data) {
//         dispatch(updateProductSuccess(data));
//       }
//     } catch (e) {
//       dispatch(productError());
//     }
//   };
