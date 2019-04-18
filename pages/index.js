import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout/'


const Index = (props) => (
    <Layout>
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
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data.map(entry => entry.show)
    }
  }

  export default Index