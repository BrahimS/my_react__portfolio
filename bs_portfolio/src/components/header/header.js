import React from 'react'
import { Link } from 'gatsby'
import LogoImage from '../../images/logoBrahim.svg'

const logoStyle = {
  display: 'block',
  width: '200px',
  height: '87px',
  padding: '80px 0 200px 80px'
}

const Header = () => (
  <header>
    <div className="logo">
        <Link
          to="/">
            <img src={LogoImage} alt="logo"/>
        </Link>
    </div>
  </header>
)

export default Header
