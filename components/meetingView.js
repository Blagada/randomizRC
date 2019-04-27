import Link from 'next/link'

import Layout from './layout';
import List from './List';

function MeetingView ({
  meeting,
  meetingName,
}) {
  
  return (
    <Layout
      title={meetingName}
    >
      <List
        spreadsheets={meeting}
        isEmployes
      />
    </Layout>
  )
}

export default MeetingView;
