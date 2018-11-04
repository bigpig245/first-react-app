import React, {Component} from "react";
import Filter from "./Filter";

class Footer extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const {taskList, filterList, selectedFilter} = this.props;
    const totalTasks = taskList.length;
    const activeTasks = taskList.filter(task => task.status === "ACTIVE").length;
    const completedTasks = taskList.filter(task => task.status === "COMPLETED").length;
    return (
      <div>
        <div className="filter">
          {filterList.map(filter => (
            <Filter key={filter} filter={filter} onSelect={this.props.onFilter} selected={filter === selectedFilter}/>
          ))}
        </div>
        <div className="footer">{totalTasks} task(s), {activeTasks} active tasks(s), {completedTasks} completed
          task(s).
        </div>
      </div>
    );
  }
}

export default Footer;