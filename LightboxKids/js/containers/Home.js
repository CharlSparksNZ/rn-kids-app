import React, {PropTypes} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'

class Home extends React.Component {
  static propTypes = {}

  render () {
    const {pagerState, onForward} = this.props

    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to Lightbox Kids!</Text>
        <Text onPress={onForward}>Route me away!</Text>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

function mapActionsToProps (dispatch) {
  return {
    onForward: () => dispatch(navigatePush({key: 'Discover', title: 'Discover'}))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  main: {
    shadowColor: 'transparent'
  }
})

export default connect(mapStateToProps, mapActionsToProps)(Home)
