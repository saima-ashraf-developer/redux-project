import * as actionTypes from '../actions/actionsTypes';
import {updatedObject} from '../utility';


const initialState ={
    counter: 0

}

const counterReducer = (state= initialState, action)=>{
switch(action.type){
    case(actionTypes.INCREMENT):
        return updatedObject(state,{ counter: state.counter +1});
        
    case(actionTypes.DECREMENT):
    return updatedObject(state,{counter: state.counter - 1});
    
    case(actionTypes.ADD):
    return updatedObject(state,{counter: state.counter +action.val});
    
    
    case(actionTypes.SUBTRACT):
    return updatedObject(state,{counter: state.counter - action.val});
}
    return state
}

export default counterReducer;