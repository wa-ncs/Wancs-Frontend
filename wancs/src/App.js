import React from 'react';
import './App.css';
import Hello from './Components/Hello';
import Button from '@material-ui/core/Button';
import BoardList from './Components/JH_Board/BoardList';
import AddBoard from './Components/JH_Board/AddBoard';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Hello name="sbim" />
      <BoardList />
      <AddBoard />
    </div>
  );
}

export default App;
