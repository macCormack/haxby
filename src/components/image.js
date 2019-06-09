import React from "react";
import Img from "gatsby-image";

const Image = ({src, className}) => (
  <div className={className}>
    <Img fluid={src} />
  </div>
)

export default Image
