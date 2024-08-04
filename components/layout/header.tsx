import IconSearch from '@/components/icons/icon-search'
import IconShoppingBag from '@/components/icons/icon-shopping-bag'
import Logo from '@/components/layout/logo'
import NavBar from '@/components/nav/nav-bar'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between px-20">
      <Logo />
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="flex gap-6">
        <button type="button" className="hover:text-primary">
          <IconSearch />
        </button>
        <button type="button" className="hover:text-primary">
          <IconShoppingBag />
        </button>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <button type="button" className="hover:text-primary">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription asChild className="pt-6">
                <NavBar />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
