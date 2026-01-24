'use client'

import styles from './Menu.module.css'

export default function Menu() {
  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <h2 className={styles.title}>МАНАЙ МЕНЮ</h2>
        <div className={styles.menuIcons}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={styles.menuItem}>
              <div className={styles.carIcon}>
                <div className={styles.carBody}></div>
                <div className={styles.flame}></div>
              </div>
              <p className={styles.menuLabel}>FOOD MENU</p>
            </div>
          ))}
        </div>
        <button className={styles.orderButton}>ХООЛ ЗАХИАЛАХ</button>
      </div>
    </section>
  )
}
