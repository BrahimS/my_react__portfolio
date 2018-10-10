module.exports = {
  siteMetadata: {
    title: 'Brahim Sourny Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'brahim sourny portfolio',
        short_name: 'bs-portfolio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#D1BD15',
        display: 'minimal-ui',
        icon: 'src/images/logoBrahim.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [],
        precision: 8,
      },
    },
  ],
}
