import Link from 'next/link'
import { connect } from 'react-redux'

function ViewMeetingView ({
  spreadsheet
}) {
  console.log(spreadsheet);
  return (
    <div>
      Vue test
      <ul>
         {spreadsheet.name}
      </ul>
    </div>
  )
}

export default connect(state => state)(ViewMeetingView)
