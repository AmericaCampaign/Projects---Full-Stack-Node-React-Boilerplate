import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {drinkData} from '../../../lib/propTypes'
import AddDrinkForm from './AddDrinkForm'
import {withRouter} from 'react-router-dom'

class AddDrinkContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    drinkData: PropTypes.object.isRequired
  }
  state = {
    name: undefined,
    isSweet: undefined,
    isDairy: undefined,
    image: undefined
  }

  onNameChanged = (event) => this.setState({
    name: event.target.value
  })

  onDairyChanged = () => {
    this.setState({isDairy: !this.state.isDairy})
  }

  onImageChanged = (event) => this.setState({
    image: event.target.value
  })
  onSweetnessChanged = () => {
    this.setState({isSweet: !this.state.isSweet})
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.drinkData.addDrink(this.state)
    console.log('add button worked🍾')
    alert(`Congrats, you added a ${this.state.name}`)
  }
  render () {
    return (
      <AddDrinkForm
        onNameChanged={this.onNameChanged}
        onDairyChanged={this.onDairyChanged}
        isDairy={this.state.isDairy}
        onImageChanged={this.onImageChanged}
        onSweetnessChanged={this.onSweetnessChanged}
        isSweet={this.state.isSweet}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(AddDrinkContainer)
