import Link from 'next/link'

import Layout from './layout';
import List from './List';
import SectionTitle from './SectionTitle'

import { groupBy } from '../assets/helpers';

function MeetingView ({
  meeting,
  meetingName,
}) {
  if (!meeting) {
    return "La rencontre que vous demandez n'est plus disponible"
  }
  
  const grouped = groupBy(meeting, team => team.team);
  
  return (
    <Layout
      title={meetingName}
    >
    
    {grouped.forEach(function(value) {
      <>
        <SectionTitle
          title={value.team}
        />
        <List
          isEmployes
          spreadsheets={value}
        />
      </>
    })}
    </Layout>
  )
}

export default MeetingView;
