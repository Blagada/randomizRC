import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import { withRouter } from 'next/router'

import FormView from '../components/formView'

const Meeting = ({spreadsheet})  => (
  <FormView />
)


Meeting.getInitialProps = async function(context) {
    const API = 'https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc'

    const res = await fetch(API)
    const data = await res.json()

    console.log(`Fetched show: ${data}`)
 
    return {}
}

export default Meeting