import React, { Component, PropTypes } from 'react';

import Navbar from './Navbar'

export default class Home extends Component {

  static propTypes = {
    children : React.PropTypes.element
  };

  render() {
    return (
        <div>
          <div className="row">
            <Navbar />
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
    )
  }
}