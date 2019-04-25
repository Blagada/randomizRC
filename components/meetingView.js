import Link from 'next/link'

import Layout from './layout';

function MeetingView ({
  spreadsheet
}) {
  
  return (
    <Layout
      title="Rencontre randomizer"
    >
      {console.log(spreadsheet)}
      <ul>
         {spreadsheet.name}
      </ul>
    </Layout>
  )
}

export default MeetingView;
