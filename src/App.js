import React, { Component } from 'react';
import './App.css';
import Stone from './components/Stone'

class App extends Component {
  state = {
    x:true,
    grid: Array.from({ length: 9 }, () => null)
    //[null,null,null,null,null,null,null,null,null]
  };
  render() {
    return (
      <div className="App">
        <h1>Noughts and Crosses</h1>
        <div className="grid-container">
          {this.state.grid.map((stone,index) => (
            <Stone key={index} stone={stone} index={index} 
            handleClick={this.handleClick}/>
          ))}
        </div>
        <p>Enter size of Grid:</p>
      <input onChange={this.createGrid} type="text" name="gridSize" id=""/>
      <br/>
      <input type="submit" value="clear Board" onClick={this.clearGrid}/>
      </div>
    );
  }
  handleClick=(index)=>{
    const gridFull = this.state.grid.filter(stone => stone === null)
    // below needs to get triggered after last null become x|o
    // if(gridFull.length === 0) alert('Game over')
    const newGrid = [...this.state.grid]
    if(this.state.grid[index] === null) {
         newGrid[index]= this.state.x?"X":"O"
   
    // else{
    //   alert("select an empty stone");
    // }
    this.setState({
      grid: newGrid,
      x: !this.state.x
    })
    }
    else{
      alert("select an empty stone")
    }
  }
  createGrid=(e)=>{
    // console.log(typeof e.target.value) //string
    console.log(e.target.value);
    // if(Number(e.taregt.value) < 9 ){
    //   this.setState({
    //     grid: [null, null, null, null, null, null, null, null, null]
    //   })
    // }
    const newSize = Array.from({ length: +e.target.value }, () => null)
    this.setState({
      grid: newSize
    })
  }
  clearGrid=()=>{
    const clear = Array.from({length: this.state.grid.length},()=>null)
    this.setState({
      grid: clear
    })
  }
}


export default App;
