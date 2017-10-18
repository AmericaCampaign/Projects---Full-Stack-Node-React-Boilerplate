import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  signupBtn: {
    background: '#9b59b6'
  }
}

const enhancer = injectSheet(styles)

/* export const signupBtn = (title, url) => <button onClick='/profile' className={classes.signupBtn}> {title}, {history.push(url)}</button>

export const randomizerBtn = (props) => <button onClick='/profile' className={props.classes.signupBtn}>Randomize!</button>

/* want to add onClick to button
need to figure out how to get the enhancer() to work
*/
