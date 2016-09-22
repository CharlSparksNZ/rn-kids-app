import {StyleSheet} from 'react-native'

import * as colors from '../../common/color'

export default StyleSheet.create({
  container: {
  },
  heading: {
    borderColor: colors.darkline,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    paddingTop: 5,
    paddingBottom: 5,
    // fontFamily: 'Source Sans Pro',
  },
  chevron: {
    width: 12,
    height: 8,
    marginLeft: 8,
  },
})
