import React from "react"

import Layout from "../components/layout"
import Container from "../components/container";
import SEO from "../components/seo"
// import Blog from "../components/blog"
import Hero from "../components/hero";
import About from "../components/about";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container width="100%">
      <Hero />
    </Container>
    <Container width="960px" gutter="0 1.0875rem">
      <About/>
      {/* <Blog /> */}
    </Container>
  </Layout>
)

export default IndexPage
