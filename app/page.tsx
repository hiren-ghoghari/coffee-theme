import IconDownLeftArrow from '@/components/icons/icon-down-left-arrow'
import React from 'react'

const Home = () => {
  return (
    <main className="min-h-screen px-10">
      <div className="flex flex-col items-center gap-6 py-20">
        <h1 className="px-[34px] text-center font-playfair-display text-[64px]/[76.8px] font-medium">
          Enjoy Your Favorite <br /> Coffee with Ngopi
        </h1>
        <p className="text-center text-xl/8">
          Discover tranquility at Ngopi a sanctuary for unwinding,
          <br /> where your evenings are perfected with relaxation and rich
          flavors.
        </p>
        <button
          type="button"
          className="group flex gap-4 rounded-[20px] border border-primary bg-primary px-12 py-6 font-playfair-display text-2xl text-white transition hover:scale-105 hover:bg-white hover:text-primary"
        >
          <span>Explore product</span>
          <IconDownLeftArrow className="transition group-hover:translate-x-1 group-hover:translate-y-1" />
        </button>
      </div>
    </main>
  )
}

export default Home
