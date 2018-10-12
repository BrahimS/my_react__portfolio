import React from 'react'
import { Link } from 'gatsby'

const Nav = (props) => {
	return (
		<nav>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/">Projects</Link>
			</li>
			<li>
				<Link to="/">Clients</Link>
			</li>
			<li>
				<Link to="/page-2">Articles</Link>
			</li>
			<li>
				<Link to="/">Contact</Link>
			</li>
		</ul>
	</nav>
	)
}

export default Nav
