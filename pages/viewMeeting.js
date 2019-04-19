import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

import { loadSpreadsheet} from '../actions'
import Link from 'next/link'
import ViewMeetingView from '../components/viewMeetingView'


class ViewMeeting extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer, query } = props.ctx
    if (!store.getState().spreadsheet) {
      store.dispatch(loadSpreadsheet(query.id));
    }
    return { isServer }
  }

  componentDidMount () {
  }

  render () {
    return (
      <React.Fragment>
        <ViewMeetingView />
      </React.Fragment>
    )
  }
}

export default connect(state => state)(ViewMeeting)
