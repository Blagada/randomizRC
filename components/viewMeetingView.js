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

export default ViewMeetingView;
