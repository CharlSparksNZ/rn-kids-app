import {
  NAV_PUSH,
  NAV_POP,
  NAV_JUMP_TO_KEY,
  NAV_JUMP_TO_INDEX,
  NAV_RESET,
} from './action-types'

export function navigatePush (state) {
  console.log(state)
  state = typeof state === 'string' ? {key: state, title: state} : state
  return {
    type: NAV_PUSH,
    state,
  }
}

export function navigatePop () {
  return {
    type: NAV_POP,
  }
}

export function navigateJumpToKey (key) {
  return {
    type: NAV_JUMP_TO_KEY,
    key,
  }
}

export function navigateJumpToIndex (index) {
  return {
    type: NAV_JUMP_TO_INDEX,
    index,
  }
}

export function navigateReset (routes, index) {
  return {
    type: NAV_RESET,
    index,
    routes,
  }
}
