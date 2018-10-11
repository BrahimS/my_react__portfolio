import React from 'react'
import { Link } from 'gatsby'
import LogoImage from '../../images/logoBrahim.svg'

const logoStyle = {
  display: 'block',
  width: '124px',
  height: '87px',
  padding: '80px 0 80px 80px'
}

const Header = () => (
  <header>
    <div>
        <Link
          to="/">
            <img src={LogoImage} style={logoStyle} alt="logo"/>
        </Link>
    </div>
  </header>
)

export default Header
