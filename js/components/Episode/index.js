import React, {Component, PropTypes} from 'react'
import {Text, View} from 'react-native'

import PlayButton from './PlayButton'

export default class Episode extends Component {
  render () {
    const {episode, onPlay} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {episode.title}
        </Text>
        <Text style={styles.details}>
          <Text>Season 1</Text>
          <Text style={styles.seperator}> | </Text>
          <Text>Episode {episode.number}</Text>
          <Text style={styles.seperator}> | </Text>
          <Text>{episode.duration} min</Text>
        </Text>
        <Text style={styles.description}>
          {episode.description}
        </Text>
        {episode.number === 1
          ? <PlayButton onPress={onPlay} text='PLAY' outline color='white' />
           : episode.number === 2
             ? <PlayButton onPress={onPlay} text='RESUME' outline color='yellow' />
             : <PlayButton onPress={onPlay} text='PLAY' />}
      </View>
    )
  }
}

Episode.propTypes = {
  onPlay: PropTypes.func,
  episode: PropTypes.object,
}
