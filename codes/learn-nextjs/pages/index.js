import Link from 'next/link'
import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.post.id}`} href={`/post?title=${props.post.title}`}>
      <a>{props.post.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    {
      [
        { id: 'hello-nextjs', title: 'Hello Next.js'},
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        { id: 'deploy-nextjs', title: 'Deploy apps with Zeit'}
      ].map(post => <PostLink post={post} />)
    }
  </Layout>
)

export default Index
