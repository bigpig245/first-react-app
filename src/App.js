import React, {Component} from "react";
import "./App.css";
import ToDoList from "./ToDoList";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>My To Do List</h2>
        <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;