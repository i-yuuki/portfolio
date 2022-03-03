import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function HewPage() {
  return (
    <>
      <Head>
        <title>今田、HEWに出る 特設サイト</title>
      </Head>
      <Layout>
        <div className='container'>
          <h1>今田、HEWに出る</h1>
          <p>3月4日 OPEN (したい)</p>
        </div>
      </Layout>
    </>
  )
}
