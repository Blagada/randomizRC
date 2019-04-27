import Link from 'next/link';

import ActionLink from '../components/ActionLink';
import Layout from '../components/layout';
import List from '../components/List';
import SectionTitle from '../components/SectionTitle';

function HomeView ({
  spreadsheets
}) {
  
  return (
    <Layout
      title="RandomizRC"
      withReturnLink={false}
    > 
      <ActionLink
        link={`/creer-rencontre/`}
        path={`/createMeeting`}
        label="Créer une rencontre"
      />
      {spreadsheets && (
        <>
          <SectionTitle
            title={spreadsheets.length > 1 ? 'Rencontres actives' : 'Rencontre active'}
          />
          <List
            spreadsheets={spreadsheets}
          />
        </>
      )}
    </Layout>
  )
}

export default HomeView;

