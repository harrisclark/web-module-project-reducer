export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEMORY_SAVE = "MEMORY_SAVE";
export const MEMORY_OPERATE = "MEMORY_OPERATE";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    //console.log(number)
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const memorySave = (total) => {
    return({type:MEMORY_SAVE, payload:total})
}

export const memoryOperate = () => {
    return({type:MEMORY_OPERATE})
}

export const memoryClear = () => {
    return({type:MEMORY_CLEAR})
}