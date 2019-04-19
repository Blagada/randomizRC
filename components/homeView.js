import Link from 'next/link'
import { connect } from 'react-redux'

function HomeView ({
  spreadsheets
}) {
  console.log(spreadsheets);
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

export default connect(state => state)(HomeView)
