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
      title: "Imperial CS Grade Tracker",
      description: "Grade Tracker for Y1 and Y2 Computing. The only useful thing in this list.",
      link: "/Tracker",
      hoverText: "Click to enter!",
      status: "Completed and maintained",
      statusType: "online"
    },
    {
      title: "Avaritilax 4",
      description: "4th game of the Idle Snorlax series. An idle incremental game about feeding a Snorlax, with additional minigames such as mining, crafting, gacha, missions, and more!",
      link: "/Avaritilax",
      hoverText: "Click to play!",
      status: "Alpha 1.1.3. Development halted, beta soon™",
      statusType: "online"
    },
    {
      title: "Silverwolf Bot",
      description: "A multipurpose discord bot made by Ei and Xei with... a lot of gambling. And 90 other useless commands.",
      link: "/Silverwolf",
      hoverText: "Click for more info!",
      status: "Active Development",
      statusType: "online"

    },
    {
      title: "Silverwolf.dev",
      description: "This website.",
      link: "/",
      hoverText: "Click to enter this website in which you can click to enter this website",
      status: "Actively Maintained",
      statusType: "online"
    },
    {
      title: "QueQat",
      description: "An AI made with Deep Q-Learning, used to reduce queueing time in multi-queue systems where different people have different service times, such as supermarkets. QueQat can assign customers to queues based on their service time, and can reduce the total waiting time by approximately 20%.",
      link: "/QueQat",
      hoverText: "Click for more info!",
      status: "Completed, but server is offline.",
      statusType: "offline"
    },
    {
      title: "DseGPT",
      description: "A website to assist English teachers in marking essays, using ChatGPT. It will give a grade and help teachers write comments based on custom marking schemes and instructions, while also providing grammar corrections and sample rewrites.",
      link: "/DseGPT",
      hoverText: "Click for nothing.",
      status: "It's from my internship 2 years ago, but eh, it's probably dead.",
      statusType: "discontinued"
    },
    {
      title: "Project Keqei",
      description: "An online multiplayer turn-based RPG 6v6 gacha game, featuring members from TheGenshinPlace (and OC made by the members) as the characters. The storyline focuses on Ei breaking the fourth wall and excaping the world, while Keq and the egirls trying to fix the glitches and diasters caused by Ei.",
      link: "/ProjectKeqei",
      hoverText: "Click for the dead game.",
      status: "Discontinued",
      statusType: "discontinued"
    }
  ]

  const tinyProjects = [
    {
      title: "Keqboard",
      description: `A completely useless program that "translates" stuff into weirder stuff (,,,,,,ffffffuwut9s[ wedwieuwu[ otni[ ffffffuwut9s[ "9setw9snwt"[ tht[ mwgowp[ 9s9sewe9suwu[ eiwetewpmoc[  ,,,!!!eifmoo iah)`,
      link: "/Keqboard",
      hoverText: "Click to enter!",
      status: "Adding stuff whenever I find another weird keyboard",
      statusType: "online"
    },
    {
      title: "Binary Collatz Sequence",
      description: "The Collatz Sequence forms some cool pattern in binary for big numbers. For those that want to go through the unavoidable process of attempting to solve the conjecture and failing.",
      link: "/Collatz",
      hoverText: "Click to enter!",
      status: "Completed",
      statusType: "online"
    },
    {
      title: "Register Machines",
      description: "Simulate register machines for Imperial College's COMP50003 module",
      link: "/RM",
      hoverText: "Click to enter!",
      status: "Completed",
      statusType: "online"
    }
  ]


  const oldProjects = [
    {
      title: "Ei Bot",
      description: "A bot made for TGP's Basement.",
      link: "/Ei",
      hoverText: "Click to check the code i guess",
      status: "Discontinued, replaced by Silverwolf Bot",
      statusType: "discontinued"
    },
    {
      title: "Idle Snorlax 3",

      description: "The third game of the Idle Snorlax series. Made when I first learned HTML.",
      link: "/SC3",
      hoverText: "Click to play! But why would you? There's Avaritilax 4 up there.",
      status: "Discontinued, replaced by Avaritilax 4",
      statusType: "discontinued"
    },
    {
      title: "Idle Snorlax 2",
      description: "The second game of the Idle Snorlax series. Made in App Inventor 2, 0.1 Amber Eras ago.",
      link: "/SC2",
      hoverText: "Click to download the .apk for android! (No virus fr, trust me)",
      status: "Discontinued, replaced by Idle Snorlax 3",
      statusType: "discontinued"
    },
    {
      title: "Idle Snorlax 1",
      description: "The first game of the Idle Snorlax series. Made in App Inventor 2, >0.1 Amber Eras ago.",
      link: "/SC1",
      hoverText: "Click to download the .apk for android! (No virus fr, trust me)",
      status: "Discontinued, replaced by Idle Snorlax 2",
      statusType: "discontinued"
    }
  ]

  const gamejamProjects = [
    {
      title: "Idle Bubble",
      description: "Made for the 2025 Global Game Jam with theme 'Bubble'. Idle Bubble is an idle incremental game where you earn credits by popping rising bubbles, which can be used to buy various upgrades increasing the value and frequency of bubbles, and unlock different bubble variants.",
      link: "/Bubble",
      hoverText: "Click to play!",
      status: "Completed",
      statusType: "online"
    },
    {
      title: "Meme Warrior",
      description: "Imperial GameDev Society's game for the 2024 Global Game Jam. The topic this year is 'Make me laugh', which is kinda hard and limited compared to the previous years. Our idea was to use memes to 'attack' a lawyer that banned memes to defeat him by making him laugh.",
      link: "https://stanly-c.itch.io/meme-warrior",
      hoverText: "Click to play!",
      status: "Completed",
      statusType: "online"
    }
  ]

  return (
    <div>
      <TopBar />
      <div className="pt-24">
        {activeTab === Tab.MAIN && (
          <div className="space-y-6 pb-8">
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