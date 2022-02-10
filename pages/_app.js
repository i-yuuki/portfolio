// グローバルスタイルを適用するコンポーネント
// ヘッダーフッターとかつけるなら各ページでLayoutで包む

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
