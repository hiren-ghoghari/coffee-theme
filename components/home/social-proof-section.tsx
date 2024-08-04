'use client'
import React from 'react'
import CountUp from 'react-countup'

const socialProofSections = [
  { name: 'Coffee Variant', count: 30 },
  { name: 'Meeting room', count: 20 },
  { name: 'Event space', count: 25 },
  { name: 'Global Achievement', count: 40 },
]

const SocialProofSection = () => {
  return (
    <div className="flex flex-col justify-center divide-x-0 divide-y-2 p-20 lg:flex-row lg:divide-x-2 lg:divide-y-0">
      {socialProofSections.map((socialProofSection, key) => {
        return (
          <div key={key} className="px-10 py-10 text-center lg:py-0">
            <h3 className="text-[64px]/[76px]">
              <CountUp
                duration={3}
                start={1}
                end={socialProofSection.count}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h3>
            <h4 className="px-10 font-playfair-display text-2xl">
              {socialProofSection.name}
            </h4>
          </div>
        )
      })}
    </div>
  )
}

export default SocialProofSection
