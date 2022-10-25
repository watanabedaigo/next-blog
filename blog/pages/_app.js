import Layout from 'components/layout'

function MyApp({ Component, pageProps }) {
  // 共通部分を全ページコンポーネントに当てるために、共通部分であるLayoutコンポーネントで囲う
  return (
    <Layout>
      {/* Layoutコンポーネントの子要素が、childrenpropsとして渡される */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
