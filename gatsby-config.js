/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Lightning Bundle Template`,
    description: 'A template for productized website builds.',
    author: 'Phifer Web Solutions',
    siteUrl: `https://ericphifer.com/templates/lightning-bundle`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'kanibl7m',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'kanibl7m',
        dataset: 'production',
      },
    },
  ],
}
