import React from "react";

// const JsxComp =()=>{
//     let p=20 ,q=15;
//     return (
//         <div>
//             <h2> Welcome To Jsx Component</h2>
//             <h3> Addition of Two Numbers is : {p+q}</h3>
//             <h4>{ p>30 ?"P is greater than 30" : "P is smaller than 30"}</h4>
//         </div>
//     )
// }

const JsxComp =()=>{
    return (
    React.createElement('div',null,React.createElement('h1',null,'Welcome To HTMl code without jsx '))
   )
}

export default JsxComp;