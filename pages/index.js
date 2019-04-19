import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

import { loadSpreadsheets} from '../actions'
import Link from 'next/link'
import HomeView from '../components/homeView'

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    if (!store.getState().spreadsheets) {
      store.dispatch(loadSpreadsheets());
    }
    return { isServer }
  }

  componentDidMount () {
  }

  render () {

    return (
      <React.Fragment>
        <HomeView />
      </React.Fragment>
    )
  }
}

export default connect()(Index)
