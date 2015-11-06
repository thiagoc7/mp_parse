import React from 'react'

const Remove = ({onClick}) => (
    <span
        style={{margin: 5, cursor: 'pointer'}}
        onClick={onClick}>

      &#x2717;

      </span>
)

Remove.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default Remove