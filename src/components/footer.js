import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
const Footer = () => {
    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
  `)
  const currentYear = new Date().getFullYear()
  const copyRight = `2019-${currentYear}©`
  
    return (
        <div>
            <p>{data.site.siteMetadata.title} {copyRight} </p>
        </div>
    )
}

export default Footer