export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_EDIT_TODO = 'TOGGLE_EDIT_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const SET_HOVER_STATE = 'SET_HOVER_STATE'
export const SET_HOVER_COLOR = 'SET_HOVER_COLOR'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleCompleteTodo(index) {
  return { type: TOGGLE_COMPLETE_TODO, index };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function editTodo(index, text) {
  return { type: EDIT_TODO, index, text };
}

export function toggleEditTodo(index, isEditing) {
  return { type: TOGGLE_EDIT_TODO, index, isEditing };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function setHoverState(isHovering) {
  return { type: SET_HOVER_STATE, isHovering}
}

export function setHoverColor(color) {
  return { type: SET_HOVER_COLOR, color}
}