import React, {Component} from "react";

class Input extends Component {

  constructor(props) {
    super(props);
    const {currentTask} = this.props;
    this.state = {
      currentTask: currentTask
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      currentTask: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    const {currentTask} = this.state;
    this.props.onSubmitTask(currentTask);
  }

  render() {
    const {currentTask} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={currentTask} onChange={this.handleChange}></input>
          <input type="submit" onSubmit={this.handleSubmit} value="Add Task"/>
        </form>
      </div>
    );
  }
}

export default Input;