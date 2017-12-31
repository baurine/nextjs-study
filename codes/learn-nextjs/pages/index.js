import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.show.id}`} href={`/post?id=${props.show.id}`}>
      <a>{props.show.name}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      { props.shows.map(({show}) => <PostLink show={show} key={show.id}/>) }
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
