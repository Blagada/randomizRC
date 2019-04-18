import fetch from 'isomorphic-unfetch'
import styled from 'styled-components';
import { withRouter } from 'next/router'

import Layout from '../components/layout/'

const ViewMeeting = ({
  show,
}) => (
  <Layout
    title={show.name}
  >
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} />
  </Layout>
)


ViewMeeting.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default ViewMeeting