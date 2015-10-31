import immutable from 'immutable';
import { combineReducers } from 'redux';

import { ADD_TODO, TOGGLE_COMPLETE_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_EDIT_TODO, SET_VISIBILITY_FILTER, SET_HOVER_STATE, SET_HOVER_COLOR, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function todos(state = [], action) {
  switch (action.type) {

    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          isEditing: false
        }
      ];

    case TOGGLE_COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          completed: !state[action.index].completed
        },
        ...state.slice(action.index + 1)
      ];

    case REMOVE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case EDIT_TODO:
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          text: action.text,
          isEditing: false
        },
        ...state.slice(action.index + 1)
      ];

    case TOGGLE_EDIT_TODO:
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

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function hover(state = {isHovering: false, color: 'red'}, action) {
  switch (action.type) {

    case SET_HOVER_STATE:
      return {
        ...state,
        isHovering: action.isHovering
      };

    case SET_HOVER_COLOR:
      return {
        ...state,
        color: action.color
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  hover
});

export default todoApp;