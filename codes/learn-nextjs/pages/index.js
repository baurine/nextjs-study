import Link from 'next/link'
import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    {
      [
        'Hello Next.js',
        'Learn Next.js is awesome',
        'Deploy apps with Zeit'
      ].map(title => <PostLink title={title} />)
    }
  </Layout>
)

export default Index
