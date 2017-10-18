import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  isDairy: PropTypes.bool.isRequired,
  onDairyChanged: PropTypes.func.isRequired,
  isSweet: PropTypes.bool.isRequired,
  onSweetnessChanged: PropTypes.func.isRequired,
  favCoffee: PropTypes.string.isRequired,
  onFavCoffee: PropTypes.func.isRequired,
  favoriteCoffeeShop: PropTypes.string.isRequired,
  onFavoriteCoffeeShop: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const EditProfileForm = props => {
  const { classes } = props
  return (
    <form onSubmit={props.onSubmit}>
      First Name: <input type='text' value={props.firstName} onChange={props.onFirstNameChanged} />
      Last Name: <input type='text' value={props.lastName} onChange={props.onLastNameChanged} />
      Dairy Preference: <input type='text' value={props.isDairy} onChange={props.onDairyChanged} />
      Sweetness Preference: <input type='text' value={props.isSweet} onChange={props.onSweetnessChanged} />
      Favorite Coffee: <input type='text' value={props.favCoffee ? props.favCoffee : 'Pick your favorite Coffee'} onChange={props.onFavCoffee} />
      Favorite Coffee Shop: <input type='text' value={props.favoriteCoffeeShop ? props.favoriteCoffeeShop : 'Pick your favorite Coffee Shop'} onChange={props.onFavoriteCoffeeShop} />

      <input
        type='submit'
        value='Submit Form'
      />
    </form>
  )
}
EditProfileForm.propTypes = propTypes

export default EditProfileForm
