import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

render() {
  return (

    <div className="App__Form">
      <div className="FormTitle">
        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
      </div>

    <Route exact path="/" component={SignUpForm}></Route>
    <Route path="/sign-in" component={SignInForm}></Route>
</div>
)
};
}

export default Login;
