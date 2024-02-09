import React from "react";

class LoginRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('email: ' + this.state.value);
    alert('password: + ?');
    event.preventDefault();
  }

  componentDidMount(){
    this.inputRef.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input type="text" name="email" value={this.state.value} onChange={this.handleChange} ref={this.inputRef}/>
        </label>
        <label>
          password:
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }

}

export default LoginRef;
