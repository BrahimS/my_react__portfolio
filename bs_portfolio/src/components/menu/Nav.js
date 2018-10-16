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
				<Link to="/projects">Projects</Link>
			</li>
			<li>
				<Link to="/clients">Clients</Link>
			</li>
			<li>
				<Link to="/articles">Articles</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	</nav>
	)
}

export default Nav
