module.exports = {
  siteMetadata: {
    title: `Speciální krabičková dieta. Výživový poradce a šéfkuchař v jednom`,
    description: `Krabičková dieta. Rozvoz po celé Praze zdarma. Konzultace s výživovým poradcem. Diagnostika složení těla inbody.`,
    author: `@nutritionprocz`,
    siteUrl: "https://nutritionpro.cz",
    supportedLanguages: ["cz", "en"],
    defaultLanguage: "cz",
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
      {
        name: "Pro firmy",
        link: "/program-for-companies",
        section: null,
      },
    ],
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     enableIdentityWidget: true,
    //     publicPath: `cms-admin`,
    //     // htmlTitle: `Content Manager`,
    //     // htmlFavicon: `path/to/favicon`,
    //     // includeRobots: false,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-local-search",
    //   options: {
    //     name: "blog",
    //     engine: "flexsearch",
    //     engineOptions: {
    //       encode: "icase",
    //       tokenize: "forward",
    //       async: false,
    //     },
    //     query: `
    //       {
    //         allMdx {
    //           nodes {
    //             id
    //             fields { slug }
    //             excerpt
    //             rawBody
    //             frontmatter {
    //               title
    //               description
    //               date(formatString: "MMMM DD, YYYY")
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     ref: "id",
    //     index: ["title", "rawBody"],
    //     store: ["id", "slug", "date", "title", "excerpt", "description"],
    //     normalizer: ({ data }) =>
    //       data.allMdx.nodes.map(node => ({
    //         id: node.id,
    //         slug: node.fields.slug,
    //         rawBody: node.rawBody,
    //         excerpt: node.excerpt,
    //         title: node.frontmatter.title,
    //         description: node.frontmatter.description,
    //         date: node.frontmatter.date,
    //       })),
    //   },
    // },
    // `gatsby-plugin-feed-mdx`,
    // `gatsby-plugin-root-import`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-vscode`,
    //       },
    //       {
    //         resolve: `gatsby-remark-copy-linked-files`,
    //       },
    //       {
    //         resolve: `gatsby-remark-smartypants`,
    //       },
    //     ],
    //     plugins: [`gatsby-remark-images`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143944262-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
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
    `gatsby-plugin-anchor-links`,
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
    //     langKeyDefault: "cz",
    //     availableLngs: ["cz", "en"],
    //     fallbackLng: "cz",
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
