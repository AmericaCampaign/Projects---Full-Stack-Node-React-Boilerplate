import React from 'react'
import injectSheet from 'react-jss'
import NestedList from './nestedList'
import {signupBtn, randomizerBtn} from '../presentation/Buttons'

const styles = {
  mainDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/hot-coffee-cinemagraph.gif")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
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
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '100px',
    marginBottom: '100px'
  },
  iconImg: {
    textAlign: 'center'
  },
  futureTitle: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px',
    background: '#F5F5F5'
  },
  futureBucket: {
    display: 'flex',
    flexDirection: 'row',
    background: '#F5F5F5',
    paddingBottom: '100px'
  },
  futureContent: {
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  futurePic: {
    width: '50%'
  },
  futurePicImg: {
    width: '100%'
  },
  parallaxDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/pouring-an-espresso_925x@2x.jpg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative',
    justifyContent: 'center'
  },
  futureTitle2: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px'
  },
  futureBucket2: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '100px'
  },
  futureContent2: {
    width: '50%',
    textAlign: 'Left',
    paddingLeft: '10px'
  },
  cta: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '15%',
    paddingRight: '15%',
    background: '#8e44ad',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

const enhancer = injectSheet(styles)

const Home = (props) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <h1 className={props.classes.heroTitle}> Drink Randomizer 2000 </h1>
        <h3 className={props.classes.heroSubTitle}>A Coffee App for Coffee People</h3>
      </div>
      <div className={props.classes.iconDiv}>
        <div className={props.classes.iconImg}>
          <img src='https://freeiconshop.com/wp-content/uploads/edd/coffee-takeaway-flat.png' />
          <h1>Open App</h1>
        </div>
        <div className={props.classes.iconImg}>
          <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
          <h1>Click Randomizer</h1>
        </div>
        <div className={props.classes.iconImg}>
          <img src='https://freeiconshop.com/wp-content/uploads/edd/coffee-flat.png' />
          <h1>Get Drink</h1>
        </div>
      </div>
      <div className={props.classes.futureTitle}>
        <h1> Welcome to the future of Coffee enjoyment! </h1>
      </div>
      <div className={props.classes.futureBucket}>
        <div className={props.classes.futureContent}>
          <h2> Tired of Deciding What Delicious Coffee Drink to Get?</h2>
          <h4>Worry no more because the Drink Randomizer 2000 is here to save the day!</h4>
          <h4>Every User can enjoy clicking the Randomizer 2000 button on our app page and have a random coffee drink selected for you.</h4>
          <h4>No longer do you have to agonize over which delicious beverage to enjoy.  Let us do the work for you!</h4>
        </div>
        <div className={props.classes.futurePic}>
          <img className={props.classes.futurePicImg} src='https://burst.shopifycdn.com/photos/woman-holding-coffee-mug_925x@2x.jpg' />
        </div>
      </div>
      <div className={props.classes.parallaxDiv}>
        <div className={props.classes.heroText}>
          <h1 className={props.classes.heroTitle}> Friends with Benefits ;) </h1>
          <h3 className={props.classes.heroSubTitle}>Become a Premium Member to Unlock All The Features</h3>
          <signupBtn />
          button should be here 
          <randomizerBtn />
        </div>
      </div>
      <div>
        <div className={props.classes.futureTitle2}>
          <h1> Premium Membership...100% Free! </h1>
        </div>
        <div className={props.classes.futureBucket2}>
          <div className={props.classes.futurePic}>
            <img className={props.classes.futurePicImg} src='https://burst.shopifycdn.com/photos/pretty-woman-sipping-coffee_925x@2x.jpg' />
          </div>
          <div className={props.classes.futureContent2}>
            <NestedList />
          </div>
        </div>
        <div className={props.classes.cta}>
          <div>
            <h1>What are you waiting for?</h1>
          </div>
          <div>
            <button>Radomize Now!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default enhancer(Home)
