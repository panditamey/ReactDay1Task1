import { useState } from "react"
import DisplayComponent from "./DisplayComponent";

const InputComponent = () => {
    const [username,setUsername] = useState('');
    const [userrole,setUserrole] = useState('');
    return <>
        <h1>Input </h1>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} />
        <input type="text" onChange={(e)=>{setUserrole(e.target.value)}} />
        {/* <h1>Username : {username}</h1> */}
        <DisplayComponent name={username} role={userrole}/>
    </>
};

export default InputComponent;