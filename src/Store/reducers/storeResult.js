import * as actionTypes from '../actions/actionsTypes';
import {updatedObject} from '../utility';

    const initialState ={
        storeResults: []
    }

const storeReducer = (state= initialState, action)=>{
    switch(action.type){

        case(actionTypes.STORE_RESULTS):
        
        return updatedObject(state,{storeResults: state.storeResults.concat({id: new Date(),value:action.result})});
            
        case(actionTypes.DELETE_RESULTS):
            const newArray= state.storeResults.filter(result=> result.id !== action.resultElId)
        return updatedObject(state,{storeResults: newArray});
    }
    return state
}

export default storeReducer;