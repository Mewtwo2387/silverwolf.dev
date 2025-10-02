'use client'

import { useEffect, useRef, useState } from 'react'
import TopBar from '../../components/TopBar'
import '../../styles/globals.css'

export default function QueQat() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [selectedScenario, setSelectedScenario] = useState<'scenario1' | 'scenario2'>('scenario1')
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    Object.values(elementsRef.current).forEach((element) => {
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const setElementRef = (id: string) => (element: HTMLElement | null) => {
    elementsRef.current[id] = element
  }

  return (
    <div>
      <TopBar />
      <div className="container mx-auto px-4 py-4 pt-24">
        <h1 className="text-5xl font-bold pb-4 text-white">QueQat</h1>

        <h2 className="text-2xl font-bold pb-4 text-white">An AI to optimize queue management</h2>
        
        <div className="flex justify-start mb-8">
          <img src="/queqat/meow.jpg" alt="Meow" className="rounded-lg shadow-lg w-1/5 h-auto" />
        </div>
        
        <div className="space-y-6 text-white">
          <div 
            id="what"
            ref={setElementRef('what')}
            className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-700 ease-out transform ${
              isVisible['what'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-400">What...?</h2>
            <p className="text-lg leading-relaxed">
              QueQat is an AI system built using Deep Q-Learning that optimizes queue management in multi-queue systems. 
              The system strategically assigns customers to different queues based on their predicted service times and current queue states, reducing average waiting times by over 30% compared to existing strategies.
            </p>
          </div>

          <div 
            id="how"
            ref={setElementRef('how')}
            className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-700 ease-out transform delay-100 ${
              isVisible['how'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-green-400">How...?</h2>
            <p className="text-lg leading-relaxed mb-6">
              Imagine the following scenario with 3 empty queues, and 5 customers walking in, their service times being 10, 10, 10, 3, 3 respectively.
            </p>
            
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400 mb-2">Queue System</div>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400">Queue 1</div>
                      <svg width="80" height="25" className="mx-auto">
                        <rect x="10" y="2" width="60" height="20" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                        <text x="40" y="15" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      </svg>
                      <div className="text-xs text-gray-400">Queue 2</div>
                      <svg width="80" height="25" className="mx-auto">
                        <rect x="10" y="2" width="60" height="20" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                        <text x="40" y="15" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      </svg>
                      <div className="text-xs text-gray-400">Queue 3</div>
                      <svg width="80" height="25" className="mx-auto">
                        <rect x="10" y="2" width="60" height="20" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                        <text x="40" y="15" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      </svg>
                    </div>
                  </div>
                
                <div className="flex items-center">
                  <svg width="60" height="40" className="text-blue-400">
                    <polygon points="50,10 50,30 10,20" fill="currentColor"/>
                    <line x1="50" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="3"/>
                  </svg>
                </div>
                
                <div className="flex space-x-2">
                  <svg width="60" height="35" className="mx-1">
                    <rect x="5" y="5" width="50" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                    <text x="30" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                  </svg>
                  <svg width="60" height="35" className="mx-1">
                    <rect x="5" y="5" width="50" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                    <text x="30" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                  </svg>
                  <svg width="60" height="35" className="mx-1">
                    <rect x="5" y="5" width="50" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                    <text x="30" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                  </svg>
                  <svg width="60" height="35" className="mx-1">
                    <rect x="5" y="5" width="50" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                    <text x="30" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                  </svg>
                  <svg width="60" height="35" className="mx-1">
                    <rect x="5" y="5" width="50" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                    <text x="30" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              If we let them choose their own queues, the 3 customers with service time 10 will obviously choose all 3 empty queues, and the 2 customers with service time 3 will have to wait for the customers with service time 10 to finish, despite having a shorter service time. The total waiting time will be 20.
            </p>
            
            <div className="mb-8">
              <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Queue 1</div>
                    <svg width="400" height="40" className="mx-auto">
                      <rect x="10" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                      <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                      <rect x="80" y="10" width="60" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                      <text x="110" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                      <rect x="150" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="180" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="220" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="250" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                    </svg>
                    <div className="text-xs text-gray-400 mt-2 text-center">Wait: 0 + 10 = 10</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Queue 2</div>
                    <svg width="400" height="40" className="mx-auto">
                      <rect x="10" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                      <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                      <rect x="80" y="10" width="60" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                      <text x="110" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                      <rect x="150" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="180" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="220" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="250" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                    </svg>
                    <div className="text-xs text-gray-400 mt-2 text-center">Wait: 0 + 10 = 10</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Queue 3</div>
                    <svg width="400" height="40" className="mx-auto">
                      <rect x="10" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                      <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                      <rect x="80" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="110" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="150" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="180" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="220" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="250" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                    </svg>
                    <div className="text-xs text-gray-400 mt-2 text-center">Wait: 0</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              However, if we instead assign the customers with service time 10 to queue 1 and 2 only, leaving queue 3 empty for the customers with service time 3, the total waiting time will be 13. This is a reduction of the total waiting time at a compromise of one person having to wait longer.
            </p>


            <div className="mb-6">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Queue 1</div>
                    <svg width="400" height="40" className="mx-auto">
                      <rect x="10" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                      <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                      <rect x="80" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                      <text x="110" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                      <rect x="150" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="180" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="220" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="250" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                    </svg>
                    <div className="text-xs text-gray-400 mt-2 text-center">Wait: 0 + 10 = 10</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Queue 2</div>
                    <svg width="400" height="40" className="mx-auto">
                      <rect x="10" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                      <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                      <rect x="80" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="110" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="150" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="180" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="220" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="250" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                    </svg>
                    <div className="text-xs text-gray-400 mt-2 text-center">Wait: 0</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Queue 3</div>
                    <svg width="400" height="40" className="mx-auto">
                      <rect x="10" y="10" width="60" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                      <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                      <rect x="80" y="10" width="60" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                      <text x="110" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                      <rect x="150" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="180" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="220" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="250" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                      <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                      <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                    </svg>
                    <div className="text-xs text-gray-400 mt-2 text-center">Wait: 0 + 3 = 3</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Now imagine more complicated queues, and we do not know when the next customer will come in or how long they will take to serve. How should we assign the current customer to minimize the total waiting time?
            </p>

             <div className="mb-6">
               <div className="bg-gray-900/50 rounded-lg p-4">
                 <div className="flex items-center justify-center space-x-8">
                   <div className="space-y-4">
                     <div>
                       <div className="text-sm text-gray-400 mb-2">Queue 1</div>
                       <svg width="400" height="40" className="mx-auto">
                         <rect x="10" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                         <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                         <rect x="80" y="10" width="60" height="25" fill="#ef2222" stroke="#fff" strokeWidth="2"/>
                         <text x="110" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">12</text>
                         <rect x="150" y="10" width="60" height="25" fill="#ef0000" stroke="#fff" strokeWidth="2"/>
                         <text x="180" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">15</text>
                         <rect x="220" y="10" width="60" height="25" fill="#bb0000" stroke="#fff" strokeWidth="2"/>
                         <text x="250" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">20</text>
                         <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                         <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                       </svg>
                     </div>
                     
                     <div>
                       <div className="text-sm text-gray-400 mb-2">Queue 2</div>
                       <svg width="400" height="40" className="mx-auto">
                       <rect x="10" y="10" width="60" height="25" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                         <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
                         <rect x="80" y="10" width="60" height="25" fill="#ef5555" stroke="#fff" strokeWidth="2"/>
                         <text x="110" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">9</text>
                         <rect x="150" y="10" width="60" height="25" fill="#bb0000" stroke="#fff" strokeWidth="2"/>
                         <text x="180" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">20</text>
                         <rect x="220" y="10" width="60" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                         <text x="250" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                         <rect x="290" y="10" width="60" height="25" fill="#64748b" stroke="#fff" strokeWidth="1" strokeDasharray="5,5"/>
                         <text x="320" y="26" textAnchor="middle" fill="#64748b" fontSize="10">empty</text>
                       </svg>
                     </div>

                     <div>
                       <div className="text-sm text-gray-400 mb-2">Queue 3</div>
                       <svg width="400" height="40" className="mx-auto">
                         <rect x="10" y="10" width="60" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                         <text x="40" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                         <rect x="80" y="10" width="60" height="25" fill="#99ef44" stroke="#fff" strokeWidth="2"/>
                         <text x="110" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1</text>
                         <rect x="150" y="10" width="60" height="25" fill="#ef6666" stroke="#fff" strokeWidth="2"/>
                         <text x="180" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">8</text>
                         <rect x="220" y="10" width="60" height="25" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                         <text x="250" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                         <rect x="290" y="10" width="60" height="25" fill="#ef6666" stroke="#fff" strokeWidth="2"/>
                         <text x="320" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">8</text>
                       </svg>
                     </div>
                   </div>

                   <div className="flex items-center">
                     <svg width="60" height="40" className="text-blue-400">
                       <polygon points="50,10 50,30 10,20" fill="currentColor"/>
                       <line x1="50" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="3"/>
                     </svg>
                   </div>
                   
                     <div className="text-center">
                       <div className="text-lg font-bold text-purple-400 mb-2">Future Customers</div>
                       <div className="flex space-x-2">
                         <svg width="60" height="25" className="mx-1">
                           <rect x="5" y="2" width="50" height="20" fill="#f97316" stroke="#fff" strokeWidth="2"/>
                           <text x="30" y="15" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
                         </svg>
                         <svg width="60" height="25" className="mx-1">
                           <rect x="5" y="2" width="50" height="20" fill="#a855f7" stroke="#fff" strokeWidth="2"/>
                           <text x="30" y="15" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">?</text>
                         </svg>
                         <svg width="60" height="25" className="mx-1">
                           <rect x="5" y="2" width="50" height="20" fill="#a855f7" stroke="#fff" strokeWidth="2"/>
                           <text x="30" y="15" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">?</text>
                         </svg>
                         <svg width="60" height="25" className="mx-1">
                           <rect x="5" y="2" width="50" height="20" fill="#a855f7" stroke="#fff" strokeWidth="2"/>
                           <text x="30" y="15" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">?</text>
                         </svg>
                       </div>
                     </div>
                 </div>
               </div>
             </div>

             <p className="text-lg leading-relaxed mb-6">
                This is when machine learning comes into play. Through millions of simulations, QueQat can make use of historical data of service time distributions, current state of the queues and the estimated service time of the current customer, to predict the queue the current customer should be assigned to that will be the best for the future.
              </p>
          </div>

          <div 
            id="performance"
            ref={setElementRef('performance')}
            className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-700 ease-out transform delay-200 ${
              isVisible['performance'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Performance Comparison</h2>
            
            <div className="mb-6">
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => setSelectedScenario('scenario1')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    selectedScenario === 'scenario1'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg">Scenario 1</div>
                    <div className="text-sm opacity-80">200 customers / 4 queues</div>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedScenario('scenario2')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    selectedScenario === 'scenario2'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg">Scenario 2</div>
                    <div className="text-sm opacity-80">1000 customers / 10 queues</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-red-400">Shortest Queue</h3>
                <div className="bg-white rounded-lg p-2">
                  <img 
                    src={`/queqat/${selectedScenario === 'scenario1' ? 'short1' : 'short2'}.webp`}
                    alt={`Shortest queue strategy - ${selectedScenario}`}
                    className="w-full h-auto rounded"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">Customers choose the shortest available queue</p>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-blue-400">Single Queue</h3>
                <div className="bg-white rounded-lg p-2">
                  <img 
                    src={`/queqat/${selectedScenario === 'scenario1' ? 'single1' : 'single2'}.webp`}
                    alt={`Single queue strategy - ${selectedScenario}`}
                    className="w-full h-auto rounded"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">All customers join one queue, served in order</p>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-green-400">QueQat</h3>
                <div className="bg-white rounded-lg p-2">
                  <img 
                    src={`/queqat/${selectedScenario === 'scenario1' ? 'queqat1' : 'queqat2'}.webp`}
                    alt={`QueQat AI strategy - ${selectedScenario}`}
                    className="w-full h-auto rounded"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">AI-optimized queue assignment</p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-900/30 border border-yellow-600 rounded-lg p-4">
              <p className="text-yellow-200 text-center font-bold">
                QueQat consistently outperforms traditional strategies with {'>30%'} reduction in waiting times
              </p>
            </div>
          </div>

          <div 
            id="technical"
            ref={setElementRef('technical')}
            className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-700 ease-out transform delay-300 ${
              isVisible['technical'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Technical Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-purple-300">Deep Q-Learning</h3>
                <p className="text-gray-300">
                  <b>Input Layer:</b> The states of each queue, and the estimated service time of the current customer.
                  <br />
                  <b>Hidden Layers:</b> A layer of 64 neurons with ReLU, and a layer of 32 neurons with ReLU.
                  <br />
                  <b>Output Layer:</b> Q-values for each queue. (How good each queue is, highest Q-value is chosen)
                  <br />
                  <b>Reward Function:</b> Negative total waiting time.
                </p>
                <br />
                <div className="flex justify-start mb-8">
                  <img src="/queqat/qlearning.png" alt="Q-learning algorithm" className="rounded-lg shadow-lg w-1/3 h-auto" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-purple-300">Frameworks</h3>
                <p className="text-gray-300">
                  <b>Training:</b> Python PyTorch, TensorFlow
                  <br />
                  <b>Frontend:</b> Python Flask
                </p>
              </div>
            </div>
          </div>

          <div
            id="results"
            ref={setElementRef('results')}
            className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-700 ease-out transform delay-400 ${
              isVisible['results'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-green-400">Results</h2>
            <p className="text-lg leading-relaxed mb-6">
              QueQat won 2nd runners-up in the 55th Joint School Science Exhibition, and had a 7-day exhibition at the Hong Kong Central Library.
              <br />
              QueQat was also reported by several local media and our team got on a radio show at RTHK.
            </p>
          </div>

          <div 
            id="status"
            ref={setElementRef('status')}
            className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-700 ease-out transform delay-500 ${
              isVisible['status'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-red-400">Current Status</h2>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span className="text-lg">Server is currently offline</span>
            </div>
            <p className="text-gray-300 mt-2">
              You missed the exhibition and now the server is no longer running.
            </p>
          </div>

          <div
            id="next"
            ref={setElementRef('next')}
            className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-700 ease-out transform delay-500 ${
              isVisible['next'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">What's next...?</h2>
            <p className="text-lg leading-relaxed mb-6">
              Similar approaches could be applied to other scenarios that involves multiple people waiting, for example, elevator systems and traffic systems.
              <br />
              Might do this for my final year project, idk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
