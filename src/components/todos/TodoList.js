import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
        <ul>
          {this.props.todos.map((todo, index) =>
              <Todo {...todo}
                  key={index}
                  onClick={() => this.props.onTodoClick(index)}
                  onRemove={() => this.props.onTodoRemove(index)}
                  onEdit={text => this.props.onTodoEdit(index, text)}
                  onToggleEdit={isEditing => this.props.onTodoToggleEdit(index, isEditing)}
              />
          )}
        </ul>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onTodoToggleEdit: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};