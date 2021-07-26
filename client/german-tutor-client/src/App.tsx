import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Alert key='Test' variant='primary'>
        This is a primary alert—check it out!
      </Alert>
    </div>
  );
}

export default App;
