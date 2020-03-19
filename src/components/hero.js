import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import Image from './image';
import heroCss from '../styles/hero.module.css'

const Hero = () => (
  <StaticQuery 
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "hero-img.png" }) {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "Hax-logo TS.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className={heroCss.container}>
          {/* <Img fluid={data.heroImage.childImageSharp.fluid} /> */}
          <Image className={heroCss.backgroundImg} src={data.heroImage.childImageSharp.fluid}/>
          <div>
            <Image className={heroCss.logo} src={data.placeholderImage.childImageSharp.fluid}/>
            <a className={heroCss.discord} href="http://discord.gg/YWWkgXY" target="_blank" rel="noopener noreferrer">JOIN OUR DISCORD</a>
          </div>
        </div>
      )
    }}
  />
)

export default Hero;