import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import {FormControlLabel} from 'material-ui/Form'
import Switch from 'material-ui/Switch'
import Button from 'material-ui/Button'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
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

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '23%'
  },
  input: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 10,
    width: '45vw',
    height: '45vw'
  },
  textField: {
    width: 300
  },
  button: {
    margin: 20,
    width: 20
  },
  inputTag: {
    border: 'solid blue',
    marginTop: 30,
    width: 190
  },
  img: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '60vw',
    height: '75vh'
  },
  header: {
    fontFamily: 'Merriweather'
  }
}

const enhancer = injectSheet(styles)

const CreateUser = props => {
  const { classes } = props

  return (
    <div>
      <h1 className={classes.header}> Hello New User</h1>
      <div className={classes.container}>
        <img className={classes.img} src='https://images.unsplash.com/photo-1490890870453-549b7f8d3bb5?dpr=1&auto=compress,format&fit=crop&w=583&h=&q=80&cs=tinysrgb&crop=' />
        <form className={classes.input}>
          <TextField
            id='firstName'
            label='First Name'
            className={classes.textField}
            value={props.firstName}
            onChange={props.onFirstNameChanged}
          />
          <TextField
            id='lastName'
            label='Last Name'
            className={classes.textField}
            value={props.lastName}
            onChange={props.onLastNameChanged}
          />
          <TextField
            id='email'
            label='Email'
            className={classes.textField}
            value={props.email}
            onChange={props.onEmailChanged}
          />
          <TextField
            id='password'
            label='Password'
            className={classes.textField}
            value={props.password}
            onChange={props.onPasswordChanged}
          />
          <TextField
            id='favoriteCoffee'
            label='Favorite Coffee'
            className={classes.textField}
            value={props.favCoffee}
            onChange={props.onFavCoffee}
          />
          <TextField
            id='favoriteCoffeeShop'
            label='Favorite Coffee Shop'
            className={classes.textField}
            value={props.favoriteCoffeeShop}
            onChange={props.onFavoriteCoffeeShop}
          />
          <FormControlLabel
            control={
              <Switch
                onClick={() => props.onDairyChanged()}
                checked={props.isDairy}
              />
            }
            label='Dairy'
          />
          <FormControlLabel
            control={
              <Switch
                onClick={() => props.onSweetnessChanged()}
                checked={props.isSweet}
              />
            }
            label='Sweet'
          />
          <Button raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
        </form>
      </div>
    </div>
  )
}

CreateUser.propTypes = propTypes

export default enhancer(CreateUser)
