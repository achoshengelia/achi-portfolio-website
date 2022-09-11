const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Achi Shengelia`,
    description: `A portfolio website of Achi Shengelia, a frontend developer.`,
    twitterUsername: `@shengelia_achi`,
    keywords: `Developer, Frontend Developer, React.js, TypeScript, JavaScript, Next.js, Gatsby.js`,
    author: `Achi Shengelia`,
    siteUrl: `https://www.achishengelia.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        root: path.join(__dirname, `src`),
        resolveModules: [path.join(__dirname, `libs`)],
        components: path.join(__dirname, `src`, `components`),
        constants: path.join(__dirname, `src`, `constants`),
        assets: path.join(__dirname, `src`, `assets`),
        hooks: path.join(__dirname, `src`, `hooks`)
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
        path: `${__dirname}/src/assets/media`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          quality: 1,
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
