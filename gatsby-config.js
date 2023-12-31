/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Lightning Bundle`,
    description: 'Clear, simple websites for non-profits and small businesses.',
    author: 'Phifer Web Solutions',
    siteUrl: `https://lightningbundle.com`,
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
        projectId: 'j826c1ve',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'j826c1ve',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        trackPageViews: true,
        events: true,
        eventsGlobal: 'sa_event',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://lightningbundle.com',
        sitemap: 'https://lightningbundle.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*' }],
      },
    },
  ],
}
