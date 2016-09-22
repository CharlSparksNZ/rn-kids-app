import {StyleSheet} from 'react-native'

import * as colors from '../../common/color'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.alpha(colors.shadow, 0.8),
  },
  list: {
    margin: 20,
    backgroundColor: colors.dark,
  },
  season: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seasonWithBorder: {
    borderColor: colors.darkline,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  seasonText: {
    color: colors.light,
    fontWeight: '600',
    fontSize: 16,
  },
  icon: {
    width: 19,
    height: 15,
  },
})
