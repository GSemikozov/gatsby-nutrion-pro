const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const config = require("./gatsby-config")
/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage, createRedirect },
}) => {
  const isEnvDevelopment = process.env.NODE_ENV === "development"
  const originalPath = page.path

  // Delete the original page (since we are gonna create localized versions of it) and add a
  // redirect header
  await deletePage(page)

  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async lang => {
      // const localizedPath = `/${lang}${page.path}`
      const localizedPath =
        lang === "cz" ? `${page.path}` : `/${lang}${page.path}`

      // create a redirect based on the accept-language header
      // createRedirect({
      //   fromPath: originalPath,
      //   toPath: localizedPath,
      //   Language: lang,
      //   isPermanent: false,
      //   redirectInBrowser: isEnvDevelopment,
      //   statusCode: 301,
      // })

      if (page.path === "/" || page.path.includes("blog")) {
        await createPage({
          ...page,
          // layout: "new.index",
          path: localizedPath,
          context: {
            ...page.context,
            layout: "special",
            originalPath,
            lang,
          },
        })
      } else {
        await createPage({
          ...page,
          path: localizedPath,
          context: {
            ...page.context,
            originalPath,
            lang,
          },
        })
      }
    })
  )

  // Create a fallback redirect if the language is not supported or the
  // Accept-Language header is missing for some reason
  // createRedirect({
  //   fromPath: originalPath,
  //   // toPath: `/${config.siteMetadata.defaultLanguage}${page.path}`,
  //   toPath:
  //     config.siteMetadata.defaultLanguage === "cz"
  //       ? `${page.path}`
  //       : `/${config.siteMetadata.defaultLanguage}${page.path}`,
  //   isPermanent: false,
  //   redirectInBrowser: isEnvDevelopment,
  //   statusCode: 301,
  // })
}

// necessary for blog

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
