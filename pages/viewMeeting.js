import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import { withRouter } from 'next/router'

import ViewMeetingView from '../components/viewMeetingView'

const ViewMeeting = ({spreadsheet})  => (
  <ViewMeetingView spreadsheet={spreadsheet}/>
)


ViewMeeting.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const spreadsheet = await res.json()

  console.log(`Fetched show: ${spreadsheet.name}`)
 
  
  return {
    spreadsheet
  }
}

export default ViewMeeting