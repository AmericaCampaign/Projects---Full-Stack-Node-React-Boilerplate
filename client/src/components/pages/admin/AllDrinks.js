import React from 'react'
import injectSheet from 'react-jss'
import DrinkCard from './drink/DrinkCard'
import {Link, withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const propTypes = {
  drinkData: AppPropTypes.drinkData,
  history: PropTypes.object.isRequired
}

const styles = {
  drinkCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '20px',
    width: '100%',
    justifyContent: 'center'
  },
  mainDiv: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/pouring-hot-coffee_925x.jpg")',
    position: 'relative',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '4em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroButton: {
    width: '25%'
  },
  heroSubTitle: {
    fontSize: '2em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  }
}

const enhancer = injectSheet(styles)

const AllDrinks = ({drinkData, classes}) => {
  return (
    <div>
      <div className={classes.mainDiv}>
        <h1 className={classes.heroTitle}> All the Drinks </h1>
        <h3 className={classes.heroSubTitle}>Here is the list of all the drinks</h3>
      </div>
      <div className={classes.drinkCard} >
        {
          drinkData && drinkData.drinks && drinkData.drinks.length > 0
            ? drinkData.drinks.map(drink =>
              <DrinkCard
                key={drink._id}
                drink={drink}
                onDelete={() => drinkData.deleteDrink(drink._id)}
                onEdit={() => drinkData.editDrink(drink._id)}
              />
            ) : <h1> No Drinks </h1>
        }
      </div>
    </div>
  )
}

AllDrinks.propTypes = {
  classes: PropTypes.object.isRequired,
  drink: AppPropTypes.drink,
  drinkData: AppPropTypes.drinkData,
  onEdit: PropTypes.func.isRequired,
  deleteDrink: PropTypes.func.isRequired
}

AllDrinks.propTypes = propTypes

export default enhancer(withRouter(AllDrinks))
