import React, { Component } from 'react'
import { json } from 'react-router-dom';

class ClassCompo extends Component {
  render() {
    console.log(this.props);
    const {myName,company,employeeObj} = this.props;
    return (
        <>
     <h2>This is Class Communication Components</h2>
     {/* <h2> My Name : {this.props.myName}</h2> */}
     <h2> My Name : {myName}</h2>
     <h3>Company Name : {company}</h3>
     Employee Details :{JSON.stringify(employeeObj)}
     </>
    )
  }
}

export default  ClassCompo;
