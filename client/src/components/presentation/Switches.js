import React from 'react'
import { FormControlLabel, FormGroup } from 'material-ui/Form'
import Switch from 'material-ui/Switch'

const Switches = ({checked, handleSwitchChange, switchLabel}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
          />
        }
        label={switchLabel}
      />
    </FormGroup>
  )
}

export default Switches
