import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <div className="container">
      <div className="columns">
        <div className="one-fifth column">
          .one-fifth
        </div>
        <div className="four-fifths column">
          .four-fifths
        </div>
      </div>

      <div className="columns">
        <div className="one-fourth column">
          .one-fourth
        </div>
        <div className="three-fourths column">
          .three-fourths
        </div>
      </div>

      <div className="columns">
        <div className="one-third column">
          .one-third
        </div>
        <div className="two-thirds column">
          .two-thirds
        </div>
      </div>

      <div className="columns">
        <div className="one-half column">
          .one-half
        </div>
        <div className="one-half column">
          .one-half
        </div>
      </div>
    </div>
  </div>

export default IndexPage
