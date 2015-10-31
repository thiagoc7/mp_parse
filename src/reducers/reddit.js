import * as types from './../constants/actionTypes'

export function selectedReddit(state = 'reactjs', action) {
  switch (action.type) {
    case types.SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case types.INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case types.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function postsByReddit(state = { }, action) {
  switch (action.type) {
    case types.INVALIDATE_REDDIT:
    case types.RECEIVE_POSTS:
    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}