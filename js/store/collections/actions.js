import {
  FETCH_COLLECTION_DATA,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
} from './action-types'

import graphql from '../graphql'

function loadCollectionData () {
  return {
    type: FETCH_COLLECTION_DATA,
  }
}

function loadCollectionDataSuccess (data) {
  return {
    type: FETCH_COLLECTION_SUCCESS,
    data,
  }
}

function loadCollectionDataFailure (e) {
  return {
    type: FETCH_COLLECTION_FAILURE,
    error: e,
  }
}


export function getCollectionData () {
  return (dispatch) => {
    dispatch(loadCollectionData())
    return graphql(`{
      config {
        collectionsConnection {
          collections {
            collectionId
            title
            guest
            showsConnection {
              shows {
                showId
                title
                slug
                seasonRange
                image {
                  small
                  smallHD
                  medium
                  mediumHD
                }
              }
            }
          }
        }
      }
    }`)
    .then((response) => {
      console.log(response)
      const lists = response.data.config.collectionsConnection.collections
      dispatch(loadCollectionDataSuccess(lists))
    })
    .catch((e) => {
      dispatch(loadCollectionDataFailure(e))
    })
  }
}
