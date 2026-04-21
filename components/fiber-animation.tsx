"use client"

import { motion } from "framer-motion"

export function FiberAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Fiber Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Main Horizontal Lines */}
        {[20, 35, 50, 65, 80].map((y, index) => (
          <g key={`h-${index}`}>
            <line
              x1="0%"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              opacity="0.2"
            />
            <motion.circle
              cx="0"
              cy={`${y}%`}
              r="3"
              fill="#00B4D8"
              initial={{ cx: "-5%" }}
              animate={{ cx: "105%" }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.8,
              }}
            />
          </g>
        ))}
        
        {/* Vertical Lines */}
        {[15, 30, 70, 85].map((x, index) => (
          <g key={`v-${index}`}>
            <line
              x1={`${x}%`}
              y1="0%"
              x2={`${x}%`}
              y2="100%"
              stroke="url(#line-gradient-v)"
              strokeWidth="1"
              opacity="0.15"
            />
            <motion.circle
              cx={`${x}%`}
              cy="0"
              r="2"
              fill="#FF7A00"
              initial={{ cy: "-5%" }}
              animate={{ cy: "105%" }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "linear",
                delay: index * 1.2,
              }}
            />
          </g>
        ))}
        
        {/* Diagonal Lines */}
        <line
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
          stroke="url(#diagonal-gradient)"
          strokeWidth="1"
          opacity="0.1"
        />
        <line
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          stroke="url(#diagonal-gradient)"
          strokeWidth="1"
          opacity="0.1"
        />
        
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#00B4D8" />
            <stop offset="80%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="line-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#FF7A00" />
            <stop offset="80%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="diagonal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="50%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#00B4D8" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating Nodes */}
      {[
        { x: 10, y: 25, size: 6, delay: 0 },
        { x: 85, y: 15, size: 4, delay: 0.5 },
        { x: 70, y: 75, size: 5, delay: 1 },
        { x: 25, y: 85, size: 4, delay: 1.5 },
        { x: 50, y: 45, size: 8, delay: 2 },
      ].map((node, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan/40"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            delay: node.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}
