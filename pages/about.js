import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className='container'>
        <h1>
          <ruby>今田<rp>(</rp><rt>いまだ</rt><rp>)</rp></ruby>
          <ruby>侑樹<rp>(</rp><rt>ゆうき</rt><rp>)</rp></ruby>
        </h1>
        <div>HAL東京 ゲーム4年制学科 ゲーム制作専攻 3年</div>
        <h2>資格</h2>
        <ul>
          <li>基本情報技術者</li>
          <li>応用情報技術者</li>
          <li>CGエンジニア検定 ベーシック</li>
          <li>CGエンジニア検定 エキスパート</li>
        </ul>
        <h2>言語</h2>
        <ul>
          <li>Java</li>
          <li>C/C++</li>
          <li>C#</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </ul>
        <h2>ツール</h2>
        <ul>
          <li>VSCode</li>
          <li>Unity</li>
          <li>Figma</li>
          <li>MS Office</li>
          <li>Git Bash</li>
          <li>Blender</li>
        </ul>
      </div>
    </Layout>
  )
}
