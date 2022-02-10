import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <h1>連絡先</h1>
        <p>(とりあえずダミー)</p>
        <ul>
          <li>メール: me@example.com</li>
          <li>電話: +81 90 0000 0000</li>
          <li>Twitter: @twitter</li>
        </ul>
      </div>
    </Layout>
  )
}
