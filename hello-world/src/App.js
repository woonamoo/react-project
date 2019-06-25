import React from 'react';
import logo from './logo.svg';
import glogo from './image/google-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={glogo} className="App-logo" alt="logo" />
        <p>
          Before choose the subjuct, It is 
        </p>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Google
        </a>
      </header>
    </div>
  );
}

export default App;
