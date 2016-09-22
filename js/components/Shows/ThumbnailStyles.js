import Dimensions from 'Dimensions'
import {StyleSheet} from 'react-native'

import * as colors from '../../common/color'

const {width: windowWidth} = Dimensions.get('window')
const padding = 5
const thumbWidth = (windowWidth / 2) - (padding * 2)

export default StyleSheet.create({
  container: {
    width: thumbWidth,
    marginLeft: padding,
    marginRight: padding,
    marginBottom: 10,
  },
  image: {
    width: thumbWidth,
    height: (thumbWidth / 4) * 3,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
    color: colors.light,
    // fontFamily: 'Source Sans Pro',
  },
})
