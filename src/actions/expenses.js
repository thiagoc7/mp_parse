import Parse from 'parse'

import * as types from './../constants/actionTypes'

// fetch
export function fetchExpenses() {
  let Expenses = Parse.Object.extend('expenses');
  let query = new Parse.Query(Expenses);

  return dispatch => {
    query.descending('createdAt').find({
      success: (results) => {
        dispatch(retrieveExpensesData(results));
      }
    });
  };
}

function retrieveExpensesData(result) {
  return {
    type: types.RETRIEVE_EXPENSES,
    data: result.map(data => {
      return {
        id: data.id,
        ...data.attributes
      }
    })
  };
}


// add
export function addExpense(date) {
  let Expense = Parse.Object.extend('expenses');
  let data = new Expense();

  return dispatch => {
    dispatch(isSavingExpense())

    data.save({
      date: date,
      amount: 100
    }).then(data => {
      dispatch(postExpense({
        id: data.id,
        ...data.attributes
      }))
    })
  }
}

function postExpense(expense) {
  return { type: types.ADD_EXPENSE, expense };
}

function isSavingExpense() {
  return { type: types.IS_SAVING_EXPENSE };
}


// remove
export function deleteExpense(expense) {
  let Expense = Parse.Object.extend('expenses');
  let data = new Expense();
  data.set('id', expense.id)

  return dispatch => {
    data.destroy().then(data => dispatch(removeExpense(expense)))
  }
}

function removeExpense(expense) {
  return { type: types.REMOVE_EXPENSE, expense };
}