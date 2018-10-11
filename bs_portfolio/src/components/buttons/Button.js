import React from 'react'

const btnStyle = {
  width: '180px',
  height: '50px',
  borderRadius: '25px',
  background: ' #22D57B',
  color:'#fff',
  fontSize: '14px'
}

const Button = (props) => {
  return (
    <button style={btnStyle}>{props.text}</button>
  )
}
export default Button