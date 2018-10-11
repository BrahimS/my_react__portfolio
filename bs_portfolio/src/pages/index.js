import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Button from '../components/buttons/Button'
import HOne from '../components/headlines/HeadLines'

const IndexPage = () => (
	<Layout>
		<main>
			<section className="content">
				<HOne h_one="Creative Developer"></HOne>
				<p>
					As an independent front-end developer, I have keen eye
					to create and translate the design into responsive pixel 
					perfect using a valid, modular and accessible syntax. 
					I create structured and stylish interactive user interfaces using 
					pleasant and appropriate animation, without neglecting performance 
				</p>
				<p>
					I build web applications using modern technologies such as: 
					HTML5, CSS3, Javascript, Node, React
				</p>
				<p>
					Regularly, I experiment with new technologies on codepen 
					as well as on github.
				</p>
			</section>
    	<Button text="Contact Me"></Button>
		</main>
    	{/* <Link to="/page-2/">Go to page 2</Link> */}
	</Layout>
)

export default IndexPage
