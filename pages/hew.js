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
        <div className='hew'>
          <div className='hero'>
            <video className='hero-background' autoPlay muted loop playsInline src='./videos/hew.webm'></video>
            <div className='hero-content'>
              <h1 className='rainbow-text'>今田、HEWに出る</h1>
              <p>スクロールして作品概要をチェック！！１</p>
            </div>
          </div>
          <section className="work" style={{backgroundImage: "url(/images/near/banner.png)", "--speed": "1"}}>
            <div className="container">
              <h1 className="rainbow-text">就職作品</h1>
              <p>Near (にあー) と NearLib (にありぶ) は、C++ で DirectX 11 を直接触ったグラフィックの実験集とライブラリで、やや技術よりの作品です。</p>
              <p>Portal 2 のポータルと、 Manifold Garden のステージが縁取りされた見た目を再現しました。</p>
              <p>ライブラリ部は、16行でゲームループを作れるシンプルAPIから勝手に万物を並べてくれるUIシステム、 TextMeshPro <span style={{opacity: "0.3"}}>(とほぼ同じ方法の文字表示)</span> まで豊富に取り揃えています。</p>
              <a href="https://drive.google.com/file/d/1KzW8wdLoPinMXuhS_kWrsIC__ellBgKn/view?usp=sharing" className="cta-button">動画を見る</a>
              <Link href="/projects/near">
                <a className="cta-button">まじめな詳細を読む</a>
              </Link>
            </div>
          </section>
          <section className="work" style={{backgroundImage: "url(/images/ufo/banner.png)", "--speed": "1.5"}}>
            <div className="container">
              <h1 className="rainbow-text">リア充吸引ゲーム</h1>
              <p>Winter UFO はUFOになって冬の街のリア充を吸い取り、地球軍のドローンと撃ち合うゲームです。</p>
              <p>湧き出るリア充を時間内に吸えるだけ吸い取って高スコアを目指そう！</p>
              <p>残り時間半分からは地球軍のドローンがやってくる</p>
              <p>射撃モードに切り替えて反撃だ！</p>
              <p>※プレイには DirectX SDK が必要です</p>
              <a href="https://drive.google.com/file/d/14Sr6fEck9Pcq8y2w1dU1tHqLvEFxFVDE/view?usp=sharing" className="cta-button">プレイ！！</a>
              <Link href="/projects/ufo">
                <a className="cta-button">まじめな詳細を読む</a>
              </Link>
            </div>
          </section>
          <section className="work" style={{backgroundImage: "url(/images/dice/roll.png)", "--speed": "2"}}>
            <div className="container">
              <h1 className="rainbow-text">あのダイスゲーム</h1>
              <p>Dicegame は、合法的にサイコロを投げ、目の特定の組み合わせを作って得点を得るゲーム、の再現です。</p>
              <p>フルボイス＆モザイクアート搭載！その目で確かめよう！ (?)</p>
              <a href="https://drive.google.com/file/d/1Gz6uGZdxsg1CrkZtSYsSEyv5yJJt2QL8/view?usp=sharing" className="cta-button">プレイ！！</a>
            </div>
          </section>
        </div>
        <div className='container'>
          <p className='wtf'>このページなに？？？</p>
        </div>
      </Layout>
      <style jsx>{`
      .hew{
        font-family: 'HGP創英角ﾎﾟｯﾌﾟ体', 'Noto Sans JP', 'Noto Sans CJK JP', 'Roboto', sans-serif;
      }

      .hero{
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }

      .hero-background{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
      }
      
      .hero-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: hero-rotation 5s linear infinite;
      }
      
      @keyframes hero-rotation{
        0%{ transform: rotate(0deg); }
        30%{ transform: rotate(3600deg); }
        100%{ transform: rotate(3600deg); }
      }
      
      .hero-content>p{
        color: #ff0;
        font-size: 2rem;
        text-shadow: 6px 6px 0px #000;
      }
      
      .rainbow-text{
        font-weight: 900;
        text-align: center;
        font-size: 6rem;
        text-shadow: -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff, 2px 2px 0px #fff;
        animation: rainbow-text 1s linear infinite;
      }
      
      @keyframes rainbow-text{
        0%{ color: red; }
        20%{ color: yellow; }
        40%{ color: green; }
        60%{ color: blue; }
        80%{ color: purple; }
        100%{ color: red; }
      }
      
      .cta-button{
        display: inline-block;
        padding: 1rem 2rem;
        background-color: #0f0;
        color: #f00;
        font-weight: bold;
        font-size: 1.5rem;
        border: outset 8px #ff0;
        text-decoration: none;
        vertical-align: middle;
      }

      .cta-button:hover{
        background-color: #0ff;
      }
      
      .work{
        padding: 4rem 0px;
        background-size: 25%;
        background-repeat: repeat;
        animation: work-bg-scroll calc(60s / var(--speed)) linear infinite;
      }
      
      .work p{
        margin: 0px;
        padding: 1rem;
        font-size: 1.5rem;
        background-color: #fff;
      }
      
      @keyframes work-bg-scroll{
        0%{ background-position-x: 0%; }
        100%{ background-position-x: -100%; }
      }

      .wtf{
        margin: 30rem 0px;
        text-align: center;
      }
      `}</style>
    </>
  )
}
