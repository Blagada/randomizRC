import Link from 'next/link'
import { connect } from 'react-redux'

import Layout from '../components/layout';

function ViewMeetingView ({
  spreadsheet
}) {
  
  return (
    <Layout
      title="Vue test"
    >
      {console.log(spreadsheet)}
      <ul>
         {spreadsheet.name}
      </ul>
    </Layout>
  )
}

const mapStateToProps = ({ spreadsheet }) => ({ spreadsheet })
export default connect(mapStateToProps)(ViewMeetingView)
