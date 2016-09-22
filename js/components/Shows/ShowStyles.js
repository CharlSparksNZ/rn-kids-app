import Dimensions from 'Dimensions'
import {StyleSheet} from 'react-native'

import * as colors from '../../common/color'

const {width: windowWidth} = Dimensions.get('window')

export default StyleSheet.create({
  image: {
    width: windowWidth,
    height: (windowWidth / 4) * 3,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
    padding: 20,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 50,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    color: colors.light,
    backgroundColor: 'transparent',
    fontFamily: 'Source Sans Pro',
  },
  categories: {
    color: colors.alpha(colors.light, 0.7),
    backgroundColor: 'transparent',
    fontFamily: 'Source Sans Pro',
  },
  details: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderColor: colors.darkline,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  description: {
    color: colors.light,
    backgroundColor: 'transparent',
    fontFamily: 'Source Sans Pro',
  },
  rating: {
    marginTop: 4,
  },
})
