import Link from 'next/link'

import Layout from './layout';

function MeetingView ({
  meetingArr
}) {
  
  return (
    <Layout
      title="Rencontre randomizer"
    >
      {console.log(meetingArr)}
      <ul>
         {meetingArr}
      </ul>
    </Layout>
  )
}

export default MeetingView;
