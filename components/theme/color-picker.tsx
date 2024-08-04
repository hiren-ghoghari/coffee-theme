import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import React from 'react'
import { HexColorPicker } from 'react-colorful'

const ColorPicker = ({
  value,
  onChange,
  defaultValue,
}: {
  value: string
  onChange: (value: string) => void
  defaultValue?: string
}) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger className="relative flex w-full cursor-pointer select-none items-center justify-between rounded-[10px]  text-sm font-semibold outline-none transition-colors">
          <span
            className="size-10 rounded-full border"
            style={{ background: value }}
          ></span>
        </PopoverTrigger>
        <PopoverContent className="w-fit p-2">
          <div className="max-w-[200px] space-y-3">
            <HexColorPicker color={value || defaultValue} onChange={onChange} />
            <Input
              value={value || defaultValue}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ColorPicker
