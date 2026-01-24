'use client'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoCircle}>
            <div className={styles.logoInner}></div>
          </div>
          <span className={styles.logoText}>Dream Oasis</span>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.address}>
            СБД, 8-Р ХОРОО, БАГЦ, ТӨВШИН, ОЙ СЕНТЕР, 202 ТООТ
          </p>
          <p className={styles.phone}>+976 12354678</p>
          <p className={styles.email}>info@dreamoasis.mn</p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>f</a>
            <a href="#" className={styles.socialIcon}>ig</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
