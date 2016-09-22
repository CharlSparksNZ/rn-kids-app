import React, {Component, PropTypes} from 'react'
import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

import styles from './ThumbnailStyles'

export default class ShowThumb extends Component {
  static propTypes = {
    show: PropTypes.object.isRequired,
    onPressShow: PropTypes.func.isRequired,
    titleStyle: PropTypes.any,
  }

  render () {
    const {show, titleStyle, onPressShow} = this.props

    return (
      <TouchableOpacity onPress={onPressShow}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: show.image.smallHD}}
          />
          <View style={styles.details}>
            <Text
              numberOfLines={1}
              style={[styles.title, titleStyle]}
            >{show.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
