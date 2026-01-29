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
      </div>
    </header>
  )
}
