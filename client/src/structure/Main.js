import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/pages/Home'
import AddDrinkContainer from '../components/pages/admin/AddDrinkContainer'
import AllDrinks from '../components/pages/admin/AllDrinks'
import EditDrink from '../components/pages/admin/EditDrink'
import ListUsers from '../components/pages/admin/ListUsers'
import CreateUserContainer from '../components/pages/user/CreateUserContainer'
import LoginContainer from '../components/pages/authorization/LoginContainer'
import ProfileContainer from '../components/pages/user/profile/ProfileContainer'
import EditProfileContainer from '../components/pages/user/profile/EditProfileContainer'
import TopTen from '../components/pages/user/TopTen'
import Randomizer from '../components/pages/user/Randomizer'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  drinkData: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
}

const styles = {
  main: {
    position: 'fixed',
    padding: 0,
    top: 50,
    bottom: 25,
    left: 0,
    right: 0
  }
}

const enhancer = injectSheet(styles)

const Main = ({drinkData, userData}) => {
  return (
    <div>
      <Route path='/'exact component={Home} />
      <Route path='/AddDrink' render={() => <AddDrinkContainer drinkData={drinkData} />} />
      <Route path='/AllDrinks' render={() => <AllDrinks drinkData={drinkData} />} />
      <Route path='/EditDrink' render={() => <EditDrink drinkData={drinkData} />} />
      <Route path='/ListUsers' render={() => <ListUsers />} />
      <Route path='/CreateUser' render={() => <CreateUserContainer userData={userData} />} />
      <Route path='/Login' render={() => <LoginContainer userData={userData} />} />
      <Route path='/TopTen' render={() => <TopTen />} />
      <Route path='/Profile' render={(routeProps) => <ProfileContainer userData={userData} history={routeProps.history} />} />
      <Route path='/Randomizer' render={() => <Randomizer />} />
      <Route path='/EditProfile' render={(routeProps) => <EditProfileContainer userData={userData} history={routeProps.history} />} />
    </div>
  )
}

Main.propTypes = propTypes

export default enhancer(Main)
