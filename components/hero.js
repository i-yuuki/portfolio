import styles from './hero.module.css'

export default function Hero(props) {
  return (
    <section className={styles['pf-hero']}>
      {props.background && <div className={styles['pf-hero-background']} style={{backgroundImage: `url(${props.background})`}}></div>}
      {props.video && <video muted autoPlay loop src={props.video} className={styles['pf-hero-background']}></video>}
      {props.children}
    </section>
  )
}
