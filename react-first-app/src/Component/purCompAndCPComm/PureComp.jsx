import React, { Component } from 'react'
import { PureComponent } from 'react';
import { Button } from 'react-bootstrap';

//  class PureComp extends Component {
    class PureComp extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    incrementCount = () =>{
        this.setState({count:this.state.count+1})
    }

  render() {
    console.log('Inside Render')
    return (
      <>
        <h2>Pure Component</h2>
        <h4>count: {this.state.count} - <button type="button"  onClick={this.incrementCount}>+</button></h4>
      </>
    )
  }

//   shouldComponentUpdate()
//   {
//       console.log("Inside shouldComponentUpdate");
//       return true;
//   }

  getSnapshotBeforeUpdate()
  {
      console.log("Inside getSnapshotBeforeUpdate");
      return null;
  }

  get componentDidUpdate()
  {
      console.log("Inside componentDidUpdate");
      return null;
  }

}

export default PureComp
