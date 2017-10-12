import React from 'react'
import Input, {InputLabel} from 'material-ui/Input'
import { FormControlLabel, FormGroup } from 'material-ui/Form'
import Switch from 'material-ui/Switch'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  formAndPhotoBucket: {
    border: 'dashed orange',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  formBucket: {
    border: 'solid green'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',

    margin: 10,
    width: '33.33333333333vw',
    height: '100vw',
    border: 'solid pink'
  },
  inputTag: {
    border: 'solid yellow',
    width: ''
  },
  photo: {
    border: 'solid red',
    display: 'flex',
    width: '35%',
    height: '25%'
  }
}
const enhancer = injectSheet(styles)

const propTypes = {
  onNameChanged: PropTypes.func.isRequired,
  onDairyChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onSweetnessChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const AddDrinkForm = (props) => (
  <div>
    <h1>Add Drink Form</h1>
    <div className={props.classes.formAndPhotoBucket} >
      <img className={props.classes.photo} src='https://burst.shopifycdn.com/photos/grey-coffee-mug_925x.jpg' />
      <div className={props.classes.formBucket}>
        <form className={props.classes.input}>
          <Input
            placeholder='Drink Name'
            onChange={props.onNameChanged}
            inputProps={{
              'aria-label': 'Description'
            }}
          />
          <Input
            placeholder='Add a Photo URL'
            inputProps={{
              'aria-label': 'Description'
            }}
          />
          <Button raised>Submit</Button>
        </form>
      </div>
    </div>
  </div>
)
AddDrinkForm.propTypes = {
  classes: PropTypes.object.isRequired
}
export default enhancer(AddDrinkForm)
