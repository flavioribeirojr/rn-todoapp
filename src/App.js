import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppNavigator from './routes'
import reducers from './domains/rootReducer'

const appReducers = reducers()

const store = createStore(appReducers)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}