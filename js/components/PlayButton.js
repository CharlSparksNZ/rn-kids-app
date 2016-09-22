import React, {Component, PropTypes} from 'react'

import Button from './Button'
import {playButton} from './Icons'

export default class PlayButton extends Component {
  render () {
    const {outline, color} = this.props

    return (
      <Button
        {...this.props}
        image={
          outline ? playButton[color] : playButton.black
        }
      />
    )
  }
}

PlayButton.propTypes = {
  outline: PropTypes.bool,
  color: PropTypes.string,
}
