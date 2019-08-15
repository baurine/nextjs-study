import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.show.id}`} href={`/post?id=${props.show.id}`}>
      <a>{props.show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        font-family: Arial;
        text-decoration: none;
        color: blue;
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <Link href="/pp/[id]" as="/pp/hello-nextjs">
      <a>hello nextjs</a>
    </Link>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink show={show} key={show.id} />
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: Arial;
      }
      ul {
        padding: 0;
      }
    `}</style>
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
