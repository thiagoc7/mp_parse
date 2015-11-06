import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { addExpense, fetchExpenses, deleteExpense } from './../actions/expenses'

import ExpenseForm from './../components/expenses/ExpenseForm'
import ExpenseList from './../components/expenses/ExpenseList'

@connect((state) => {
  return { expenses: state.expenses};
})
export default class Expenses extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchExpenses())
  }

  render() {
    const { dispatch, expenses } = this.props

    return (
        <div className="row">
          <ExpenseForm
              isSaving={expenses.isSaving}
              onCreate={expense => dispatch(addExpense(expense))} />

          <ExpenseList
              expenses={expenses.items}
              isFetching={expenses.isFetching}
              onDelete={expense => dispatch(deleteExpense(expense))} />
        </div>
    )
  }
}