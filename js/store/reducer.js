import {combineReducers} from 'redux'

import navigationState from './routes'
import hotspots from './hotspots'
import collections from './collections'
import shows from './shows'

export default combineReducers({
  navigationState,
  hotspots,
  collections,
  shows,
})
