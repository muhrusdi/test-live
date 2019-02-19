const proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: 'Modana',
    description: 'Free yourself and be more productive',
    author: '@modana',
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:8090",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacy`,
        path: `${__dirname}/src/data/privacy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacyId`,
        path: `${__dirname}/src/data/privacyId`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `helpCenter`,
        path: `${__dirname}/src/data/helpCenter`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `helpCenterId`,
        path: `${__dirname}/src/data/helpCenterId`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lang`,
        path: `${__dirname}/src/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'modana',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-modana.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
            {
                // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
                name: 'en',
                // A function for filtering nodes. () => true by default
                filterNodes: node => {
                  if (node.internal.type === 'MarkdownRemark') {
                    return node.frontmatter.lang === 'en'
                  }
                },
                // Add to index custom entries, that are not actually extracted from gatsby nodes
                // customEntries: [{ title: 'Pictures', content: 'awesome pictures', slug: '/pictures', excerpt: '' }],
            },
        ],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
            { name: 'title', store: true, attributes: { boost: 20 } },
            { name: 'slug', store: true },
            { name: 'content', store: true, attributes: { boost: 20 } },
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
            // For any node of type MarkdownRemark, list how to resolve the fields' values
            MarkdownRemark: {
                title: node => {
                  return node.frontmatter.title
                },
                content: node => node.rawMarkdownBody,
                slug: node => node.fields.slug,
            },
        },
        //custom index file name, default is search_index.json
        filename: 'search_index.json',
      },
    },
  ],
}
