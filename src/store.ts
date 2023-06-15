import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook,  useSelector } from "react-redux";
import { adminProductReducer } from "./redux/AdminProductReducer/adminProductReducer";
const reducer = combineReducers({adminProductReducer})
let middleware = [thunk]
export const store = legacy_createStore(reducer,applyMiddleware(...middleware));
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;