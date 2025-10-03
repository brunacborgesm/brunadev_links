'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type SlideInProps = {
  from?: 'left' | 'right'
  delay?: number
  children: ReactNode
}

export function SlideIn({ from = 'left', delay = 0.1, children }: SlideInProps) {
  const x = from === 'left' ? -100 : 100
  return (
    <motion.div
      initial={{ x, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
