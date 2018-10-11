import React from 'react'

const headlineStyle = {
  opacity: '0.35',
  fontWeight: 'bold',
  lineHeight: '1.2',
  textAlign: 'left',
  fontSize: '80px'
}

const HOne = (props) => {
  return (
    <h1 style={headlineStyle}>{props.h_one}</h1>
  )
}
export default HOne