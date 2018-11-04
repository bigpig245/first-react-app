import React, {Component} from "react";

class List extends Component {

  constructor(props) {
    super(props);
  }

  toggle(task, e) {
    task.status = task.status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
    this.props.onToggle({
      ...task
    })

  }

  render() {
    const {taskList, filter} = this.props;
    const filterTaskList = taskList.filter(task => filter === "ALL" || filter === task.status);
    return (
      <div className="list">
        {
          filterTaskList.map(task => (
            <div key={task.id}>
              <label className={task.status === "COMPLETED" ? "completed-task" : "active-task"}
                     onClick={this.toggle.bind(this, task)}>{task.name}</label>
            </div>
          ))
        }
      </div>
    );
  }
}

export default List;