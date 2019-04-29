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
    
    {Array.from(grouped).map((value, i) => {
      console.log(value);
      return (
      <div key={`team${i}`}>
        <SectionTitle
          title="Équipe"
        />
        <List
          isEmployes
          spreadsheets={value}
        />
      </div>
      );
    })}
    </Layout>
  )
}

export default MeetingView;
