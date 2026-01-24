'use client'

import styles from './MapSection.module.css'

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.1234567890123!2d106.9154!3d47.8864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDUzJzExLjAiTiAxMDbCsDU0JzU1LjQiRQ!5e0!3m2!1sen!2smn!4v1234567890123!5m2!1sen!2smn"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dream Oasis Location"
        ></iframe>
      </div>
    </section>
  )
}
