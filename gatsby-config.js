module.exports = {
  siteMetadata: {
    title: `Speciální krabičková dieta. Výživový poradce a šéfkuchař v jednom`,
    description: `Krabičková dieta. Rozvoz po celé Praze a okolí zdarma. Konzultace s výživovým poradcem. Diagnostika složení těla inbody.`,
    author: `@nutritionprocz`,
    siteURL: "https://nutritionpro.cz",
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout/index.js`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/locale`,
    //     name: `locale`,
    //   },
    // },
    // {
    //   resolve: "@wapps/gatsby-plugin-i18next",
    //   options: {
    //     langKeyDefault: "en",
    //     availableLngs: ["en", "cz"],
    //     fallbackLng: "en",
    //     i18nextOptions: {
    //       debug: false,
    //     },
    //   },
    // },
    // { // we can use it instead of gatsby-source-filesystem
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["Gilroy", "Sketch-Block"],
    //       urls: [`${__dirname}/src/fonts/fonts.css`],
    //     },
    //   },
    // },
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
