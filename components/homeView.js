import Link from 'next/link'
import { connect } from 'react-redux'

function HomeView ({
  spreadsheets
}) {
  console.log(spreadsheets);
  return (
    <div>
      Vue test
      {JSON.stringify(spreadsheets)}
    </div>
  )
}

export default connect(state => state)(HomeView)
