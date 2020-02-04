import React from 'react';
import './App.css';
import Hello from './Components/Hello';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Hello name="sbim" />
    </div>
  );
}

export default App;
