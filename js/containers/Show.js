import React, {PropTypes} from 'react'
import {StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import Show from '../components/Shows/Show'

import {getSingleShowData} from '../store/shows/actions'

import {navigatePush} from '../store/routes/actions'

class ShowContainer extends React.Component {
  static propTypes = {
    navigationState: PropTypes.object.isRequired,
    shows: PropTypes.array.isRequired,
    getSingleShowData: PropTypes.func.isRequired,
  }

  componentWillMount () {
    this.props.getSingleShowData()
  }

  render () {
    const {shows, navigationState} = this.props

    return (
      <Show show={shows[navigationState.selectedShow]} />
    )
  }
}

function mapStateToProps (state) {
  return {
    shows: state.shows,
    navigationState: state.navigationState,
  }
}

function mapActionsToProps (dispatch) {
  return {
    getSingleShowData: (id) => dispatch(getSingleShowData(id)),
    onForward: () => dispatch(navigatePush({key: 'Watch', title: 'Watch'})),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  main: {
    shadowColor: 'transparent',
  },
})

export default connect(mapStateToProps, mapActionsToProps)(ShowContainer)
