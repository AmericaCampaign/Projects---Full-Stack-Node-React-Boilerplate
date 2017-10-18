import React, {Component} from 'react'
import PropTypes from 'prop-types'
import EditProfileForm from './EditProfileForm'
import {withRouter} from 'react-router-dom'

class EditProfileContainer extends Component {
  static propTypes = {
    userData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    loaded: false,
    firstName: undefined,
    lastName: undefined,
    isDairy: undefined,
    isSweet: undefined,
    favCoffee: undefined,
    favoriteCoffeeShop: undefined
  }

  componentDidMount () {
    if (!this.props.userData || !this.props.userData.user) {
      this.props.history.push('/login')
    } else {
      this.setState({
        firstName: this.props.userData.user.local.firstName,
        lastName: this.props.userData.user.local.lastName,
        isDairy: this.props.userData.user.local.isDairy,
        isSweet: this.props.userData.user.local.isSweet,
        favCoffee: this.props.userData.user.local.favCoffee,
        favoriteCoffeeShop: this.props.userData.user.local.favoriteCoffeeShop,
        loaded: true
      })
    }
  }

onFirstNameChanged = (event) => this.setState({firstName: event.target.value})

onLastNameChanged = (event) => this.setState({lastName: event.target.value})

onDairyChanged = (event) => this.setState({isDairy: event.target.value})

onSweetnessChanged = (event) => this.setState({isSweet: event.target.value})

onFavCoffee = (event) => this.setState({favCoffee: event.target.value})

onFavoriteCoffeeShop = (event) => this.setState({favoriteCoffeeShop: event.target.value})

onSubmit = (event) => {
  event.preventDefault()
  this.props.userData.updateUser(this.state)
  this.props.history.push('/profile')
  console.log('Submit Form Worked')
}

render () {
  return (
    this.state.loaded ? <EditProfileForm
      {...this.state}
      onFirstNameChanged={this.onFirstNameChanged}
      onLastNameChanged={this.onLastNameChanged}
      onDairyChanged={this.onDairyChanged}
      onSweetnessChange={this.onSweetnessChanged}
      onFavCoffee={this.onFavCoffee}
      onFavoriteCoffeeShop={this.onFavoriteCoffeeShop}
      onSubmit={this.onSubmit}
    /> : null)
}
}

export default withRouter(EditProfileContainer)
