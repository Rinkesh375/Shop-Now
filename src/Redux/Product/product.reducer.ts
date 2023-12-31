import { ProductDatatype } from "../../type";

import { AppAction } from "./product.action";
import * as types from "./product.type";

export interface IAppState {
  loading: boolean;
  error: boolean;
  data: ProductDatatype[];
}

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const reducer = (
  oldState: IAppState = initialState,
  action: AppAction
): IAppState => {
  const { type } = action;

  switch (type) {
    case types.PRODUCT_REQUEST:
      return { ...oldState, loading: true };
    case types.PRODUCT_ERROR:
      return { ...oldState, loading: false, error: true };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...oldState,
        loading: false,
        data: [...oldState.data, ...action.payload],
      };
    case types.SORT_PRODUCTS_SUCCESS:
      return {
        ...oldState,
        loading: false,
        data: action.payload,
      };
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...oldState,
        loading: false,
        data: oldState.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return oldState;
  }
};

export { reducer };
