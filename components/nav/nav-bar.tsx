import NavLink from '@/components/nav/nav-link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="text-xl">
      <ul className="flex flex-col items-start gap-x-14 gap-y-6 lg:flex-row lg:items-center">
        <li>
          <NavLink href="/">Products</NavLink>
        </li>
        <li>
          <NavLink href="/#about">About us</NavLink>
        </li>
        <li>
          <NavLink href="/testimonial">Testimonial</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
