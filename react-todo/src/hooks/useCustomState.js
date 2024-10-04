
import React from 'react';
function useCustomState(state){
    const [value, setValue]=useState(state);
    const setValueWithCallback=(newValue)=>{
        setValue(newValue);
        if(typeof newValue==='function'){
            newValue(value);
        }
    }
    return [value, setValueWithCallback];
}