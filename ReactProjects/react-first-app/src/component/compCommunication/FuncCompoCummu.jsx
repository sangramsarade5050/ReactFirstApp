import React from 'react'

const FuncCompoCummu = (props) => {
  const {myName,compony,employeeObj} = props //es6 syntax
  // myName ="Sangram" ;// not Allowed becs props are read only  in nature
  return (
    <>
      <h1> Function Component Communication </h1>
      <h3> My Name :{myName} </h3>
        <h3> Company Name :{compony}</h3>
        Employee Details:{JSON.stringify(employeeObj)}
    </>
  )
}

export default FuncCompoCummu ;
