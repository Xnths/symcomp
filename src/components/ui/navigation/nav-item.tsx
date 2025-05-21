'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

interface NavItemProps {
  href: string
  label: string
  classN?: string
}

export const NavItem = ({ href, label, classN }: NavItemProps) => {
  const [isActive, setIsActive] = useState(false)

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

  return (
    <a
      className={cn(
        'flex flex-row items-center justify-center font-bold px-[48px] py-2 transition-colors hover:text-white border-4 shadow-solid border-black',
        isActive ? 'bg-primary text-white' : 'bg-white text-black',
        classN,
      )}
      href={`#${href}`}
    >
      {label.toUpperCase()}
    </a>
  )
}
