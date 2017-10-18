import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  favoriteCoffee: PropTypes.string.isRequired,
  favoriteCoffeeShop: PropTypes.string.isRequired
}

const styles = {
  mainDiv: {
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    maxWidth: 355,
    height: 415,
    marginTop: 100,
    marginLeft: 10
  },
  media: {
    height: 200,
    width: 335,
    margin: 10
  },
  randomButton: {
    dense: 'primary'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    fontFamily: 'Merriweather'
  },
  typography: {
    height: 600
  }
}

const Profile = props => {
  const { classes } = props
  return (
    <div className={classes.mainDiv} >
      <div>
        <img className={classes.typography} src='https://i.pinimg.com/736x/90/8a/11/908a11e4a4ef0da9a0dd64fa31a54fb6--coffee-typography-under-eye-concealer.jpg' />
      </div>
      <Card className={classes.card}>
        <div>
          <img className={classes.media} src='https://burst.shopifycdn.com/photos/making-coffee_925x.jpg' />
        </div>
        <CardContent>
          <div className={classes.header}> First Name: {props.firstName}</div>
          <div className={classes.header}> Last Name: {props.lastName}</div>
          <div className={classes.header}> Email: {props.email}</div>
          <div className={classes.header}> Favorite Coffee: {props.favoriteCoffee}</div>
          <div className={classes.header}> Favorite Coffee Shop: {props.favoriteCoffeeShop}</div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button dense color='primary'>
            <Link to='/Randomizer'>Randomizer</Link>
          </Button>
          <Button dense color='primary' >
            <Link to='/TopTen'>Top Ten</Link>
          </Button>
          <Button dense color='primary'>
            <Link to='/EditProfile'>Edit Profile</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

Profile.propTypes = propTypes

export default withStyles(styles)(Profile)
