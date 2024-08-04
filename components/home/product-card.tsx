'use client'
import IconStar from '@/components/icons/icon-star'
import { IProduct } from '@/types/products'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <Image src={product.image} width={300} height={240} alt={product.name} />
      <div className="space-y-4 p-4 max-w-[300px]">
        <h4 className="text-2xl">{product.name}</h4>
        <div className="flex items-center gap-2">
          <IconStar />
          <span className="text-xl font-bold">{product.rating}</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <p>{product.description}</p>
        <div className='flex gap-3 justify-between'>
          <span className="text-xl font-bold">${product.price}</span>
          <button type="button" className="bg-primary w-20 h-8 rounded-lg text-white grid place-content-center">
            <Plus/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
