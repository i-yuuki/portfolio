import styles from './hero.module.css'

export default function Hero(props) {
  return (
    <section className={styles['pf-hero']} style={{backgroundImage: `url(${props.background})`}}>
      {props.children}
    </section>
  )
}
