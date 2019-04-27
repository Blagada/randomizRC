import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import { withRouter } from 'next/router'

import FormView from '../components/formView'

const CreateMeeting = ({employes})  => (
  <FormView
    employes={employes}
  />
)


CreateMeeting.getInitialProps = async function(context) {

  const API = `https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc`;
  const res = await fetch(API)
  const data = await res.json()
  
  let sheets = data.sheets.map((spreadsheet) => {
    return({
      id: spreadsheet.properties.sheetId,
      name: spreadsheet.properties.title,
    });
  });
  
  const currSheet = sheets.find((sheet) => sheet.id === Number.parseInt(0));

  const API_EMPLOYES = `https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw/values/${currSheet.name}?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc`;
  const resEmployes = await fetch(API_EMPLOYES)  
  const employes = await resEmployes.json()

  let employesList = employes.values.map((user, i) => {
    return({
      id: i,
      name: user[0],
      location: user[1],
      presence: user[2], 
      team: user[3], 
    });
  });
  return {
    employes: employesList,
  }
}

export default CreateMeeting