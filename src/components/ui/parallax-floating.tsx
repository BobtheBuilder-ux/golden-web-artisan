
"use client"

import React, { useRef, useState, useEffect, ReactNode } from "react"
import { motion, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingProps {
  children: ReactNode
  className?: string
  sensitivity?: number
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  depth?: number
}

const Floating = ({ children, className, sensitivity = 1 }: FloatingProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) * sensitivity
    const y = (e.clientY - top - height / 2) * sensitivity

    setMousePosition({ x, y })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [sensitivity])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
    </div>
  )
}

const FloatingElement = ({ children, className, depth = 1 }: FloatingElementProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const springConfig = { damping: 50, stiffness: 400 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    const width = window.innerWidth
    const height = window.innerHeight
    const xPos = (clientX - width / 2) / (width / 2) * 20 * depth
    const yPos = (clientY - height / 2) / (height / 2) * 20 * depth

    setMousePosition({ x: xPos, y: yPos })
  }

  useEffect(() => {
    x.set(-mousePosition.x)
    y.set(-mousePosition.y)
  }, [mousePosition, x, y])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [depth])

  return (
    <motion.div
      className={cn("absolute", className)}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  )
}

export { FloatingElement }
export default Floating
