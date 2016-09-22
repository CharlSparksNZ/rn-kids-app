import {StyleSheet} from 'react-native'

import * as colors from '../../common/color'

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  stretch: {
    alignSelf: 'stretch',
  },
  button: {
    borderRadius: 2,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  solid: {
    backgroundColor: colors.primary,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.light,
  },
  buttonIcon: {
    width: 18,
    height: 18,
  },
  text: {
    fontWeight: '800',
    marginLeft: 10,
    // fontFamily: 'Source Sans Pro',
  },
})
