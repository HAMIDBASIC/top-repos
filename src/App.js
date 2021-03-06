import React, { Component } from 'react';
import Repos from './component/Repos';
import Login from './component/Login';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  setUser = () =>{
    this.setState({
      loggedIn: true
    })
  }

  render() {
    const {loggedIn} =this.state

    if (!loggedIn){
      return <Login setUser={this.setUser} />
    }

    return (
      <Repos />
    );
  }
  
}

export default App;