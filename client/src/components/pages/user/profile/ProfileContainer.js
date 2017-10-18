import React, {Component} from 'react'
import Profile from './Profile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends Component {
  static propTypes = {
    userData: PropTypes.func.isRequired
  }

  constructor (props) {
    super()
    if (props.userData.user) {
      this.state = {
        email: props.userData.user.local.email,
        firstName: props.userData.user.local.firstName,
        lastName: props.userData.user.local.lastName
      }
    }
  }

  render () {
    return (
      <Profile
        {...this.state}
      />
    )
  }
}

export default withRouter(ProfileContainer)
