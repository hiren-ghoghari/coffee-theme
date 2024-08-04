import ProductSection from '@/components/home/product-section'
import SocialProofSection from '@/components/home/social-proof-section'
import IconDownLeftArrow from '@/components/icons/icon-down-left-arrow'
import Image from 'next/image'
import React from 'react'

const featuredImages = [
  { name: 'featured-image-1', image: '/assets/images/featured-image-1.png' },
  { name: 'featured-image-2', image: '/assets/images/featured-image-2.png' },
  { name: 'featured-image-3', image: '/assets/images/featured-image-3.png' },
  { name: 'featured-image-4', image: '/assets/images/featured-image-4.png' },
  { name: 'featured-image-5', image: '/assets/images/featured-image-5.png' },
]

const Home = () => {
  return (
    <main className="min-h-screen space-y-20 py-10">
      <div className="flex flex-col items-center gap-6 pt-20">
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
      <div className="flex flex-wrap justify-center gap-4">
        {featuredImages.map((featuredImage, key) => {
          return (
            <Image
              key={key}
              src={featuredImage.image}
              width={250}
              height={350}
              alt={featuredImage.name}
            />
          )
        })}
      </div>
      <SocialProofSection />
      <div className="flex flex-col items-center gap-20">
        <div className="text-center">
          <h2 className="text-2xl">Our products</h2>
          <h3 className="font-playfair-display text-4xl">
            From Top Quality Materials
          </h3>
        </div>
        <ProductSection />
      </div>
    </main>
  )
}

export default Home
