import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { Button } from './button'

interface CustomButtonProps {
  children: ReactNode
  color: 'yellow' | 'pink' | 'white'
  disabled?: boolean
}

export const CustomButton = ({ children, color, disabled }: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      className={cn(
        'font-extrabold py-2 symcomp-border mb-[5px]',
        color === 'yellow' ? 'bg-secondary' : '',
        color === 'pink' ? 'bg-primary hover:bg-secondary' : '',
        color === 'white'
          ? 'bg-white hover:bg-secondary hover:text-white text-black'
          : '',
      )}
    >
      {children}
    </Button>
  )
}
