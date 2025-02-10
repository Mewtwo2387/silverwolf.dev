'use client'

import TopBar from '../components/TopBar'
import '../styles/globals.css'

export default function NotFound() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      </div>
    </div>
  )
}
