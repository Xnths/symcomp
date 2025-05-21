import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { Button } from './button'

interface CustomButtonProps {
  children: ReactNode
  color: 'yellow' | 'pink'
  disabled?: boolean
}

export const CustomButton = ({ children, color, disabled }: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      className={cn(
        'font-extrabold py-2 shadow-solid mb-[5px] border-4 border-black',
        color === 'yellow' ? 'bg-secondary' : '',
        color === 'pink' ? 'bg-primary hover:bg-secondary' : '',
      )}
    >
      {children}
    </Button>
  )
}
