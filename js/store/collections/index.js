import {
  FETCH_COLLECTION_DATA, FETCH_COLLECTION_SUCCESS, FETCH_COLLECTION_FAILURE,
} from './action-types'

const initialHotspotState = {
  lists: [],
  loading: true,
}

export default function hotspotState (state = initialHotspotState, action) {
  switch (action.type) {
    case FETCH_COLLECTION_DATA:
      return {
        ...state,
        loading: true,
      }

    case FETCH_COLLECTION_SUCCESS:
      const lists = action.data
      return {
        ...state,
        lists,
        loading: false,
      }

    case FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
