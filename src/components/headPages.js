import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const HeadPages = ({title, siteMetadata})  => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)
console.log(siteMetadata)
    return (
        <Helmet >
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta name='description' content={siteMetadata} />
        </Helmet>
    )
}

export default HeadPages