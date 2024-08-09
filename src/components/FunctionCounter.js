import { useState } from "react";

const FunctionCounter = () =>{

    let [count, setCount] = useState(0);

    const increment = () => {
        setCount( count + 1 );
        console.log(count);
    }

    const decrement = () => {
        setCount( count - 1 );
        console.log(count);
    }
    return <>
    <h1>Count : {count}</h1>
    <button onClick={()=>increment()}>Increment</button>
    <button onClick={()=>decrement()}>Decrement</button>
    </>

}

export default FunctionCounter;