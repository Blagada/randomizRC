import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import { withRouter } from 'next/router'

import MeetingView from '../components/meetingView'

const Meeting = ({meeting, meetingName})  => (
  <MeetingView meeting={meeting} meetingName={meetingName} />
)

Meeting.getInitialProps = async function(context) {
  const { id } = context.query
  const API = `https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc`;
  const res = await fetch(API)
  const data = await res.json()
  
  let sheets = data.sheets.map((spreadsheet) => {
    return({
      id: spreadsheet.properties.sheetId,
      name: spreadsheet.properties.title,
    });
  });

  const currSheet = sheets.find((sheet) => sheet.id === Number.parseInt(id));

  const API_MEETING = `https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw/values/${currSheet.name}?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc`;
  const resMeeting = await fetch(API_MEETING)  
  const meeting = await resMeeting.json()

  let meetingArr = meeting.values.map((user) => {
    return({
      name: user[0],
      location: user[1],
      presence: user[2], 
      team: user[3], 
    });
  });
  console.log(meetingArr);
  console.log(currSheet.name);
  return {
    meeting: meetingArr,
    meetingName: currSheet.name,
  }
}

export default Meeting