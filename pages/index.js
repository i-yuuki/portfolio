import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/hero'
import Typewriter from 'typewriter-effect'

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <div className='pf-hero-wrapper'>
          <Hero video='/videos/hero.webm'>
            <div className='pf-hero__group'>
              <h1><Typewriter options={{
                strings: [
                  'C++でゲームを作ります',
                  'C#でゲームを作ります',
                  'JavaScriptでプチツールを作ります',
                ],
                autoStart: true,
                loop: true,
                pauseFor: 3000,
                delay: 50,
                deleteSpeed: 30,
              }} /></h1>
              <span>今田侑樹のポートフォリオ</span>
            </div>
            <Link href='/projects'>
              <a className='cta-button'>すべての作品を見る</a>
            </Link>
          </Hero>
        </div>
      </Layout>
      <style jsx>{`
        .pf-hero-wrapper{
          height: calc(100vh - 4rem);
          overflow-y: auto;
          scroll-snap-type: y mandatory;
        }
        .pf-hero__group{
          display: flex;
          flex-direction: column;
          text-shadow: 0px 0px 3px rgb(32, 32, 32, 0.5), 0px 0.1em rgb(32, 32, 32, 0.5);
        }
        .pf-hero__group>*{
          margin: 0px;
        }
        .cta-button{
          display: inline-block;
          padding: 1rem 2rem;
          background-color: rgba(255, 255, 255, 0.75);
          color: #000;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.1s ease;
        }
        .cta-button:hover{
          background-color: rgba(255, 255, 255, 0.85);
        }
      `}</style>
    </>
  )
}
