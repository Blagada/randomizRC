import Link from 'next/link'

import Layout from './layout';

function MeetingView ({
  meetingArr,
  meetingName,
}) {
  
  return (
    <Layout
      title={meetingName}
    >
      {console.log(meetingArr)}
      <ul>
         {meetingArr}
      </ul>
    </Layout>
  )
}

export default MeetingView;
