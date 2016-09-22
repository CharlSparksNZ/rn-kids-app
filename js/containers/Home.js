import React, {PropTypes, Component} from 'react'
import {View, ScrollView} from 'react-native'
import {connect} from 'react-redux'

import styles from './styles'

import Hotspots from './Hotspots'
import Collections from './Collections'
// import PlaybackHistoryFunkyBar from './PlaybackHistoryFunkyBar'

export default class Main extends Component {
  static propTypes = {}

  render () {
    return (
      <ScrollView style={{flex: 1}}>
        <Hotspots {...this.props} />
        {/* <PlaybackHistoryFunkyBar {...this.props} /> */}
        <Collections {...this.props} />
      </ScrollView>
    )
  }
}
