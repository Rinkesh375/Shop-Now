import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as Authreducer} from "./Auth/reducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const rootReducer=combineReducers({Authreducer})
let middleware=[thunk]
export  const store=legacy_createStore(rootReducer,applyMiddleware(...middleware))

export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>


export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;

