import React, {Component} from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "World"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className = "App" >
        <input type="text" value={this.state.name} onChange={this.handleChange}/>
        <h1>Hello, {this.state.name}!</h1>
      </div>
    );
  }
}

export default App;