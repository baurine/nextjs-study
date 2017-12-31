import Header from './Header'

const layoutStyle = {
  padding: 20,
  magrin: 20,
  border: "1px solid #DDD"
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
