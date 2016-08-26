import React, {PropTypes} from 'react'
import {NavigationExperimental, Alert, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'

import Home from './containers/Home'

import {navigatePop} from './store/routes/actions'

const {
  // Transitioner: NavigationTransitioner,
  CardStack: NavigationCardStack,
  // Card: NavigationCard,
  Header: NavigationHeader,
} = NavigationExperimental

class Routes extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    navigationState: PropTypes.object,
    backAction: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
    this._renderOverlay = this._renderOverlay.bind(this)
    this._renderRight = this._renderRight.bind(this)
    this._renderTitle = this._renderTitle.bind(this)
    this._renderScene = this._renderScene.bind(this)

    this.state = {}
  }

  render () {
    const {navigationState, backAction} = this.props
    console.log(navigationState)
    return (
      <NavigationCardStack
        navigationState={navigationState}
        onNavigateBack={backAction}
        style={styles.container}
        direction={'horizontal'}
        renderOverlay={this._renderOverlay}
        renderScene={this._renderScene} />
    )
  }

  _renderOverlay (props) {
    const {backAction} = this.props
    const {scene} = props

    return (
      <NavigationHeader
        {...props}
        onNavigateBack={backAction}
        renderTitleComponent={this._renderTitle}
        // When dealing with modals you may also want to override renderLeftComponent...
      />
    )
  }

  _renderRight (props) {
    if (props.navigationState.index < 2) {
      return <Text>F</Text>
    }
  }

  _renderTitle (props) {
    const title = props.scene.route.title
    return <NavigationHeader.Title>{title}</NavigationHeader.Title>
  }

  _renderScene ({scene}) {
    const {route} = scene

    switch (route.key) {
      case 'Home':
        return <Home />
      // case 'Modal':
      //   return <Modal />
      default:
        return <Home />
    }
  }
}

function mapStateToProps (state) {
  return {
    navigationState: state.navigationState,
  }
}

function mapActionsToProp (dispatch) {
  return {
    backAction: () => dispatch(navigatePop()),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    shadowColor: 'transparent',
  },
})

export default connect(mapStateToProps, mapActionsToProp)(Routes)
