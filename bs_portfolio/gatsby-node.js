const path = require('path')
exports.createPages = ({boundActionCreators, graphql}) => {
	const { createPage } = boundActionCreators
	const postTemplate = path.resolve('src/templates/single-post.js')
	return graphql(`
		{
			allMarkdownRemark{
				edges{
					node{
						id
						html
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
	`).then(res => {
		if(res.error) {
			return Promise.reject(res.error)
		}
		res.data.allMarkdownRemark.edges.forEach(({node}) => {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate
			})
		})
	})
}

