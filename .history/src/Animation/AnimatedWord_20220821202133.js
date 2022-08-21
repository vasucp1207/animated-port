import React from 'react'
import { motion } from 'framer-motion'

function AnimatedWord({ text }) {

  const letters = Array.from(text);

  return (
    <div>
        {letters.map((letter) => (
            <motion.span>
                letter
            </motion.span>
        ))}
    </div>
  )
}

export default AnimatedWord