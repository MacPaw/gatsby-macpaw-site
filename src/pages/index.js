import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allProductsAJson } = useStaticQuery(
    graphql`
      query {
        allProductsAJson {
          edges {
            node {
              id
              name
              link
              image
              description
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Products" />
      <div className="center">
        <div className="title">Amazing Apps to Improve Your Every Day</div>
      </div>
      <div className="center">
        <Link to="/store" className="navigation">
          Go to Store
        </Link>{" "}
        <br />
      </div>
      <div className="products">
        {allProductsAJson.edges.map(item => {
          const product = item.node
          console.log(product)
          return (
            <Link
              key={product.id}
              to={product.link}
              className="products-product"
            >
              <div className="products-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="products-name">{product.name}</div>
              <div className="products-description">Очистка Mac</div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
