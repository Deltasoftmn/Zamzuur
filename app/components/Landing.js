'use client'

import styles from './Landing.module.css'

export default function Landing({ onVisitWebsite, onOrderFood }) {
  return (
    <section className={styles.landing}>
      <div className={styles.buildingContainer}>
        <div className={styles.buildingImage}></div>
        <div className={styles.overlay}>
          <div className={styles.logoContainer}>
            <div className={styles.logoMain}>
              <div className={styles.logoCircle}>
                <div className={styles.logoInner}></div>
              </div>
              <div className={styles.logoText}>
                <span className={styles.dream}>Dream</span>
                <span className={styles.oasis}>Oasis</span>
              </div>
            </div>
            <div className={styles.logoBackground}>
              <div className={styles.logoBgCircle}></div>
              <div className={styles.logoBgText}>
                <span className={styles.bgDream}>Dream</span>
                <span className={styles.bgOasis}>Oasis</span>
                <span className={styles.est}>EST. 2018</span>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.websiteButton} onClick={onVisitWebsite}>
              ВЭБ САЙТААР ЗОЧЛОХ
            </button>
            <button className={styles.orderButton} onClick={onOrderFood}>
              ХООЛ ЗАХИАЛГА
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
