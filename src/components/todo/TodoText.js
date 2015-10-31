import React from 'react'

const Text = ({children, completed, onClick}) => (
    <span
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer'}}>

      {children}

    </span>
)

Text.propTypes = {
  children: React.PropTypes.any.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Text