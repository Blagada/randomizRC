import Link from 'next/link'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

function ViewMeeting ({
  id,
}) {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default connect(state => state)(ViewMeeting)
