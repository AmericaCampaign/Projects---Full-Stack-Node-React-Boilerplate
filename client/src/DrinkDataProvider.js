import React, {Component} from 'react'
import Layout from './structure/Layout'
import * as ServerApi from './lib/serverApi'

class DrinkDataProvider extends Component {
  state = {
    isLoaded: false,
    drinks: []
  }

  methods = {
    getAllDrinks: () =>
      ServerApi.getAllDrinks()
        .then(drinks => {
          console.log(drinks, 'where are all the drinks!')
          this.setState({
            isLoaded: true,
            drinks: drinks
          })
        }),

    addDrink: (newDrink) =>
      ServerApi.addDrink(newDrink)
        .then(() => {
          this.methods.getAllDrinks()
        }),

    deleteDrink: (drinkId) =>
      ServerApi.deleteDrink(drinkId)
        .then(() => {
          this.methods.getAllDrinks()
        }),

    editDrink: (drinkId) =>
      ServerApi.editDrink(drinkId)
        .then(() => {
          this.methods.getAllDrinks()
        })
  }

  componentDidMount () {
    this.methods.getAllDrinks()
  }

  render () {
    const drinkData = {
      ...this.state,
      ...this.methods
    }
    return React.cloneElement(this.props.children,{drinkData, userData: this.props.userData})
  }
}
export default DrinkDataProvider
