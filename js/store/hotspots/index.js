import {
  FETCH_HOTSPOT_DATA, FETCH_HOTSPOT_SUCCESS, FETCH_HOTSPOT_FAILURE,
} from './action-types'

const HOTSPOT_DATA = [{
  title: 'Outlander',
  category: 'Drama',
  description: `A time-travelling adventure that pitches married WWII nurse
  Claire back 200 years to the Scottish highlands where she falls for a handsome
  warrior and must work out how to navigate her two irreconcilable lives for her
  own safety, and the course of history.`,
}, {
  title: 'Breaking Bad',
  category: 'Drama, Crime',
  description: `After he is diagnosed with lung cancer, a chemistry genius turned
  high school teacher teams up with an ex-student to cook and sell the world\'s
  purest crystal meth.`,
}, {
  title: 'The Path',
  category: 'Drama',
  description: `Aaron Paul (Breaking Bad) plays Eddie, a man with a wayward past
  who is converted to a controversial cult co-led by his wife Sarah
  (Michelle Monaghan) and the charismatic Cal (Hugh Dancy).`,
}, {
  title: 'The Mindy Project',
  category: 'Comedy',
  description: `Comedian Mindy Kaling plays a successful Manhatten gynaecologist
  obsessed with the important things in life - celebrity, fashion and getting
  her romantic comedy ending.`,
}, {
  title: 'Friday Night Dinner',
  category: 'Comedy',
  description: `Two prank-loving brothers return to their eccentric Jewish family
  home for a weekly meal, often interrupted by their creepy neighbour.`,
}, {
  title: 'Call The Midwife',
  category: 'Drama',
  description: `Newly qualified midwife Jenny and her young colleagues play a
  vital role in helping an impoverished East London community in the 1950s and
  1960s. Whatever life\'s challenges, new babies are born.`,
}]

const initialHotspotState = {
  hotspots: HOTSPOT_DATA,
  loading: true,
}

export default function hotspotState (state = initialHotspotState, action) {
  switch (action.type) {
    case FETCH_HOTSPOT_DATA:
      return {
        ...state,
        loading: true,
      }

    case FETCH_HOTSPOT_SUCCESS:
      const hotspots = action.data
      return {
        ...state,
        hotspots: hotspots.map((hotspot, i) => ({
          ...hotspot,
          ...HOTSPOT_DATA[i % HOTSPOT_DATA.length],
          showId: parseInt(hotspot.showId, 10),
        })),
        loading: false,
      }

    case FETCH_HOTSPOT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}
