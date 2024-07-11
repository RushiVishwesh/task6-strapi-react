import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    axios.get('http://34.224.27.106:1337/api/strapis')
      .then(response => {
        if (response.data && response.data.data && response.data.data.length > 0) {
          setContentData(response.data.data[0].attributes);
        }
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {contentData && (
          <div>
            <h2>VISHWESH RUSHI</h2>
            <p>{contentData.vishwesh}</p>
          </div>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
