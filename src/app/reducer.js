const btnReducer = (state = {
    value:true,
    lastValues:[]
    },action)=>{
    switch(action.type){
        case "CHANGE":
            state = {
                ...state,
                value:!state.value,
                lastValues:[...state.lastValues,state.value]
            };
            break; 
        case "RESET":
            state = {
                ...state,
                value:true,
                lastValues:[...state.lastValues,state.value]
            };
            break;       
    }
    return state;
};


export default btnReducer;