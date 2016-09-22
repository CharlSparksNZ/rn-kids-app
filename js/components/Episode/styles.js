import {StyleSheet} from 'react-native'

import * as colors from '../../common/color'

export default StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: colors.darkline,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.light,
    marginBottom: 5,
    // fontFamily: 'Source Sans Pro',
  },
  details: {
    flex: 1,
    color: colors.light,
    marginBottom: 5,
    // fontFamily: 'Source Sans Pro',
    opacity: 0.8,
  },
  description: {
    color: colors.light,
    // fontFamily: 'Source Sans Pro',
    opacity: 0.8,
  },
})
