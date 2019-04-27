import Link from 'next/link'

import Layout from './layout';

function MeetingView ({
  meeting,
  meetingName,
}) {
  
  return (
    <Layout
      title={meetingName}
    >
      {console.log(meeting)}
      <ul>
         {meeting[0].name}
      </ul>
    </Layout>
  )
}

export default MeetingView;
