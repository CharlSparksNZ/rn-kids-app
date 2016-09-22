import React, {Component, PropTypes} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import * as colors from './colors'

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: colors.light,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.light,
    fontWeight: '600',
    backgroundColor: 'transparent',
  },
})

export default class Rating extends Component {
  static propTypes = {
    rating: PropTypes.string.isRequired,
    style: PropTypes.object,
  }

  render () {
    const {style, rating} = this.props

    return (
      <View style={[style, styles.container]}>
        <Text style={styles.text}>{rating.toUpperCase()}</Text>
      </View>
    )
  }
}
