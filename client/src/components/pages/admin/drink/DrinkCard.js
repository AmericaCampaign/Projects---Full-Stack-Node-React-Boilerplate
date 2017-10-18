import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import Switches from '../../../presentation/Switches'

const propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isSweet: PropTypes.bool.isRequired,
  isDairy: PropTypes.bool.isRequired
}

const styles = {
  drinkItem: {
    background: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '25%',
    margin: 25,
    borderRadius: '50px 50px 50px 50px',
    paddingBottom: '20px'
  },
  thumbnail: {
    width: '100%',
    borderRadius: '50px 50px 0 0'
  },
  drinkTitle: {
    textAlign: 'center'
  },
  imageTitle: {
    background: '#ffffff',
    width: '100%'
  },
  drinkChoices: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ecf0f1'
  },
  p: {
    fontSize: 12
  },
  price: {
    fontSize: 50
  },
  button: {
    backgroundColor: '#494949',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    marginBottom: 10,
    justifyContent: 'space-around',
    background: '#ecf0f1'
  },
  styleWords: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  styleImg: {
    display: 'flex',
    paddingBottom: '10px'
  },
  styleImgMini: {
    width: '100%'
  },
  boolImg: {
    width: '35%'
  }
}

const enhancer = injectSheet(styles)

const DrinkCard = props => {
  const { classes } = props
  return (
    <div className={classes.drinkItem}>
      <img className={classes.thumbnail} src={props.drink.image} />
      <div className={classes.imageTitle}>
        <h1 className={classes.drinkTitle}> {props.drink.name}</h1>
      </div>
      <div className={classes.drinkChoices}>
        <div className={classes.styleWords}>
          <div>
            {
              props.drink.isSweet ? <h3> Sweet </h3> : <h3> Not Sweet </h3>
            }
          </div>
          <div>
            {
              props.drink.isDairy ? <h3> Has Dairy </h3> : <h3> No Dairy </h3>
            }
          </div>
        </div>
        <div className={classes.styleImg}>
          <div className={classes.styleImgMini}>
            {
              props.drink.isSweet ? <img className={classes.boolImg} src='https://media2.giphy.com/media/l1BgRvzvyk92jcQ9O/200w.webp#18-grid1' /> : <img className={classes.boolImg} src='https://media2.giphy.com/media/3o7bu9acQhqDzu4LcY/giphy.gif' />
            }
          </div>
          <div className={classes.styleImgMini}>
            {
              props.drink.isDairy ? <img className={classes.boolImg} src='https://media2.giphy.com/media/LqaXlD6aCKcla/200w.webp#14-grid4' /> : <img className={classes.boolImg} src='https://media3.giphy.com/media/BrGOs7zHo0yNW/giphy.gif' />
            }
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={props.onEdit}>Edit</button>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  )
}

DrinkCard.propTypes = propTypes

export default enhancer(DrinkCard)
