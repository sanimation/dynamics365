import React from 'react'
import PropTypes from 'prop-types'
import {Route, Link} from 'react-router-dom'
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

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
      <li className={match ? 'is-active' : ''}><Link to={to}>{label}</Link></li>
  )}/>
)

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
        <MenuLink to="/"  label="Démarrer" activeOnlyWhenExact={true} />
        <MenuLink to="/page-2"  label="page-2" activeOnlyWhenExact={true} />
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
