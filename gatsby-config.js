module.exports = {
  siteMetadata: {
    title: "Fatboy Hamburgers",
    author: "Ossiel Romero",
    description: "Hamburguesas, Sandwiches, Tortas, Tostadas, Hotdogs, Snacks- Porfirio Diaz 308 Entre Aldama y Jimenez Col. Centro, Rioverde, S.L.P."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
