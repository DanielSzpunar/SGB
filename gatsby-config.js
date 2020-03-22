module.exports = {
  siteMetadata: {
    title: 'SilverGoldPill',
    author: 'Daniel Szpunar'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
