import * as actionsTypes from './actionsTypes';

const saveresult = (res)=>{
    return{
        type: actionsTypes.STORE_RESULTS,
        result: res
    }
}
export const storeResults=(res)=>{
   
    return dispatch=>{
        setTimeout(()=>{
            dispatch(saveresult(res))
        },2000)
    }
}
export const deleteResults=(resElId)=>{
    return{
        type:actionsTypes.DELETE_RESULTS ,
        resultElId: resElId
    }
}