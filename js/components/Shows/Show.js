import React, {Component, PropTypes} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {Image, TouchableOpacity, Text, View, ScrollView} from 'react-native'

import Rating from '../Rating'
import Seasons from '../Seasons'
import Loading from '../Loading'
import PlayButton from '../PlayButton'
import VideoPlayer from './VideoPlayer'

import * as colors from '../../common/color'

import styles from './ShowStyles'

export default class Show extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
      playingVideoId: null,
    }
  }

  toggleExpanded () {
    this.setState({expanded: !this.state.expanded})
  }

  playEpisode (episode) {
    this.setState({playingVideoId: episode.video.videoId})
  }

  render () {
    const {show, loading} = this.props
    const {expanded, playingVideoId} = this.state

    if (loading) {
      return <Loading />
    }

    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: show.image.mediumHD}}>
          <LinearGradient
            style={styles.gradient}
            colors={[
              colors.alpha(colors.shadow, 0),
              colors.alpha(colors.shadow, 0),
              colors.alpha(colors.shadow, 1),
            ]}>
            <View style={styles.heading}>
              <Text numberOfLines={1} style={styles.title}>
                {show.title}
              </Text>
              <Rating rating={show.parentalRating} style={styles.rating} />
            </View>
            <Text numberOfLines={1} style={styles.categories}>
              {show.categoriesConnection.categories.map((category) =>
                category.title.filter(() => category !== 'All TV').join(', ')
            )}
            </Text>
          </LinearGradient>
        </Image>
        <View style={styles.details}>
          <TouchableOpacity onPress={() => this.toggleExpanded()}>
            <Text numberOfLines={expanded ? 0 : 3} style={styles.description}>
              {show.description}
            </Text>
          </TouchableOpacity>
          <PlayButton stretch />
          <PlayButton
            text='WATCH TRAILER'
            stretch
            outline
            color='white' />
        </View>
        <Seasons
          seasons={show.seasonsConnection.seasons}
          onPlayEpisode={(episode) => this.playEpisode(episode)}
        />
        {playingVideoId != null && <VideoPlayer videoId={playingVideoId} />}
      </ScrollView>
    )
  }
}
