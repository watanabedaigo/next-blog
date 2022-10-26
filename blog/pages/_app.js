import Layout from 'components/layout'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // 共通部分を全ページコンポーネントに当てるために、共通部分のLayoutコンポーネントで囲う
  return (
    <Layout>
      {/* Layoutコンポーネントの子要素が、childrenpropsとして渡される */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
