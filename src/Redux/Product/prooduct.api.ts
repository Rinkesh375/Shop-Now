import axios, { AxiosResponse } from "axios";

import { ProductDatatype } from "../../type";

let URL = "https://shop-now-api-pz3r.onrender .com";

export const getProductsAPI = async (getProductsParam?: {
  // params: { category: string[] };
}) => {
  try {
    let response: AxiosResponse<ProductDatatype[]> = await axios.get(
      `${URL}/data`,
      getProductsParam
    );
    return response.data;
  } catch (e) {
    console.error("getProductsAPI error", e);
  }
};
export const getSortAPI = async (getProductsParam?: {
  // params: { category: string[] };
}) => {
  try {
    let response: AxiosResponse<ProductDatatype[]> = await axios.get(
      `${URL}/data`,
      getProductsParam
    );
    return response.data;
  } catch (e) {
    console.error("getSortAPI error", e);
  }
};

export const updateCartAPI = async (
  // id: number,
  payload: ProductDatatype
) => {
  try {
    let response: AxiosResponse<ProductDatatype> = await axios.post(
      `${URL}/cart`
    );
    return response.data;
  } catch (e) {
    console.error("updateProductsAPI error", e);
  }
};

export const singleuser = async (id: any) => {
  let res = await axios.get(`${URL}/data/${id}`);
  // console.log(res.data);
  return res.data;
};
export const postCartData = async (payload: any) => {
  console.log("paload", payload);
  let res = await axios.post(`${URL}/cart`, payload);

  return res.data;
};
