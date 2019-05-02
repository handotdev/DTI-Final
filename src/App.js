import React, { Component } from 'react';
import fire from './config/fire';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './login';
import Home from './home';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">

          {this.state.user ? (<Home />) : (<Login/>)}

        </div>
      </Router>
    );
  }
}

export default App;
