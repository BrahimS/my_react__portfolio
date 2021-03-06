import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header/header'
import Nav from '../menu/TheDrawer'
import Footer from '../footer/Footer'
import './layout.sass'


const SinglePostLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleSinglePostQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="single_post">
					<section className="bs_left">
							{ children }			
					</section>
						<Nav></Nav>
         <Footer></Footer>
        </div>
      </>
    )}
  />
)

SinglePostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SinglePostLayout
