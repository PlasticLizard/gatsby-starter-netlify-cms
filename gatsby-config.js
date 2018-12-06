module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter For You',
    description: 'This repository contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url: "https://api.graphcms.com/simple/v1/swapi"
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "bizlistings",
        fieldName: "bizListings",
        // Url to query from
        url: "https://pnlmv96mif.execute-api.us-east-1.amazonaws.com/production/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.app/env-vars
          "x-api-key": `rJmPPWlwDv5smZq0hp2aj56jeFRq3KQ1le2EkxR1`//`bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    'gatsby-plugin-purgecss', // must be after other CSS plugins
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
