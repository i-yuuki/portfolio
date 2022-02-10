import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = '今田侑樹のポートフォリオ'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles['pf-under-construction']}>工事中のサイト!! 今後の更新にご期待ください Under Development</div>
      <header className={styles['pf-header']}>
        <div className='container full-height'>
          <div className={styles['pf-navigation-wrapper']}>
            <nav className={styles['pf-navigation']}>
              <Link href='/'>
                <a>
                  <img src='/logo.svg' />
                </a>
              </Link>
              <Link href='/about'>
                <a className={styles['pf-navigation__link']}>
                  <span className={styles['pf-navigation__link__label']}>About</span>
                </a>
              </Link>
              <Link href='/projects'>
                <a className={styles['pf-navigation__link']}>
                  <span className={styles['pf-navigation__link__label']}>Projects</span>
                </a>
              </Link>
              <Link href='/contact'>
                <a className={styles['pf-navigation__link']}>
                  <span className={styles['pf-navigation__link__label']}>Contact</span>
                </a>
              </Link>
            </nav>
            {/* Secondary nav can be placed here */}
          </div>
        </div>
      </header>
      {children}
    </>
  )
}
