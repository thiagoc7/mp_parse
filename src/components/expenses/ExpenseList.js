import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './ExpenseList.css'

export default class ExpenseList extends Component {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
  };

  render() {
    if (this.props.isFetching) { return <div>Loading...</div> }

    return (
        <ul>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
            {this.props.expenses.map((item, idx) => this.renderItem(item, idx))}
          </ReactCSSTransitionGroup>
        </ul>
    )
  }

  renderItem = (item, idx) => {
    return (
        <li key={item.id}>
          {item.date}
          <span
              style={{marginLeft: 5, cursor: 'pointer'}}
              onClick={() => this.props.onDelete(item)}>&times;
          </span>
        </li>
    )
  }
}