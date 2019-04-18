import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout/'


const Index = (props) => (
    <Layout
      title="RandomizRC"
    >
        <div>
            <ul>
                {props.shows.map(show => (
                <li key={show.id}>
                    <Link as={`/meeting/${show.id}`} href={`/viewMeeting?id=${show.id}`}>
                    <a>{show.name}</a>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    </Layout>
  )

  Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    //const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw/values/A1%3AC10?key=AIzaSyAggofevpmIVp5sKCoD_Lkp2f-vaFfjICc')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data.map(entry => entry.show)
      //values: data.map(entry => entry.value)
    }
  }

  export default Index