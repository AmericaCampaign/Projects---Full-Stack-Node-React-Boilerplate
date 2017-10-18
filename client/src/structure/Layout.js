import React from 'react'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'
import PropTypes from 'prop-types'

const propTypes = {
  drinkData: PropTypes.func.isRequired,
  userData: PropTypes.func.isRequired
}

const Layout = ({drinkData, userData}) => {
  return (
    <div>
      <Header />
      <Main drinkData={drinkData} userData={userData} />
      <Footer />
    </div>
  )
}

Layout.propTypes = propTypes

export default Layout
