import { Component } from 'react';
import './App.css';
import ToDoList from "./components/ToDoLIst"

class App extends Component{
  render(){
    return (
      <div className="App">
        <ToDoList />
      </div>
    )
  }
}

export default App
