import React, { Component, PropTypes } from 'react';

import TodoCheck from './todo/TodoCheck'
import TodoRemove from './todo/TodoRemove'
import TodoText from './todo/TodoText'

export default class Todo extends Component {

  render() {
    return (
        <li>
          {this.props.isEditing ? this.renderEdit()  : this.renderTodo()}
        </li>
    );
  }

  renderTodo() {
    return (
        <div>
          <TodoCheck isChecked={this.props.completed} onClick={this.props.onClick}/>
          <TodoText completed={this.props.completed} onClick={() => this.props.onToggleEdit(true)}>{this.props.text}</TodoText>
          <TodoRemove onClick={this.props.onRemove}/>
        </div>
    )
  }

  renderEdit() {
    return (
        <div>
          <input style={{margin: 5}} type="text" ref="input" defaultValue={this.props.text}/>
          <button onClick={() => {
            this.props.onEdit(this.refs.input.value)
          }}>edit</button>
        </div>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
