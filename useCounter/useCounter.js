import { useState } from "react";


export const useCounter = (initialValue = 10,minValue=0) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value=1) => setCounter((current)=>current + parseInt(value));

    const decrement = (value=1) => {
        if(counter===minValue)return;
        setCounter((current)=>current - parseInt(value));
    }
    const reset = () => setCounter(initialValue);

    return {
        counter,
        increment, 
        decrement,
         reset
    };
}