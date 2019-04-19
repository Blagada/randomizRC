import Link from 'next/link'
import { connect } from 'react-redux'

import Layout from '../components/Layout';

function HomeView ({
  spreadsheets
}) {
  
  return (
    <Layout
      title="Vue test"
    > 
      <ul>
          {spreadsheets.map(spreadsheet => (
          <li key={spreadsheet.id}>
              <Link as={`/meeting/${spreadsheet.id}`} href={`/viewMeeting?id=${spreadsheet.id}`}>
              <a>{spreadsheet.name}</a>
              </Link>
          </li>
          ))}
      </ul>
    </Layout>
  )
}

const mapStateToProps = ({ spreadsheets }) => ({ spreadsheets })
export default connect(mapStateToProps)(HomeView)

