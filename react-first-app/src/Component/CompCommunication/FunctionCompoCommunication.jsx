import React from 'react'

const FunctionCompoCommunication = (props) => {
    // const FunctionCompoCommunication = ({myName,company,employeeObj}) => { // this one also allowed
    const {myName,company,employeeObj} = props;
    //myName : "Amol" ; //not allowed
  return (
    <>
    <h2> Function component communication</h2>
    <h2> My Name : {myName}</h2>
     <h3>Company Name : {company}</h3>
     Employee Details :{JSON.stringify(employeeObj)}
    </>
  )
}

export default FunctionCompoCommunication
