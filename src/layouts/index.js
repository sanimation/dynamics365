import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../styles/main.scss'

const Header = () =>
  <div className="callout large secondary">
    <div className="row column text-center">
      <h1>
        <Link
          to="/"
          style={{color: 'white'}}
        >
          Dynamics 365 FAQ
        </Link>
      </h1>
    </div>
  </div>

class NavigationItem extends React.Component {
  constructor() {
    super()
    this.state = { active: this.props.active }
  }

  changePage = () => {
    this.setState({active: true})
  }

  render() {
    let className = "code-menu-item";
    if (this.state.active) {
      className += "is-active"
    }
    return (
      <li className={className}><Link to={this.props.link} onClick={this.changePage}>{this.props.name}</Link></li>
    )
  }
}

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Dynamics 365 FAQ"
      meta={[
        { name: 'description', content: 'Ce site référence les meilleures ressources \
        pour configurer et personnaliser Dynamics 365' },
      ]}
    />
    <Header />
    <div className="flex-container align-center">
      <ul className="code-menu menu">
        <li className="code-menu-item"><Link to="/" activeStyle={{
        color: 'red'
      }}
>Démarrer</Link></li>
        <li className="code-menu-item"><Link to="page-2">About</Link></li>
      </ul>
    </div>
    <div className="flex-container">
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
