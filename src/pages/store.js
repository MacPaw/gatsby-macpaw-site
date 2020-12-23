import React from "react"
import { useIntl, Link } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
    const intl = useIntl();

    return (
        <Layout>
            <SEO title="Page two" />
            <h1>{intl.formatMessage({id: 'store.title', defaultMessage: 'test'})}</h1>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
}

export default SecondPage
