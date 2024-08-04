'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type INavLink = {
  children: React.ReactNode
  href: string
}

const NavLink = ({ children, href }: INavLink) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn('group transition-all duration-500 hover:text-primary', {
        'text-primary': pathname === href,
      })}
    >
      {children}
      <span className="block size-1 rounded-full bg-white duration-500 group-hover:w-full group-hover:bg-primary"></span>
    </Link>
  )
}

export default NavLink
