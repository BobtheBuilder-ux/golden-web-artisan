
"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface FloatingProps {
  children: React.ReactNode
  className?: string
  sensitivity?: number
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  depth?: number
}

export function FloatingElement({ children, className, depth = 1 }: FloatingElementProps) {
  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      data-depth={depth}
    >
      {children}
    </div>
  )
}

export default function Floating({ children, className, sensitivity = 1 }: FloatingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 100 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)
  
  const [elementPositions, setElementPositions] = useState<{x: number, y: number, depth: number}[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate mouse position relative to the center of the container
      mouseX.set((e.clientX - centerX) * sensitivity)
      mouseY.set((e.clientY - centerY) * sensitivity)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY, sensitivity])
  
  useEffect(() => {
    if (!ref.current) return
    
    const elements = ref.current.querySelectorAll('[data-depth]')
    const newPositions = Array.from(elements).map(el => {
      const depth = parseFloat(el.getAttribute('data-depth') || "1")
      return { x: 0, y: 0, depth }
    })
    
    setElementPositions(newPositions)
  }, [children])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child
        
        const childProps = child.props
        const depth = childProps.depth || 1
        
        return React.cloneElement(child, {
          ...childProps,
          style: {
            ...childProps.style,
            x: springX.get() * depth * -0.1,
            y: springY.get() * depth * -0.1,
          },
        })
      })}
    </div>
  )
}
