import React, {Component, PropTypes} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'

import * as icons from './Icons'

import styles from './SeasonPickerStyles'

export default class Seasons extends Component {
  static propTypes = {
    seasons: PropTypes.array,
    selected: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onSelect: () => null,
    onClose: () => null,
  }

  render () {
    const {selected, seasons, onSelect, onClose} = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={onClose}>
        <View style={styles.list}>
          {seasons.map((season, i) => (
            <TouchableOpacity
              key={i}
              onPress={onSelect.bind(null, i)}
            >
              <View
                style={[
                  styles.season,
                  i < seasons.length - 1 && styles.seasonWithBorder,
                ]}
              >
                <Text style={styles.seasonText}>
                  {season.title}
                </Text>
                {selected === i &&
                  <Image
                    style={styles.icon}
                    source={icons.ok.white}
                  />}
              </View>
            </TouchableOpacity>
            )
          )}
        </View>
      </TouchableOpacity>
    )
  }
}
