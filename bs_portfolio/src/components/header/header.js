import React from 'react'
import { Link } from 'gatsby'
import LogoImage from '../../images/logoBrahim.svg'

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
