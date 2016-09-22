import React, {Component, PropTypes} from 'react'
import {StyleSheet, View, Modal} from 'react-native'

import Season from './Season'
import SeasonPicker from './SeasonPicker'

import * as colors from '../../common/color'

export default class Seasons extends Component {
  static propTypes = {
    seasons: PropTypes.array,
    onPlayEpisode: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      season: 0,
    }

    this.launchPicker = this.launchPicker.bind(this)
    this.handlePickSeason = this.handlePickSeason.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  launchPicker () {
    this.setState({visible: true})
  }

  handlePickSeason (season) {
    setImmediate(() => this.setState({visible: false, season}))
  }

  handleClose () {
    setImmediate(() => this.setState({visible: false}))
  }

  render () {
    const {seasons, onPlayEpisode} = this.props
    const season = seasons[this.state.season]

    return (
      <View style={styles.container}>
        <Modal transparent visible={this.state.visible}>
          <SeasonPicker
            seasons={seasons}
            selected={this.state.season}
            onSelect={this.handlePickSeason}
            onClose={this.handleClose} />
        </Modal>
        <Season
          season={season}
          onPressSeason={this.launchPicker}
          onPlayEpisode={onPlayEpisode}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pickerItem: {
    color: colors.light,
  },
})
