import React from 'react'
import { motion } from 'framer-motion'
import { duration } from '@mui/material';

function AnimatedWord({ text }) {

  const letters = Array.from(text);

  const animation = {
    init: {
        y: 0
    },
    anim: {
        y: -20
    }
  }

  return (
    <div>
        {letters.map((letter) => (
            <motion.span
                whileHover={{ y: -7,
                    transition={{ duration: 0.5 }}
                 }}
            >
                {letter}
            </motion.span>
        ))}
    </div>
  )
}

export default AnimatedWord