import * as types from './../constants/actionTypes'

export function expenses(state = {
  isFetching: true,
  isSaving: false,
  items: []
}, action) {

  switch (action.type) {

    case types.RETRIEVE_EXPENSES:
      return {
        ...state,
        isFetching: false,
        items: action.data
      }

    case types.ADD_EXPENSE:
      return {
        ...state,
        isSaving: false,
        items: [
          action.expense,
          ...state.items
        ]
      }

    case types.REMOVE_EXPENSE:
      const index = state.items.findIndex(data => data.id === action.expense.id)
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      };

    case types.IS_SAVING_EXPENSE:
      return {
        ...state,
        isSaving: true
      }

    default:
      return state

  }
}