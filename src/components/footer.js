import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
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
        <footer className={footerStyles.footer}>
            <p>{data.site.siteMetadata.title} {copyRight} </p>
        </footer>
    )
}

export default Footer