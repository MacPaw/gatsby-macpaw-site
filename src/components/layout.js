/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Experiment, Variant } from "@marvelapp/react-ab-test"

import "./layout.css"
import "./style.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div className="center">
        <div className="banner">
          <Experiment name="newsletter_popup">
            <Variant name="black_friday">
              <span>40% off for black friday</span>
            </Variant>
            <Variant name="cyber_monday">
              <span>90% off for cyber monday</span>
            </Variant>
          </Experiment>
        </div>
      </div>
      <footer>
        Copyright © 2020 MacPaw Inc. 601 Montgomery Street, Suite 1400, San
        Francisco, CA 94111 tel: +1-(877)-5-MACPAW
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
