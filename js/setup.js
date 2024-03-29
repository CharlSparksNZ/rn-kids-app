import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import Routes from './router'

const store = configureStore()

function setup () {
  class Root extends Component {
    render () {
      return (
        <Provider store={store}>
          <Routes />
        </Provider>
      )
    }
  }

  return Root
}

module.exports = setup
