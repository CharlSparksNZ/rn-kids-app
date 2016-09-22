import leftPad from 'left-pad'

const black = '#000000'
const white = '#FFFFFF'

const offWhite = '#DCDCDC'
const notWhite = '#EDEDED'

const darkGrey = '#212121'
const extraDarkGrey = '#151515'
const lightGrey = '#313030'

const yellow = '#FED235'
const blue = '#4EBDE1'

export const shadow = black

export const dark = darkGrey
export const offdark = extraDarkGrey
export const darkline = lightGrey

export const light = white
export const offlight = offWhite
export const offlight2 = notWhite

export const primary = yellow

export function alpha (color, opacity) {
  return color + leftPad(Math.floor(opacity * 255).toString(16), 2, '0')
}
