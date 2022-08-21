import React from 'react'
import { motion } from 'framer-motion'

function AnimatedWord({ text }) {

  const letters = Array.from(text);

  return (
    <div>
        letters.map(() => {
            <motion.span>

            </motion.span>
        })
    </div>
  )
}

export default AnimatedWord