import { AppProps } from 'next/app';
import Layout from 'components/layout'
import 'styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  // 共通部分を全ページコンポーネントに当てるために、共通部分のLayoutコンポーネントで囲う
  return (
    <Layout>
      {/* Layoutコンポーネントの子要素が、childrenpropsとして渡される */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
