import React from 'react'
import Layout from './structure/Layout'
import {BrowserRouter} from 'react-router-dom'
import 'typeface-roboto'
import DrinkDataProvider from './DrinkDataProvider'
import UserDataProvider from './UserDataProvider'

const App = () =>
  <BrowserRouter>
    <UserDataProvider>
      <DrinkDataProvider>
        <Layout />
      </DrinkDataProvider>
    </UserDataProvider>
  </BrowserRouter>

export default App
