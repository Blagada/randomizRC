import Link from 'next/link'
import { connect } from 'react-redux'

function ViewMeetingView ({
  spreadsheet
}) {
  
  return (
    <div>
      Vue test
      <ul>
         {spreadsheet.name}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ spreadsheet }) => ({ spreadsheet })
export default connect(mapStateToProps)(ViewMeetingView)
