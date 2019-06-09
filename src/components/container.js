import React from "react"

import '../styles/container.css'

const Container = ({ width, children, gutter }) => (
  <div 
    className="container"
    style={{ maxWidth: width, padding: gutter }}
  >
  {children}
  </div>
)

export default Container
