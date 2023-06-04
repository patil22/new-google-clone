import React from 'react'
export const initialState ={
    term:null,
};
export const actiontypes = {
    SET_SEARCH_TERM:"SER_SEARCH_TERM",
};



const Reducer = (state,action) => {
    console.log(action)
 
    switch(action.type){
        case  actiontypes.SET_SEARCH_TERM:
            return {
                ...state,
                term:action.term,
            };
            default:
                return state;
    }
 

};

export default Reducer