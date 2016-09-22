import React, {Component, PropTypes} from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'

import Episode from '../Episode'
import * as icons from '../Icons'

import styles from './SeasonStyles'

export default class Season extends Component {
  static propTypes = {
    season: PropTypes.object,
    onPressSeason: PropTypes.func,
    onPlayEpisode: PropTypes.func,
  }

  render () {
    const {season, onPressSeason, onPlayEpisode} = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressSeason}>
          <View style={styles.heading}>
            <Text style={styles.text}>
              {season.title}
            </Text>
            <Image style={styles.chevron} source={icons.chevronDown.yellow} />
          </View>
        </TouchableOpacity>
        {season.episodesConnection.episodes.map((episode) => {
          console.log(episode)
          return (<Episode
            key={episode.id}
            episode={episode}
            onPlay={() => onPlayEpisode(episode)}
          />)
        })}
      </View>
    )
  }
}
