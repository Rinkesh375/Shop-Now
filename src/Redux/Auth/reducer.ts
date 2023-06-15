import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actiontype";

interface Authstate {
    isAuth: boolean;
    token: string;
    isError: boolean;
    isLoading:boolean
}
const initialstate:Authstate={
    isAuth: false,
    token: '',
    isError: false,
    isLoading:false

}
 
export const reducer=(state=initialstate,action:any)=>{
    switch(action.type){
        case SIGNUP_SUCCESS: return { isAuth: true,
            token:action.payload.token,
            isError: false,
            isLoading: false}
        case SIGNUP_FAILURE :return{isError:true}
        case SIGNUP_REQUEST:return {isLoading:true}

        default :
        return state
    }

}