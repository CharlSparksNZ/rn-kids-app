import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Collections from '../../components/Collections'

import {getCollectionData} from '../../store/collections/actions'
import * as router from '../../store/routes/actions'

class CollectionsContainer extends Component {
  static propTypes = {
    collectionData: PropTypes.object.isRequired,
    navigationState: PropTypes.object.isRequired,
    getCollectionData: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this._onPressShow = this._onPressShow.bind(this)
  }

  componentDidMount () {
    this.props.getCollectionData()
  }

  _onPressShow (show) {
    this.props.navigationState.push(router.getShowRoute(show))
  }

  render () {
    const {lists} = this.props.collectionData

    return (
      <Collections lists={lists} onPressShow={this._onPressShow} />
    )
  }
}

function mapStateToProps (state) {
  return {
    collectionData: state.collections,
    navigationState: state.navigationState,
  }
}

function mapActionsToProp (dispatch) {
  return {
    getCollectionData: () => dispatch(getCollectionData()),
  }
}

export default connect(mapStateToProps, mapActionsToProp)(CollectionsContainer)
