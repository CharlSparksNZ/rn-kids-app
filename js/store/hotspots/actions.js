import {
  FETCH_HOTSPOT_DATA,
  FETCH_HOTSPOT_SUCCESS,
  FETCH_HOTSPOT_FAILURE,
} from './action-types'

import graphql from '../graphql'

function loadHotSpotData () {
  return {
    type: FETCH_HOTSPOT_DATA,
  }
}

function loadHotSpotDataSuccess (data) {
  return {
    type: FETCH_HOTSPOT_SUCCESS,
    data,
  }
}

function loadHotSpotDataFailure (e) {
  return {
    type: FETCH_HOTSPOT_FAILURE,
    error: e,
  }
}


export function getHotspotData () {
  return (dispatch) => {
    dispatch(loadHotSpotData())
    return graphql(`{
      config {
        homePage {
          hotspot {
            title
            showTitle
            showButton
            autoslideDuration
            autoslide
            slides {
              id
              showId
              heading
              subheading
              description
              link
              buttonText
              hideButtons
              flag
              displayCategories
              copyright
              image {
                mobile
                mobileHD
                tablet
                tabletHD
                desktop
                desktopHD
              }
            }
          }
        }
      }
    }`)
  .then((response) => {
    console.log(response)
    const hotspots = response.data.config.homePage.hotspot.slides
    dispatch(loadHotSpotDataSuccess(hotspots))
  })
  .catch((e) => {
    dispatch(loadHotSpotDataFailure(e))
  })
  }
}
