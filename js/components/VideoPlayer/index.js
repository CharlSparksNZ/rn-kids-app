import React, {Component, PropTypes} from 'react'
import {StyleSheet, Text} from 'react-native'
import Video from 'react-native-video'

import getClient from '../../store/xstream'

export default class VideoPlayer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isChanging: false,
      fullscreen: false,
      error: null,
      ticket: null,
      source: null,
    }
  }

  componentWillMount () {
    let client

    this.setState({isChanging: true, fullscreen: false})

    // TODO: Calculate this value
    const deviceId = 'C808C3FC-25A5-44E2-A432-E8C8A40E6AF4'
    const {videoId} = this.props

    // get ticket and stream id
    getClient()
      .then((_client) => {
        client = _client
        return client.video(videoId)
      })
      .then((video) => {
        const stream = video.streams.filter((strm) => strm.drmType === 'fairplay')[0]
        console.log(stream)

        this.setState({isChanging: false, source: stream.src})

        return client.ticket(stream.id, deviceId)
      })
      .then((ticket) => {
        if (ticket == null) {
          this.setState({error: 'Could not get ticket!'})
        } else {
          this.setState({ticket})
        }

        setTimeout(() => {
          this.setState({fullscreen: true})
        }, 100)

        setTimeout(() => {
          client.heartbeat(ticket, 'stop', 0)
        }, 5000)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const {error, isChanging, source, ticket, fullscreen} = this.state

    console.log('Rendering video', {error, source, ticket})

    if (error != null) {
      return <Text>{error}</Text>
    }

    if (isChanging || source == null || ticket == null) {
      return null
    }

    return (
      <Video
        source={{
          ticket,
          uri: source,
        }}
        style={styles.container}
        fullscreen={fullscreen}
        controls
      />
    )
  }
}

VideoPlayer.propTypes = {
  videoId: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
