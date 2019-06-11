import React, { Component } from "react"

import Layout from "../components/layout"
import Container from "../components/container";
import SEO from "../components/seo"
// import Blog from "../components/blog"
import Hero from "../components/hero";
import About from "../components/about";
import Loader from "../components/loader";

class IndexPage extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
      console.log("setTimeout called!")
  }, 3500);
  }

  render() {
    return (
      <Layout>
        <Loader isLoading={this.state.isLoading ? true : false}/>
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
  }
}


export default IndexPage
