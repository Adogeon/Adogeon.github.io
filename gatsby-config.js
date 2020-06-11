module.exports = {
  siteMetadata: {
    title: `Anh Dao's Portfolio`,
    description: `Anh Dao's Portfolio`,
    author: `Anh Dao`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `porfolio`,
        path: `${__dirname}/src/portfolio`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
