'use client'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <div className={styles.logoCircle}>
              <div className={styles.logoInner}></div>
            </div>
            <span className={styles.logoText}>Dream Oasis</span>
          </div>
          <nav className={styles.nav}>
            <a href="#about">БИДНИЙ ТУХАЙ</a>
            <a href="#social">НИЙГМИЙН СҮЛЖЭЭ</a>
            <a href="#schedule">ЦАГИЙН ХУВААРЬ</a>
            <a href="#location">БАЙРШИЛ</a>
            <a href="#careers">НЭЭЛТТЭЙ АЖЛЫН БАЙР</a>
          </nav>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButton}>ХООЛ ЗАХИАЛАХ</button>
            <button className={styles.ctaButton}>LOUNGE ЗАХИАЛАХ</button>
          </div>
          <div className={styles.contact}>
            <span className={styles.phone}>+976 12354678</span>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>f</a>
              <a href="#" className={styles.socialIcon}>ig</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
