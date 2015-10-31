import * as types from './../constants/actionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text };
}

export function toggleCompleteTodo(index) {
  return { type: types.TOGGLE_COMPLETE_TODO, index };
}

export function removeTodo(index) {
  return { type: types.REMOVE_TODO, index };
}

export function editTodo(index, text) {
  return { type: types.EDIT_TODO, index, text };
}

export function toggleEditTodo(index, isEditing) {
  return { type: types.TOGGLE_EDIT_TODO, index, isEditing };
}

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}