import React, { Component } from 'react'

 class ClassCompo extends Component {
  render() {
    console.log(this.props);
    const {myName,compony,employeeObj} = this.props //es6 syntax 
    return (
      <>
        <h1> Class Comp Communication</h1>
        <h3> My Name :{myName} </h3>
        <h3> Company Name :{compony}</h3>
        Employee Details:{JSON.stringify(employeeObj)}
      </>
    )
  }
}

export default ClassCompo;