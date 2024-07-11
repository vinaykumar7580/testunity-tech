import * as types from "./actionType"

const initialState={
    requests:[]
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case types.ADD_REQUEST:
            return{
                ...state,
                requests:[...state.requests, action.payload]
            }
        default:
            return state;
    }
}
export default reducer