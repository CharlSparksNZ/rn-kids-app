import {
  FETCH_SHOW_DATA, FETCH_SHOW_SUCCESS, FETCH_SHOW_FAILURE,
} from './action-types'

const initialShowsState = {
  shows: [],
  loading: true,
}

export default function showsState (state = initialShowsState, action) {
  switch (action.type) {
    case FETCH_SHOW_DATA:
      return {
        ...state,
        loading: true,
      }

    case FETCH_SHOW_SUCCESS:
      const newShows = state.shows.push(action.data)
      return {
        ...state,
        shows: newShows,
        loading: false,
      }

    case FETCH_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
