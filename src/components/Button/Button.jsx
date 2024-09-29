import React from 'react'

export const Button = (props) => {

  const {click, value} = props;

  return (
    <button onClick={click}>
      { value }
    </button>
  )
}
