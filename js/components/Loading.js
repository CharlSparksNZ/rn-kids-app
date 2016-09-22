import React, {Component, PropTypes} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import * as colors from '../common/color'

export default class Loading extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: 'Loading...',
  }

  render () {
    const {text} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.light,
    opacity: 0.5,
    // fontFamily: 'Source Sans Pro',
  },
})
