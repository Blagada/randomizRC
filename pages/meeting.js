import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import { withRouter } from 'next/router'

import { getIsActive } from '../assets/helpers';
import MeetingView from '../components/meetingView'

const Meeting = ({meeting, meetingName, meetingId})  => {
  
  const filterEmployes = meeting.filter(employe => getIsActive(employe.presence) === true)
  const cleanMeeting = meeting.filter(employe => Number(employe.team) === 0)
  
  return (
    <MeetingView
      meeting={meetingId !== 0 ? filterEmployes : cleanMeeting}
      meetingName={meetingName}
      isListEmployes={meetingId === 0 && true}
    />
  )
}

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

  return {
    meeting: meetingArr,
    meetingName: currSheet.name,
    meetingId: currSheet.id,
  }
}

export default Meeting