import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    image: 'no-repeat'
  }
}

const enhancer = injectSheet(styles)

const Footer = ({classes}) => (
  <div className={classes.footer}></div>
)
Footer.propTypes = {
  classes: PropTypes.object.isRequired
}
export default enhancer(Footer)
