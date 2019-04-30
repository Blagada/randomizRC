import Link from 'next/link'

import Layout from './layout';
import List from './List';
import SectionTitle from './SectionTitle'

import { groupBy, getGroupedArray } from '../assets/helpers';

function MeetingView ({
  meeting,
  meetingName,
}) {
  if (!meeting) {
    return "La rencontre que vous demandez n'est plus disponible"
  }
  
  const teams = getGroupedArray(meeting, team => team.team);

  return (
    <Layout
      title={meetingName}
    >

    {teams.map((team, i) => {
      return (
      <div key={`team${i}`}>
        <SectionTitle
          title={`Équipe ${team.name}`}
        />
        <List
          isEmployes
          items={team.members}
        />
      </div>
      );
    })}
    </Layout>
  )
}

export default MeetingView;
