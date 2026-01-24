'use client'

import styles from './Exterior.module.css'

export default function Exterior() {
  return (
    <section className={styles.exterior}>
      <div className={styles.imageContainer}>
        <div className={styles.buildingImage}></div>
        <div className={styles.textOverlay}>
          <h2 className={styles.title}>RESTAURANT & LOUNGE</h2>
          <div className={styles.dots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </div>
    </section>
  )
}
