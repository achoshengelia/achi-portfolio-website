const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        root: path.join(__dirname, `src`),
        resolveModules: [path.join(__dirname, `libs`)],
        components: path.join(__dirname, `src`, `components`),
        constants: path.join(__dirname, `src`, `constants`),
        assets: path.join(__dirname, `src`, `assets`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          quality: 95,
          backgroundColor: `transparent`
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`
  ]
};
