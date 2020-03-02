module.exports = {
  siteMetadata: {
    title: `Výživový poradce a šéfkuchař v jednom`,
    description: `Krabičková dieta. Rozvoz po celé Praze a okolí zdarma. Konzultace s výživovým poradcem. Diagnostika složení těla inbody.`,
    author: `@nutritionprocz`,
    menuLinks: [
      {
        name: "Programy",
        link: "/#programs",
        section: "#programs",
      },
      {
        name: "Jídelníček",
        link: "/#food",
        section: "#food",
      },
      {
        name: "Cena",
        link: "/#calculator",
        section: "#calculator",
      },
      {
        name: "Kariéra",
        link: "/jobs",
        section: null,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MKBGWTL",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
