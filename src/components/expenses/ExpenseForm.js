import React, { Component, PropTypes } from 'react';

export default class ExpenseForm extends Component {

  static propTypes = {
    onCreate: PropTypes.func.isRequired,
    isSaving: PropTypes.bool.isRequired
  };

  onSubmit = (e) => {
    e.preventDefault()
    const input = this.refs.input

    this.props.onCreate(input.value)
    input.value = ""
  }

  render() {
    return (
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <input type='text' ref='input' />
            <button type="submit" disabled={this.props.isSaving}>
              {this.props.isSaving ? "Saving..." : "Add"}
            </button>
          </form>
        </div>
    )
  }
}