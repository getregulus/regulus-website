/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // Redirect old URLs to new canonical URLs
  createRedirect({
    fromPath: `/docs/transaction-monitoring/feeding-transactions`,
    toPath: `/docs/core-features/transaction-monitoring`,
    isPermanent: true,
  })

  createRedirect({
    fromPath: `/docs/transaction-monitoring/audit-logs`,
    toPath: `/docs/core-features/audit-logs`,
    isPermanent: true,
  })
}
