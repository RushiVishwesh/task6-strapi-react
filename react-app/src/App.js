import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
    axios.get('https://ansal-sajan-api.contentecho.in/api/messages')
      .then(response => {
        if (response.data && response.data.data && response.data.data.length > 0) {
          this.setState({ message: response.data.data[0].attributes.text });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.message}</h1>
        </header>
        <p className="App-intro">
          Looks like you're all set!
        </p>
      </div>
    );
  }
}

export default App;
