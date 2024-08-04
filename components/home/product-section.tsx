'use client'
import ProductCard from '@/components/home/product-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

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
]

const ProductSection = () => {
  return (
    <div>
      <Tabs defaultValue="latte" className="flex flex-col items-center gap-10">
        <div>
          <TabsList>
            <TabsTrigger value="latte">Latte</TabsTrigger>
            <TabsTrigger value="robusta">Robusta</TabsTrigger>
            <TabsTrigger value="acabica">Acabica</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="latte">
          <div className="flex gap-6">
            {products.map((product, key) => {
              return <ProductCard key={key} product={product} />
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProductSection
