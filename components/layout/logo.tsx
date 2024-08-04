import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo.svg"
        width={40}
        height={40}
        alt="Logo"
        className={className}
      />
    </Link>
  )
}

export default Logo
