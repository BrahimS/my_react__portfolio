import React from 'react'
import { Link } from 'gatsby'
import SinglePostLayout from '../components/layout/SinglePostLayout'


export default function SinglePost({ data }) {
	const post = data.markdownRemark 
	return (
		<SinglePostLayout>
			<section>
				<Link to="/articles"> Go back</Link>
				<br />
				<article>
					<h1>{post.frontmatter.title}</h1>
					<span>{post.frontmatter.date}</span>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</article>
			</section>
		</SinglePostLayout>
	)
}

export const postQuery = graphql`
	query BlogPostSingle($path: String!){
		markdownRemark(frontmatter: { path: { eq: $path }}){
			html 
			frontmatter{
				path
				title 
				author
				date
				imgbg
			}
		}
	}
`
