import * as types from './../constants/actionTypes'

export function setHoverState(isHovering) {
  return { type: types.SET_HOVER_STATE, isHovering}
}

export function setHoverColor(color) {
  return { type: types.SET_HOVER_COLOR, color}
}