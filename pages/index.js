import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout/'
import HomeView from '../components/homeView'


const Index = ({spreadsheets}) => (
    <HomeView spreadsheets={spreadsheets} />
  )

  Index.getInitialProps = async function() {
    const API = 'https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc'

    const res = await fetch(API)
    const data = await res.json()

    let cleanSpreadsheets = data.sheets.map((spreadsheet) => {
      return({
        id: spreadsheet.properties.sheetId,
        name: spreadsheet.properties.title,
      });
    });  
    
    return {
      spreadsheets: cleanSpreadsheets.map(spreadsheet => spreadsheet)
    }
  }

  export default Index