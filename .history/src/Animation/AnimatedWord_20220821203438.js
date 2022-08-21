import React from 'react'
import { motion } from 'framer-motion'

function AnimatedWord({ text }) {

  const letters = Array.from(text);

  const animation: ;

  return (
    <div>
        {letters.map((letter) => (
            <motion.span
                whileHover={animation}
            >
                {letter}
            </motion.span>
        ))}
    </div>
  )
}

export default AnimatedWord