import React from 'react';

import loaderCss from '../styles/loader.module.css'

const Loader = ({ isLoading })=> (
  <div id="loader" className={isLoading ? loaderCss.loader : `${loaderCss.loader} ${loaderCss.hidden}`}>
    {console.log(isLoading)}
    <svg className={loaderCss.svgLogo} id="Layer_1" x="0px" y="0px" viewBox="0 0 100.2 102.9" style={{enableBackground:`new 0 0 100.2 102.9`}}>
    <linearGradient id="lg" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopOpacity="1" stopColor="#ff5601"/>
          <stop offset="40%" stopOpacity="1" stopColor="#ff5601">
            <animate attributeName="offset" from="0" to="1" repeatCount="1" dur="3s" begin="0s" fill="freeze"/>
          </stop>
          <stop offset="40%" stopOpacity="0" stopColor="#ff5601">
            <animate attributeName="offset" from="0" to="1" repeatCount="1" dur="3s" begin="0s" fill="freeze"/>
          </stop>
          <stop offset="100%" stopOpacity="0" stopColor="#ff5601" />
      </linearGradient>
      <polygon fill="url(#lg)" points="1.4,13.3 1.4,85.1 48.9,64.6 48.9,39.8 25.9,47.9 26.3,1.3 "/>
      <polygon fill="url(#lg)" points="98.9,13.3 98.9,85.1 51.5,64.6 51.5,39.8 74.4,47.9 74,1.3 "/>
      <polygon fill="url(#lg)" points="76.1,77.1 79.3,102.1 98.9,86.9 "/>
      <polygon fill="url(#lg)" points="24.3,76.8 21,101.7 1.4,86.6 "/>
    </svg>
  </div>
)

export default Loader