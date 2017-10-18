import React, {Component} from 'react'
import * as ServerApi from './lib/serverApi'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired
}

class UserDataProvider extends Component {
  state = {
    isLoaded: false,
    user: null,
    profile: []
  }

  methods = {
    getAllUsers: () =>
      ServerApi.getAllUsers()
        .then(users =>
          this.setState({
            isLoaded: true,
            users: users
          })),

    addUser: (newUser) => {
      ServerApi.addUser(newUser)
        .then((signUpUser) => {
          console.log('response to add user call', signUpUser)
          this.setState({
            user: signUpUser
          })
          return signUpUser
        })
    },
    updateUser: (user) =>
      ServerApi.updateUser(user)
        .then(this.methods.getAllUsers),

    deleteUser: (userId) =>
      ServerApi.deleteUser(userId)
        .then(this.methods.getAllUsers),

    findUserById: (profileId) => {
      for (let i = 0; i < this.state.profile.length; i++) {
        const currentProfile = this.state.profile[i]
        console.log(this.state.profile[i], 'user in userbyid')
        if (profileId === currentProfile._id) {
          return currentProfile
        }
      }
    },
    loginUser: (email, password) =>
      ServerApi.loginUser(email, password)
        .then((loggedInUser) => {
          this.setState({
            user: loggedInUser
          })
          return loggedInUser
        }),
    logoutUser: () =>
      ServerApi.logoutUser()
        .then(() => this.onUserUpdated(null))
  }

  onUserUpdated = user => {
    if (!user) {
      this.setState({
        user: null,
        profile: null
      })
        .then(profile => this.setState({user, profile}))
    }
    return user
  }

  componentDidMount () {
    this.methods.getAllUsers()
  }

  render () {
    const userData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null
    }
    return React.cloneElement(this.props.children, {userData})
  }
}

UserDataProvider.propTypes = propTypes

export default UserDataProvider
