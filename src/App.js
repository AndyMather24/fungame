import React, { Component } from 'react';
import './App.css';
import Grid from './components/board'

class App extends Component {
  state = {
    x: true,
    grid: [null, null, null, null, null, null, null, null, null]
  };
  render() {
    console.log('hiiiii');
    return (
      <div className="grid-container">
        {
          this.state.grid.map((stone, index) => <Grid stone={stone} key={index} index={index} handleClick={this.handleClick} />)
        }
        <input type='text' onChange={this.createBoard} />
        <input onClick={this.startGame} type="submit" name="Start" />
      </div>
    );
  }
  handleClick = (index) => {

    const newgrid = [...this.state.grid];
    newgrid[index] = this.state.x ? 'X' : 'O'
    this.setState({
      grid: newgrid,
      x: !this.state.x
    })
  }
  startGame = () => {
    const clearBoard = [null, null, null, null, null, null, null, null, null]
    this.setState({
      grid: clearBoard
    })
  }
  createBoard = (e) => {
    const Arr = [...this.state.grid];
    const gridSize = Array.from({ length: +e.target.value }, () => null);
    this.setState({
      grid: gridSize
    })
  }
}

export default App;
