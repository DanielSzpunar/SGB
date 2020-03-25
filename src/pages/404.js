import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeadPages from '../components/headPages'

const NotFound = () => {
    return (
        <Layout>
        <HeadPages title={"You 404'd"} siteMetadata={"SilverGoldPill's 404 page."}  />
            <h1>Page Not Found.</h1>
            <p><Link to="/">Head back to home.</Link></p>
        </Layout>
    )
}
export default NotFound