import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import { Link } from 'react-router'

@connect((state) => ({}))
export default class Navbar extends Component {
  render() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'}}>
          <h1 onClick={() => this.props.dispatch(pushState(null, '/'))}>Mp Parse</h1>
          <Link to="/hover">Hover</Link>
          <h4 onClick={() => this.props.dispatch(pushState(null, '/reddit'))} >Reddit</h4>
        </div>
    )
  }
}