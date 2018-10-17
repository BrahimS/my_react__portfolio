import React from 'react'
import { Link } from 'gatsby'
import ArticlesLayout from '../components/layout/ArticlesLayout'
import Button from '../components/buttons/Button'
import HOne from '../components/headlines/HeadLines'


const BlogPage = ({ data }) => (
	<ArticlesLayout>

			<section className="content">
				<HOne h_one="Articles"></HOne>
				<section>
					{data.allMarkdownRemark.edges.map(post => (
						<article className="post_card" key={post.node.id}>
							<img className={post.node.frontmatter.imgbg} alt="" />
							<div className="post_content">
								<span className="post_date">{post.node.frontmatter.date}</span>
								<h2 className="post_headline">{post.node.frontmatter.title}</h2>
								<p className="post_para">{post.node.excerpt}</p>
								<Link className="post_link" to={post.node.frontmatter.path}>Read this</Link>
							</div>
						</article>
					))}
				</section>
			</section>

    	
	</ArticlesLayout>
)

export const pageQuey = graphql`
	query BlogIndeyQuery {
		allMarkdownRemark{
			edges{
				node{
					id
					frontmatter{
						title
						date
						author 
						category
						path
						imgbg
					}
					excerpt
				}
			}
		}
	}
`

export default BlogPage
