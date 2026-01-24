'use client'

import { useState } from 'react'
import Landing from './components/Landing'
import Header from './components/Header'
import Hero from './components/Hero'
import Exterior from './components/Exterior'
import Menu from './components/Menu'
import ScheduleLocation from './components/ScheduleLocation'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import FoodMenu from './components/FoodMenu'

export default function Home() {
  const [view, setView] = useState('landing') // 'landing', 'website', 'menu'

  const handleVisitWebsite = () => {
    setView('website')
  }

  const handleOrderFood = () => {
    setView('menu')
  }

  const handleBack = () => {
    setView('landing')
  }

  if (view === 'landing') {
    return (
      <main>
        <Landing onVisitWebsite={handleVisitWebsite} onOrderFood={handleOrderFood} />
      </main>
    )
  }

  if (view === 'menu') {
    return (
      <main>
        <FoodMenu onBack={handleBack} />
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Hero />
      <Exterior />
      <Menu />
      <ScheduleLocation />
      <MapSection />
      <Footer />
    </main>
  )
}
