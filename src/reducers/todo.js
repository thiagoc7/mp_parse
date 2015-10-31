import * as types from './../constants/actionTypes'

const { SHOW_ALL } = types.VisibilityFilters;

export function todos(state = [], action) {
  switch (action.type) {

    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          isEditing: false
        }
      ];

    case types.TOGGLE_COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          completed: !state[action.index].completed
        },
        ...state.slice(action.index + 1)
      ];

    case types.REMOVE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case types.EDIT_TODO:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          text: action.text,
          isEditing: false
        },
        ...state.slice(action.index + 1)
      ];

    case types.TOGGLE_EDIT_TODO:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          isEditing: true
        },
        ...state.slice(action.index + 1)
      ];


    default:
      return state;
  }
}

export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {

    case types.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}