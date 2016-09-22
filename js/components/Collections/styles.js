import {StyleSheet} from 'react-native'
import * as colors from '../../common/color'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  collection: {
    paddingTop: 15,
  },
  lastCollection: {
    paddingTop: 15,
    backgroundColor: colors.offdark,
  },
  listTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    marginLeft: 20,
    // fontFamily: 'Source Sans Pro',
  },
  seperator: {
    borderColor: colors.darkline,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginLeft: 20,
    marginRight: 20,
  },
})
