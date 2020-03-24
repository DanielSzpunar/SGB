import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/Head'

const NotFound = () => {
    return (
        <Layout>
        <Head title={"You 404'd"} />
            <h1>Page Not Found.</h1>
            <p><Link to="/">Head back to home.</Link></p>
        </Layout>
    )
}
export default NotFound