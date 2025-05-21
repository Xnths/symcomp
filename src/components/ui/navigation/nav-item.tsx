'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { Color } from '@/types/color'

interface NavItemProps {
  href: string
  label: string
  color: Color
}

export const NavItem = ({ href, label, color }: NavItemProps) => {
  const [isActive, setIsActive] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const section = document.getElementById(href)
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting)
      },
      { threshold: 0.7 },
    )

    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [href])

  const isHighlighted = isActive || isHovered
  const isDimmed = isActive && isHovered

  const style = {
    backgroundColor: isHighlighted ? color.primary : 'white',
    color: isHighlighted ? color.contrast : 'black',
    opacity: isDimmed ? 0.8 : 1,
  }

  return (
    <a
      className={cn(
        'flex flex-row items-center justify-center font-bold px-[48px] py-2 transition-colors border-4 shadow-solid border-black text-sm',
      )}
      style={style}
      href={`#${href}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label.toUpperCase()}
    </a>
  )
}
