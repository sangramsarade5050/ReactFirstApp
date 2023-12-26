import { useState } from "react";

const UseStateHook = () =>{
    //const[state Name,function to update state]=useState(Initial value of state) 
    const [name,updateName]= useState('Siddesh')

    const nameChange=()=>{
        updateName ('Bala')
    }
return(
    <>

    <h2> Use state Hook</h2>
    <p> Name is :{name}</p>
    {/* <button variant="dark" onClick={nameChange}> Name Change </button> */}
    <button type="button" class="btn btn-dark" onClick={nameChange}>Name Change</button>
    </>
)
}

export default UseStateHook ;