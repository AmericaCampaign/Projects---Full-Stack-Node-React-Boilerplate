import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: ''
  }
  onEmailChanged = (event) => this.setState({email: event.target.value})

  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Hey')
    this.props.userData.loginUser(this.state.email, this.state.password)
      .then((user) => {
        this.props.history.push('/')
        alert(`You are logged in ${user.local.firstName}`)
      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <LoginForm
        {...this.state}
        onEmailChanged={this.onEmailChanged}
        onPasswordChanged={this.onPasswordChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(LoginContainer)
