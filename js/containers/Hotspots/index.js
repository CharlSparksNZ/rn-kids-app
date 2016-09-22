import React, {Component, PropTypes} from 'react'
import Carousel from 'react-native-looped-carousel'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import Button from '../../components/Button'

import {navigatePush} from '../store/routes/actions'
import {getHotspotData} from '../../store/hotspots/actions'
import * as colors from '../../common/color'

import styles from './styles'

class Hotspots extends Component {
  static propTypes = {
    navigationState: PropTypes.object.isRequired,
    hotspotData: PropTypes.object.isRequired,
    getHotspotData: PropTypes.func.isRequired,
    navigatePush: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getHotspotData()
  }

  onPressShow (hotspot) {
    this.props.navigatePush(hotspot.title, hotspot.showId)
  }

  render () {
    const {hotspots, loading} = this.props.hotspotData

    if (loading) {
      return null
    }

    return (
      <View style={styles.container}>
        <Carousel delay={3000} style={styles.carousel}>
          {hotspots.map((hotspot) => (
            <TouchableOpacity
              key={hotspot.id}
              style={styles.section}
              onPress={() => this.onPressShow(hotspot)}
            >
              <Image
                source={{uri: hotspot.image.mobileHD}}
                style={styles.image}
              >
                <LinearGradient
                  style={styles.gradient}
                  colors={[
                    colors.alpha(colors.shadow, 0),
                    colors.alpha(colors.shadow, 1),
                  ]}>
                  <Text
                    style={styles.title}
                    numberOfLines={1}
                  >
                    {hotspot.heading}
                  </Text>
                  <Text
                    style={styles.category}
                    numberOfLines={1}
                  >
                    {hotspot.category.toUpperCase()}
                  </Text>
                  <Text
                    style={styles.description}
                    numberOfLines={3}
                  >
                    {hotspot.description}
                  </Text>

                  <Button
                    onPress={() => this.onPressShow(hotspot)}
                    text='VIEW MORE'
                  />
                </LinearGradient>
              </Image>
            </TouchableOpacity>
          ))}
        </Carousel>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    hotspotData: state.hotspots,
    navigationState: state.navigationState,
  }
}

function mapActionsToProp (dispatch) {
  return {
    navigatePush: () => dispatch(navigatePush({})),
    getHotspotData: (title, id) => dispatch(getHotspotData({key: 'Show', title, showId})),
  }
}

export default connect(mapStateToProps, mapActionsToProp)(Hotspots)
