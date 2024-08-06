'use client'
import ProductCard from '@/components/home/product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'

const products = [
  {
    name: 'Chocolate Latte',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-1.png',
    category: 'latte',
    price: 2.9,
    reviews: 360,
    rating: 4.9,
  },
  {
    name: 'Mocha Latte',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-2.png',
    category: 'latte',
    price: 2.7,
    reviews: 180,
    rating: 5,
  },
  {
    name: 'Coffee Latte',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-3.png',
    category: 'latte',
    price: 2.9,
    reviews: 450,
    rating: 4.8,
  },
  {
    name: 'Hazelnut Latte',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-4.png',
    category: 'latte',
    price: 2.8,
    reviews: 390,
    rating: 4.9,
  },
  {
    name: 'Chocolate Robusta',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-1.png',
    category: 'robusta',
    price: 2.9,
    reviews: 360,
    rating: 4.9,
  },
  {
    name: 'Mocha Robusta',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-2.png',
    category: 'robusta',
    price: 2.7,
    reviews: 180,
    rating: 5,
  },
  {
    name: 'Coffee Robusta',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-3.png',
    category: 'robusta',
    price: 2.9,
    reviews: 450,
    rating: 4.8,
  },
  {
    name: 'Hazelnut Robusta',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-4.png',
    category: 'robusta',
    price: 2.8,
    reviews: 390,
    rating: 4.9,
  },
  {
    name: 'Chocolate Acabica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-1.png',
    category: 'acabica',
    price: 2.9,
    reviews: 360,
    rating: 4.9,
  },
  {
    name: 'Mocha Acabica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-2.png',
    category: 'acabica',
    price: 2.7,
    reviews: 180,
    rating: 5,
  },
  {
    name: 'Coffee Acabica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-3.png',
    category: 'acabica',
    price: 2.9,
    reviews: 450,
    rating: 4.8,
  },
  {
    name: 'Hazelnut Acabica',
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    image: '/assets/images/product-4.png',
    category: 'acabica',
    price: 2.8,
    reviews: 390,
    rating: 4.9,
  },
]

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('latte')
  return (
    <div>
      <Tabs
        defaultValue="latte"
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex flex-col items-center gap-10"
      >
        <div>
          <TabsList className="flex-wrap mx-10">
            <TabsTrigger value="latte">Latte</TabsTrigger>
            <TabsTrigger value="robusta">Robusta</TabsTrigger>
            <TabsTrigger value="acabica">Acabica</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="max-w-[300px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              slidesToScroll: 1,
              // dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: 2 }).map((_, index) =>
                products
                  .filter((product) => product.category === activeTab)
                  .map((product, key) => {
                    return (
                      <CarouselItem
                        key={key}
                        className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                      >
                        <ProductCard product={product} />
                      </CarouselItem>
                    )
                  }),
              )}
            </CarouselContent>
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProductSection
