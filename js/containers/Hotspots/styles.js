import Dimensions from 'Dimensions'
import {StyleSheet} from 'react-native'

import * as colors from '../../common/color'

const {width: windowWidth} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    height: 250,
  },
  carousel: {
    width: windowWidth,
    height: 250,
  },
  section: {
    overflow: 'hidden',
  },
  image: {
    width: 825,
    height: 250,
    marginLeft: -825 + windowWidth,
    alignItems: 'flex-end',
  },
  gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    padding: 20,
    width: windowWidth,
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.light,
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 5,
    // fontFamily: 'Source Sans Pro',
  },
  category: {
    color: colors.light,
    backgroundColor: 'transparent',
    fontWeight: '600',
    marginBottom: 5,
    // fontFamily: 'Source Sans Pro',
  },
  description: {
    color: colors.light,
    backgroundColor: 'transparent',
    // fontFamily: 'Source Sans Pro',
  },
})
