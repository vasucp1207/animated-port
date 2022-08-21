import React from 'react'
import { motion } from 'framer-motion'

function AnimatedWord({ text }) {

  const letters = Array.from(text);

  return (
    <div>
        {/* {letters.map((letter) => (
            <motion.span>
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))} */}
        {text}
    </div>
  )
}

export default AnimatedWord