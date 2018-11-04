import React, {Component} from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  onSelect(filter, e) {
    e.preventDefault();
    this.props.onSelect(filter);
  }

  render() {
    const {filter, selected} = this.props;
    return (
      <label className={selected ? "selected" : "unselected"}
             onClick={this.onSelect.bind(this, filter)}>{filter}</label>
    );
  }
}

export default Filter;

