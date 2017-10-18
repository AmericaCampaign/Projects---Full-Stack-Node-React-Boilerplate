import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Button from 'material-ui/Button'

const propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
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
    marginTop: 20,
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

const LoginForm = props => {
  const { classes } = props

  return (
    <div>
      <h1 className={classes.header}> Membership Login </h1>
      <div className={classes.container}>
        <img className={classes.img} src='https://static1.squarespace.com/static/53c560bde4b013ba8747544a/t/5966b773a803bbd1f9bafc77/1499904319096/sca-barista-skills' />
        <form className={classes.input}>
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
          <Button className={classes.button} raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
        </form>
      </div>
    </div>
  )
}

LoginForm.propTypes = propTypes

export default enhancer(LoginForm)
