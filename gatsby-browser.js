/**
 * this export will not destroy Layout on every page change. Gatsby destructs page on every change.
 * for more information, check https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
 *  */ 

const React = require("react")
// setting default makes the error go away. why? :/
const Layout = require("./src/components/layout/layout").default

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

// markdown code syntaxing
require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("./src/assets/prism-custom.css")