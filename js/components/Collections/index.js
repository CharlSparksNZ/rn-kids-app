import React, {Component, PropTypes} from 'react'
import Dimensions from 'Dimensions'
import {
  Text,
  View,
  ScrollView,
} from 'react-native'

import ShowThumb from '../Shows/Thumbnail'

import styles from './styles'

const THUMB_WIDTH = Dimensions.get('window').width / 2

export default class Collections extends Component {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    onPressShow: PropTypes.func.isRequired,
  }

  render () {
    const {lists} = this.props

    return (
      <View style={styles.container}>
        {lists.map((list, i) => {
          const last = (i === lists.length - 1)
          return (
            <View
              key={list.collectionId}
              style={last ? styles.lastCollection : styles.collection}
            >
              <Text style={styles.listTitle}>{list.title}</Text>
              <ScrollView
                horizontal
                snapToInterval={THUMB_WIDTH}
                contentInset={{
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0,
                }}
                contentOffset={{
                  x: -20,
                  y: 0,
                }}
              >
                {list.showsConnection.shows.map((show) => (
                  <ShowThumb
                    key={show.showId}
                    show={show}
                    onPressShow={this.props.onPressShow}
                  />
                ))}
              </ScrollView>
              {!last && <View style={styles.seperator} />}
            </View>
          )
        })}
      </View>
    )
  }
}
