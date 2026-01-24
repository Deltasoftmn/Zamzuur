'use client'

import styles from './ScheduleLocation.module.css'

export default function ScheduleLocation() {
  const schedule = [
    { day: 'ДАВАА', time: '08:30 - 00:00' },
    { day: 'МЯГМАР', time: '08:30 - 00:00' },
    { day: 'ЛХАГВА', time: '08:30 - 00:00' },
    { day: 'ПҮРЭВ', time: '08:30 - 00:00' },
    { day: 'БААСАН', time: '08:30 - 00:00' },
    { day: 'БЯМБА', time: '08:30 - 00:00' },
    { day: 'НЕД', time: '08:30 - 00:00' },
  ]

  return (
    <section className={styles.scheduleLocation}>
      <div className={styles.container}>
        <div className={styles.scheduleSection}>
          <h2 className={styles.sectionTitle}>ЦАГИЙН ХУВААРЬ</h2>
          <div className={styles.scheduleList}>
            {schedule.map((item, index) => (
              <div key={index} className={styles.scheduleItem}>
                <span className={styles.day}>{item.day}</span>
                <span className={styles.time}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.locationSection}>
          <h2 className={styles.sectionTitle}>МАНАЙ ХАЯГ БАЙРШИЛ</h2>
          <p className={styles.address}>
            СБД, 8-Р ХОРОО, БАГЦ, ТӨВШИН, ОЙ СЕНТЕР, 202 ТООТ
          </p>
          <button className={styles.mapButton}>Google Map дээр харах</button>
        </div>
      </div>
    </section>
  )
}
