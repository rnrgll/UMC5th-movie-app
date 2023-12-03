import React from 'react'
import AdPage from '../components/AdPage'
import Weather from '../components/Weather'

export default function Home() {
  return (
    <div className='page-container' style={{fontSize: "32px"}}>
      <AdPage />
      <Weather/>
    </div>
  )
}

