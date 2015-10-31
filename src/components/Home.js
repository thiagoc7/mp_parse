import React, { Component } from 'react';

import { connect } from 'react-redux';
import { VisibilityFilters } from './../constants/actionTypes'
import { addTodo, toggleCompleteTodo, removeTodo, editTodo, toggleEditTodo, setVisibilityFilter } from './../actions/todo';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import Hover from '../components/hover/Hover'

import Reddit from '../components/reddit/Reddit'

@connect((state) => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    hover: state.hover
  };
})
export default class Home extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter, hover } = this.props;
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

          <Hover
              dispatch={dispatch}
              hover={hover}/>

          <div className="row">
            <Reddit />
          </div>
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