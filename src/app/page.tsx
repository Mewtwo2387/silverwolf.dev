'use client'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import TabCard from '../components/TabCard'
import TopBar from '../components/TopBar'
import '../styles/globals.css'

enum Tab {
  MAIN = 'main',
  TINY = 'tiny',
  OLD = 'old',
  GAMEJAM = 'gamejam'
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.MAIN)

  const mainProjects = [
    {
      title: "Project 1",
      description: "A sample project demonstrating amazing features",
      link: "/project1"  // Changed from "/projects/project1"
    }
  ]

  const tinyProjects = [
    {
      title: "Project 1",
      description: "A sample project demonstrating amazing features",
      link: "/project1"  // Changed from "/projects/project1"
    }
  ]

  const oldProjects = [
    {
      title: "Project 1",
      description: "A sample project demonstrating amazing features",
      link: "/project1"  // Changed from "/projects/project1"
    }
  ]

  const gamejamProjects = [
    {
      title: "Project 1",
      description: "A sample project demonstrating amazing features",
      link: "/project1"  // Changed from "/projects/project1"
    }
  ]

  return (
    <div>
      <TopBar />
      <div className="pt-24">
        {activeTab === Tab.MAIN && (
          <div className="space-y-6">
            {mainProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            
            <TabCard
              title="Vajrada Amethyst Sliver"
              subtitle="A bunch of tiny projects I did when I'm bored"
              leftImage="/sliver.webp"
              rightImage="/arrow-right.png"
              onClick={() => setActiveTab(Tab.TINY)}
            />
            
            {/* Add other navigation cards similarly */}
          </div>
        )}

        {activeTab === Tab.TINY && (
          <div className="space-y-6">
            {tinyProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            
            <TabCard
              title="Back to Main"
              subtitle="Return to the larger projects"
              leftImage="/arrow-left.png"
              onClick={() => setActiveTab(Tab.MAIN)}
            />
          </div>
        )}

        {/* Add similar sections for other tabs */}

      </div>
    </div>
  )
}