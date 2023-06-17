
export interface ProductDatatype {
  type:string;
  category: string;
  ratings: number;
  reviews: string;
  image: string;
  brand: string;
  title: string;
  size: string;
  discountprice: number;
  price: number;
  discountPercentage: string;
  id: number;
  isNew: boolean;
  assured: boolean;
  gender: string;
} 

export interface ProductState {
  isLoading: boolean;
  isError: boolean;
  data: ProductDatatype[];
}

export interface ProductActions {
  type: string;
  payload?: ProductState;
}

export enum ActionType {
  FetchProductRequest = "FETCH_PRODUCT_REQUEST",
  FetchProductSuccess = "FETCH_PRODUCT_SUCCESS",
  FetchProductFailure = "FETCH_PRODUCT_FAILURE",
}

export interface FetchProductRequestAction {
  type: ActionType.FetchProductRequest;
}

export interface FetchProductSuccessAction {
  type: ActionType.FetchProductSuccess;
  payload: ProductDatatype[];
}

export interface FetchProductFailureAction {
  type: ActionType.FetchProductFailure;
}

export type ProductAction =
  | FetchProductRequestAction
  | FetchProductSuccessAction
  | FetchProductFailureAction;


export type DispatchType = (args: ProductActions) => ProductActions;