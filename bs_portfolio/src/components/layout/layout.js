import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header/header'
import Nav from '../menu/Nav'
import Footer from '../footer/Footer'
import profilImg from '../../images/profil@2x.png'
import './layout.sass'

const profilStyle = {
	position: 'absolute',
	bottom: '0',
	marginLeft: '12.5%',
	marginTop: '1%',
	display: 'block',
	width: '580px',
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
					<section className="bs_left">
							{ children }			
					</section>
					<section className="bs_right">
						<Nav></Nav>
						<img src={ profilImg }
						style = { profilStyle }
						alt="profil"/>
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
