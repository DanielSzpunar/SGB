import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>Page Not Found.</h1>
            <p><Link>Head back to home.</Link></p>
        </Layout>
    )
}
export default NotFound