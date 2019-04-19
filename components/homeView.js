import Link from 'next/link'
import { connect } from 'react-redux'

function HomeView ({
  spreadsheets
}) {
  
  return (
    <div>
      Vue test
      <ul>
          {spreadsheets.map(spreadsheet => (
          <li key={spreadsheet.id}>
              <Link as={`/meeting/${spreadsheet.id}`} href={`/viewMeeting?id=${spreadsheet.id}`}>
              <a>{spreadsheet.name}</a>
              </Link>
          </li>
          ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ spreadsheets }) => ({ spreadsheets })
export default connect(mapStateToProps)(HomeView)

