import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout/'
import HomeView from '../components/homeView'


const Index = ({spreadsheets}) => (
    <HomeView spreadsheets={spreadsheets} />
  )

  Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    let cleanSpreadsheets = data.map((spreadsheet) => {
      return({
        id: spreadsheet.show.id,
        name: spreadsheet.show.name,
      });
    });
    
    /*const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc')
    const data = await res.json()
    
    let cleanSpreadsheets = data.map((spreadsheet) => {
      return({
        id: spreadsheet.sheets.properties.sheetId,
        name: spreadsheet.sheets.properties.title,
      });
    });*/

    return {
      spreadsheets: cleanSpreadsheets.map(spreadsheet => spreadsheet)
    }
  }

  export default Index