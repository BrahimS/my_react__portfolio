import React from 'react'
import Layout from '../components/layout/layout'
import Button from '../components/buttons/Button'

const NotFoundPage = () => (
  <Layout>
		<main>
			<section className="content">
				<h1>Oops, the page is not here :(</h1>
				<p>
					Please go back to the home page
				</p>

			</section>
			<Button text="Go back home"> </Button>
		</main>
  </Layout>
)

export default NotFoundPage
