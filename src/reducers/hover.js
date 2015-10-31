import * as types from './../constants/actionTypes'

export function hover(state = {isHovering: false, color: 'red'}, action) {
  switch (action.type) {

    case types.SET_HOVER_STATE:
      return {
        ...state,
        isHovering: action.isHovering
      };

    case types.SET_HOVER_COLOR:
      return {
        ...state,
        color: action.color
      };

    default:
      return state;
  }
}