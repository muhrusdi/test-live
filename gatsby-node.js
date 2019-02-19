const path = require('path')
const slugify = require('slugify')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateBabelConfig = ({ actions, stage }) => {
  actions.setBabelPlugin({
      name: `babel-plugin-import`,
      options: {
        libraryName: 'antd',
        style: "css",
      }
    }
  )
  actions.setBabelPreset({
    name: `@emotion/babel-preset-css-prop`,
    options: {
      sourceMap: process.env.NODE_ENV !== `production`,
      autoLabel: process.env.NODE_ENV !== `production`
    },
  })
}


exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
 }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Containers: path.resolve(__dirname, 'src/containers/'),
        Images: path.resolve(__dirname, 'src/images/'),
        Actions: path.resolve(__dirname, 'src/redux/actions'),
        Services: path.resolve(__dirname, 'src/services'),
        Store: path.resolve(__dirname, 'src/store.js'),
        Reducers: path.resolve(__dirname, 'src/redux/reducers'),
        Types: path.resolve(__dirname, 'src/redux/types')
      }
    }
  })
 }

exports.onCreatePage = async ({ page, actions, graphql }) => {
  const { createPage, deletePage } = actions

    const langs = ["en", "id"]

    Object.keys(langs).map(lang => {
      const localizedPath = lang === 'en'
        ? page.path
        : langs[lang] + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: langs[lang]
        }
      })
    })

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    createPage(page)
  }

  // const langs = ["en", "id"]

  // return new Promise(resolve => {
  //   const oldPage = Object.assign({}, page)
  //   langs.forEach(lang => {
  //     if (
  //       page.path !== '/dev-404-page/' ||
  //       page.path !== '/404/'
  //     ) {
  //       page.path = '/' + lang + page.path
  //       createPage(page)
  //     }
  //   })
  //   if (
  //     page.path !== '/dev-404-page/' ||
  //     page.path !== '/404/'
  //   ) {
  //     deletePage(oldPage)
  //   }
  //   resolve()
  // })
  
}

