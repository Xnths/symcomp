import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function bgColorMap(color: string) {
  return `bg-${color}`
}

export function getContrastColor(hex: string): '#000000' | '#ffffff' {
  const cleanHex = hex.replace('#', '')

  const r = parseInt(cleanHex.slice(0, 2), 16) / 255
  const g = parseInt(cleanHex.slice(2, 4), 16) / 255
  const b = parseInt(cleanHex.slice(4, 6), 16) / 255

  const luminanceComponent = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)

  const luminance =
    0.2126 * luminanceComponent(r) +
    0.7152 * luminanceComponent(g) +
    0.0722 * luminanceComponent(b)

  return luminance > 0.179 ? '#000000' : '#ffffff'
}
