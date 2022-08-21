import React from 'react'
import { motion } from 'framer-motion'

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
                animate={{animation}}
                onHoverStart={() => {
    logoAnimationControls.start(animation.anim)
  }}
            >
                {letter}
            </motion.span>
        ))}
    </div>
  )
}

export default AnimatedWord