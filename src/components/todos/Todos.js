import React, { Component } from 'react';

import { connect } from 'react-redux';
import { VisibilityFilters } from './../../constants/actionTypes'
import { addTodo, toggleCompleteTodo, removeTodo, editTodo, toggleEditTodo, setVisibilityFilter } from './../../actions/todo';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

@connect((state) => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
})
export default class Todos extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
        <div>
          <AddTodo
              onAddClick={text =>
            dispatch(addTodo(text))
          } />
          <TodoList
              todos={visibleTodos}
              onTodoClick={index => dispatch(toggleCompleteTodo(index))}
              onTodoRemove={index => dispatch(removeTodo(index))}
              onTodoEdit={(index, text) => dispatch(editTodo(index, text))}
              onTodoToggleEdit={(index, isEditing) => dispatch(toggleEditTodo(index, isEditing))}
          />
          <Footer
              filter={visibilityFilter}
              onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))
          } />

        </div>
    );
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}