'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'ТӨГС БАЯН БҮРД',
      subtitleLeft: 'ТАНЫ ЦАГИЙГ хэмнэнэ',
      subtitleRight: 'хөгжилд хөтөлнө',
      description: 'Dream Oasis нь таны амралт, хооллолт, бизнес уулзалтыг нэг дор цуглуулсан орчин үеийн ресторан болон lounge юм. Бид танд чанартай үйлчилгээ, амттай хоол, тав тухтай орчинг санал болгож байна.',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <div className={styles.imageContainer}>
            <div className={styles.foodImage}></div>
          </div>
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h1 className={styles.title}>{slides[currentSlide].title}</h1>
              <div className={styles.subtitles}>
                <span className={styles.subtitleLeft}>{slides[currentSlide].subtitleLeft}</span>
                <span className={styles.subtitleRight}>{slides[currentSlide].subtitleRight}</span>
              </div>
              <p className={styles.description}>{slides[currentSlide].description}</p>
              <div className={styles.socialSection}>
                <p className={styles.socialText}>FOLLOW ДАРЖ БИДЭНТЭЙ НЭГДЭЭРЭЙ</p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.facebookIcon}>f</a>
                  <a href="#" className={styles.instagramIcon}>ig</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.arrowLeft} onClick={prevSlide}>
          ‹
        </button>
        <button className={styles.arrowRight} onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  )
}
