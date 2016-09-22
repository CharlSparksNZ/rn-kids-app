import React, {Component, PropTypes} from 'react'
import {Image, TouchableOpacity, Text, View} from 'react-native'

import * as colors from '../../common/color'

import styles from './styles'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    outline: PropTypes.bool,
    image: PropTypes.any,
    color: PropTypes.oneOf(['yellow', 'black', 'white']),
  }

  defaultProps = {
    text: 'PLAY NOW',
    color: 'yellow',
    outline: false,
  }

  render () {
    const {stretch, text, outline, color, image, ...other} = this.props

    const hexColor = color === 'yellow' ? colors.primary : color

    return (
      <View style={stretch ? styles.stretch : styles.container}>
        <TouchableOpacity {...other}>
          <View
            style={[
              styles.button,
              outline ? styles.outline : styles.solid, {
                [outline ? 'borderColor' : 'backgroundColor']: hexColor,
              },
            ]}
          >
            {image && <Image style={styles.buttonIcon} source={image} />}
            <Text
              style={[
                styles.text,
                outline && {
                  color: hexColor,
                },
              ]}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
