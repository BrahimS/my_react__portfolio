import React from 'react'

const headlineStyle = {
  opacity: '0.35',
  fontWeight: 'bold',
	textAlign: 'left',
	width: '381px',
	marginTop: '-30px',
	marginBottom: '50px',
	fontFamily: 'Acumin-pro'
}

const HOne = (props) => {
  return (
    <h1 style={headlineStyle}>{props.h_one}</h1>
  )
}
export default HOne
