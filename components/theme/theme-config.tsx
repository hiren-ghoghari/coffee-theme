'use client'
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Palette } from 'lucide-react'
import ColorPicker from '@/components/theme/color-picker'
import { Label } from '@/components/ui/label'

type IThemeColors = {
  primary: string
  secondary: string
}

export const defaultTheme: { colors: IThemeColors } = {
  colors: {
    primary: '#6D1600',
    secondary: '#282A3A',
  },
}

export const colors: (keyof IThemeColors)[] = ['primary', 'secondary']

const ThemeConfig = () => {
  const [theme, setTheme] = useState(defaultTheme)
  return (
    <>
      <style jsx global>
        {`
          :root {
            --primary: ${theme.colors.primary};
            --secondary: ${theme.colors.secondary};
          }
        `}
      </style>
      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            className="fixed bottom-6 right-6 rounded-full border border-primary bg-primary p-2 text-white transition hover:scale-105 hover:bg-white hover:text-primary"
          >
            <Palette />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='text-left'>Customize theme</SheetTitle>
            <SheetDescription asChild className="pt-6 text-left">
              <div className="space-y-3">
                <h2 className="text-xl">
                  Colors
                  <span className="block h-0.5 w-full rounded-full bg-primary mt-1"></span>
                </h2>

                <div className="flex flex-col gap-3">
                  {colors.map((color, key) => {
                    return (
                      <div key={key} className="flex items-center gap-3">
                        <ColorPicker
                          value={theme.colors[color]}
                          onChange={(value) => {
                            setTheme((prevTheme) => ({
                              ...prevTheme,
                              colors: { ...prevTheme.colors, [color]: value },
                            }))
                          }}
                        />
                        <Label htmlFor={color} className="capitalize">
                          {color}
                        </Label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default ThemeConfig