exports.createPages = ({page, graphql, actions}) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // graphql(`
    //   query {
    //     allMdx(sort: { order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {lang: {eq: "en"}}}) {
    //       edges {
    //         node {
    //           fields {
    //             slug
    //           }
    //           frontmatter {
    //             title
    //             headings
    //           }
    //           headings {
    //             value
    //           }
    //         }
    //       }
    //     }
    //   }
    // `).then(result => {
    //   // result.data.allMarkdownRemark.edges.forEach(({node}) => {
    //   //   / const lang = node.frontmatter.lang === 'id' ? '/id' : ''
    //   //   createPage({
    //   //     path: `${node.fields.slug}`,
    //   //     component: path.resolve('./src/containers/HelpCenterDetail/index.jsx'),
    //   //     context: {
    //   //       slug: `${node.fields.slug}`,
    //   //       dataMenus: result.data.allMarkdownRemark.edges
    //   //     }
    //   //   })
    //   //   resolve()
    //   // })

    //   if (result.errors) {
    //     console.error(result.errors);
    //     reject(result.errors);
    //   }

    //   result.data.allMdx.edges.forEach(({node}) => {
    //       // const lang = node.frontmatter.lang === 'id' ? '/id' : ''
    //     createPage({
    //       path: `${node.fields.slug}`,
    //       component: path.resolve('./src/containers/HelpCenterDetail/index.jsx'),
    //       context: {
    //         slug: `${node.fields.slug}`,
    //         dataMenus: result.data.allMdx.edges
    //       }
    //     })
    //     // resolve()
    //   })

      // result.data.allSitePage.edges.forEach(({node}) => {
      //   if (
      //     node.path !== '/dev-404-page/' ||
      //     node.path !== '/404/' ||
      //     node.path !== '/id/' ||
      //     node.path !== '/en/'
      //   ) {
      //     const _path = `/en${node.path}`
      //     createPage({
      //       path: _path,
      //       component: path.resolve(`node.compnentPath`),
      //       context: {
      //         slug: _path
      //       }
      //     })
      //     res()
      //   }
      // })
    // })

    graphql(`
      query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {lang: {eq: "en"}, type: {eq: "docs"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                lang
                headings
              }
              headings {
                value
                depth
              }
              html
              htmlAst
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `en/${node.fields.slug}`,
          component: path.resolve('./src/containers/HelpCenterDetail/index.jsx'),
          context: {
            slug: `${node.fields.slug}`,
            lang: `${node.frontmatter.lang}`,
            dataMenus: result.data.allMarkdownRemark.edges
          }
        })
        createPage({
          path: `${node.fields.slug}`,
          component: path.resolve('./src/containers/HelpCenterDetail/index.jsx'),
          context: {
            slug: `${node.fields.slug}`,
            lang: `${node.frontmatter.lang}`,
            dataMenus: result.data.allMarkdownRemark.edges
          }
        })
        createPage({
          path: `en/help-center`,
          component: path.resolve('./src/containers/HelpCenter/index.jsx'),
          context: {
            slug: `${node.fields.slug}`,
            lang: `${node.frontmatter.lang}`,
            data: result.data.allMarkdownRemark.edges
          }
        })
        createPage({
          path: `help-center`,
          component: path.resolve('./src/containers/HelpCenter/index.jsx'),
          context: {
            slug: `${node.fields.slug}`,
            lang: `${node.frontmatter.lang}`,
            data: result.data.allMarkdownRemark.edges
          }
        })
        // resolve()
      })
    })

    graphql(`
      query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {lang: {eq: "id"}, type: {eq: "docs"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                lang
                headings
              }
              headings {
                value
                depth
              }
              html
              htmlAst
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `id/${node.fields.slug}`,
          component: path.resolve('./src/containers/HelpCenterDetail/index.jsx'),
          context: {
            slug: `${node.fields.slug}`,
            lang: `${node.frontmatter.lang}`,
            dataMenus: result.data.allMarkdownRemark.edges
          }
        })

        createPage({
          path: `id/help-center`,
          component: path.resolve('./src/containers/HelpCenter/index.jsx'),
          context: {
            slug: `${node.fields.slug}`,
            lang: `${node.frontmatter.lang}`,
            data: result.data.allMarkdownRemark.edges
          }
        })
        // resolve()
      })
    })

    graphql(`
      query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {lang: {eq: "id"}, type: {eq: "static"}}}) {
          edges {
            node {
              fields {
                slugStatic  
              }
              frontmatter {
                title
                lang
                headings
              }
              html
              htmlAst
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        if (node.fields.slugStatic !== '/privacy-policy/') {
          createPage({
            path: `id/term-of-service${node.fields.slugStatic}`,
            component: path.resolve('./src/containers/PrivacyCenterDetail/index.jsx'),
            context: {
              slug: `${node.fields.slugStatic}`,
              lang: `${node.frontmatter.lang}`,
              dataMenus: result.data.allMarkdownRemark.edges
            }
          })
        } else {
          createPage({
            path: `id${node.fields.slugStatic}`,
            component: path.resolve('./src/containers/PrivacyCenterDetail/index.jsx'),
            context: {
              slug: `${node.fields.slugStatic}`,
              lang: `${node.frontmatter.lang}`,
              dataMenus: result.data.allMarkdownRemark.edges
            }
          })
        }

      })
    })

    graphql(`
      query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {lang: {eq: "en"}, type: {eq: "static"}}}) {
          edges {
            node {
              fields {
                slugStatic  
              }
              frontmatter {
                title
                lang
                headings
              }
              html
              htmlAst
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        if (node.fields.slugStatic !== '/privacy-policy/') {
          createPage({
            path: `en/term-of-service${node.fields.slugStatic}`,
            component: path.resolve('./src/containers/PrivacyCenterDetail/index.jsx'),
            context: {
              slug: `${node.fields.slugStatic}`,
              lang: `${node.frontmatter.lang}`,
              dataMenus: result.data.allMarkdownRemark.edges
            }
          })
          createPage({
            path: `term-of-service${node.fields.slugStatic}`,
            component: path.resolve('./src/containers/PrivacyCenterDetail/index.jsx'),
            context: {
              slug: `${node.fields.slugStatic}`,
              lang: `${node.frontmatter.lang}`,
              dataMenus: result.data.allMarkdownRemark.edges
            }
          })
        } else {
          createPage({
            path: `en${node.fields.slugStatic}`,
            component: path.resolve('./src/containers/PrivacyCenterDetail/index.jsx'),
            context: {
              slug: `${node.fields.slugStatic}`,
              lang: `${node.frontmatter.lang}`,
              dataMenus: result.data.allMarkdownRemark.edges
            }
          })

          createPage({
            path: `${node.fields.slugStatic}`,
            component: path.resolve('./src/containers/PrivacyCenterDetail/index.jsx'),
            context: {
              slug: `${node.fields.slugStatic}`,
              lang: `${node.frontmatter.lang}`,
              dataMenus: result.data.allMarkdownRemark.edges
            }
          })
        }

        resolve()
      })
    })
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.type === 'static') {
    const _value = createFilePath({ node, getNode })
    // const value = `help-center${_value}`
    createNodeField({
      name: `slugStatic`,
      node,
      value: _value,
    })
  }
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.type === 'docs') {
    // if (node.frontmatter.lang === "id") {
    //   const _value = createFilePath({ node, getNode })
    //   const value = `id/help-center${_value}`
    //   createNodeField({
    //     name: `slug`,
    //     node,
    //     value,
    //   })
    // } else {
    //   const _value = createFilePath({ node, getNode })
    //   const value = `en/help-center${_value}`
    //   createNodeField({
    //     name: `slug`,
    //     node,
    //     value,
    //   })
    // }
    const _value = createFilePath({ node, getNode })
    const value = `help-center${_value}`
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     plugins: [
//       plugins.define({
//         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
//       }),
//       new WebpackCdnPlugin({
//         modules: [
//           {
//             name: 'Docsearch',
//             var: 'Docsearch',
//             path: 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js'
//           }
//         ],
//         publicPath: '/node_modules'
//       })
//     ],
//   })
// }