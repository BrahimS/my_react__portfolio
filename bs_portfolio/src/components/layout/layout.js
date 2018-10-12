import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header/header'
import Nav from '../menu/TheDrawer'
import Footer from '../footer/Footer'
import profilImg from '../../images/profil@2x.png'
import './layout.sass'

const profilStyle = {
	position: 'absolute',
	bottom: '0',
	right: '20%',
	width: '500px',
	height: 'auto',
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
        <div className="bs_app">
					<section className="bs_right">
					<section className="bs_left">
							{ children }			
					</section>
						<Nav></Nav>
						<div>
							<img src={ profilImg }
								style={ profilStyle } alt="profil"/>
						</div>
					</section>
         <Footer></Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
