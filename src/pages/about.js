import React from "react"
import Layout from '../components/layout'
import HeadPages from '../components/headPages'

const AboutPage = () => {
  return (
    <div>
        <Layout>
        <HeadPages title={'About'} siteMetadata="SilverGoldPill.com is a blog dedicated to all news and trends related to precious metals." />
        <h1>About:</h1>
        </Layout>
      
      
    </div>
  )
}

export default AboutPage
