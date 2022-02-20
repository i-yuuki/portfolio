import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import SkillMeter from '../components/skill-meter'

export default function About() {
  return (<>
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
        <dl className='skill-list'>
          <dt>Java</dt>
          <dd><SkillMeter value={5} /></dd>
          <dd>もうすぐ10 (11?) 年目 完全独学</dd>
          <dt>C/C++</dt>
          <dd><SkillMeter value={4} /></dd>
          <dd>もうすぐ4年目</dd>
          <dt>C#</dt>
          <dd><SkillMeter value={3} /></dd>
          <dd>もうすぐ3年目 ほぼUnityのみに使用</dd>
          <dt>JavaScript</dt>
          <dd><SkillMeter value={3} /></dd>
          <dd>変数がvarだった頃から使用 ブラウザ・node どちらも嗜む</dd>
          <dt>Lua</dt>
          <dd><SkillMeter value={1} /></dd>
          <dd>数年前に少々</dd>
          <dt>Ruby</dt>
          <dd><SkillMeter value={0} /></dd>
          <dd>数日触っただけ</dd>
        </dl>
        <h2>ツール</h2>
        <dl className='skill-list'>
          <dt>VSCode</dt>
          <dd><SkillMeter value={4} /></dd>
          <dd>毎日使う手放せないエディター</dd>
          <dt>Unity</dt>
          <dd><SkillMeter value={3} /></dd>
          <dd>授業で使用開始</dd>
          <dt>Figma</dt>
          <dd><SkillMeter value={3} /></dd>
          <dd>UI以外の簡易素材制作にも使用</dd>
          <dt>MS Office</dt>
          <dd><SkillMeter value={2} /></dd>
          <dd>ださくない資料づくりを研究</dd>
          <dt>Git Bash</dt>
          <dd><SkillMeter value={2} /></dd>
          <dd>Gitは全部ターミナルから使用</dd>
          <dt>Blender</dt>
          <dd><SkillMeter value={1} /></dd>
          <dd>モデルの確認とかなりシンプルな制作</dd>
        </dl>
      </div>
    </Layout>
    <style jsx>{`
      .skill-list {
        display: grid;
        grid-template-columns: auto auto 1fr;
        gap: 1rem 2rem;
        margin: 1rem 0px;
        padding: 0px;
      }
      .skill-list dt {
        font-weight: bold;
        text-align: right;
      }
      .skill-list dd {
        margin: 0px;
      }
      .skill-bar::-webkit-meter-optimum-value {
        background-color: var(--pf-primary);
      }

      @media screen and (min-width: 768px) {

      }
    `}</style>
  </>)
}
