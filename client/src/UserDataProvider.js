import React, {Component} from 'react'
import Layout from './structure/Layout'
import * as ServerApi from './lib/serverApi'

class UserDataProvider extends Component {
  state = {
    isLoaded: false,
    user: null
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

    findUserById: (userId) =>
      ServerApi.findUserById(userId)
        .then(this.methods.getAllUsers)
  }

  componentDidMount () {
    this.methods.getAllUsers()
  }

  render () {
    const userData = {
      ...this.state,
      ...this.methods
    }
    return React.cloneElement(this.props.children,{userData})
  }
}
export default UserDataProvider
