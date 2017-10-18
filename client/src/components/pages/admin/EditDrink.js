import React from 'react'
import Input, {InputLabel} from 'material-ui/Input'
import { FormControlLabel} from 'material-ui/Form'
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
  isDairy: PropTypes.bool.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onSweetnessChanged: PropTypes.func.isRequired,
  isSweet: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const EditDrink = (props) => (
  <div>
    <h1>Edit Drink Form</h1>
    <div className={props.classes.formAndPhotoBucket} >
      <img className={props.classes.photo} src='https://burst.shopifycdn.com/photos/grey-coffee-mug_925x.jpg' />
      <div className={props.classes.formBucket}>
        <form className={props.classes.input}>
          <Input
            placeholder='Edit Drink Name'
            onChange={props.onNameChanged}
            inputProps={{
              'aria-label': 'Description'
            }}
          />
          <Input
            placeholder='Edit Photo URL'
            onChange={props.onImageChanged}
            inputProps={{
              'aria-label': 'Description'
            }}
          />
          <Input
            placeholder='Insert Drink ID here'
            inputProps={{
              'aria-label': 'Description'
            }}
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
  </div>
)
EditDrink.propTypes = {
  classes: PropTypes.object.isRequired
}
export default enhancer(EditDrink)
