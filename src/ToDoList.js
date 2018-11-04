import React, {Component} from "react";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      currentId: 0,
      filterList: ["ALL", "ACTIVE", "COMPLETED"],
      selectedFilter: "ALL"
    };
    this.submitTask = this.submitTask.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }


  toggle(task) {
    let {taskList} = this.state;
    taskList.map((item) => {
      return item.id === task.id ? task : item;
    });
    this.setState({
      ...this.state,
      taskList: [
        ...taskList
      ]
    });
  }

  submitTask(name) {
    let {currentId, taskList} = this.state;
    currentId = currentId + 1;
    const newTask = {
      id: currentId,
      name: name,
      status: "ACTIVE"
    };
    this.setState({
      currentId,
      taskList: [
        ...taskList,
        newTask
      ]
    });
  }

  onFilter(filter) {

    this.setState({
      ...this.state,
      selectedFilter: filter
    });
  }

  render() {
    const {taskList, filterList, selectedFilter} = this.state;
    return (
      <div>
        <Input onSubmitTask={this.submitTask}/>
        <List taskList={taskList} onToggle={this.toggle} filter={selectedFilter}/>
        <Footer taskList={taskList} onFilter={this.onFilter} selectedFilter={selectedFilter} filterList={filterList}/>
      </div>
    );
  }
}

export default ToDoList;