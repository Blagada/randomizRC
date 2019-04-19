import { connect } from 'react-redux'
import Link from 'next/link';

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

const mapStateToProps = ({ spreadsheets }) => ({ spreadsheets })
export default connect(mapStateToProps)(HomeView)

