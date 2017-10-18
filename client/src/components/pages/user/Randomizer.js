import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  main: {
    border: 'solid pink',
    backgroundImage: "url('images/AppPageBackgroundpossible.jpg')",
    width: '73.5vw',
    height: '85vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '1000'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20em',
    height: '8em',
    color: 'black',
    borderRadius: '7px'
  }
}

const enhancer = injectSheet(styles)

const Randomizer = (props) => {
  return (
    <div className={props.classes.main}>
      <h1>The Randomizer app will render here</h1>
      <button className={props.classes.button} type='submit'>Pick me a Drink!</button>
    </div>
  )
}

export default enhancer(Randomizer)
