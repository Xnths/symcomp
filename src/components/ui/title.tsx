import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface TitleProps {
  children: ReactNode
  color: 'yellow' | 'pink'
}

export const Title = ({ children, color }: TitleProps) => {
  return (
    <h2
      className={cn(
        'font-extrabold  text-2xl px-[50px] py-[10px] border-b-8 w-full text-center border-t-4 border-black mb-[5px]',
        color === 'pink' ? 'text-white bg-primary' : '',
        color === 'yellow' ? 'text-black bg-secondary' : '',
      )}
    >
      {children}
    </h2>
  )
}
