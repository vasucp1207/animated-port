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
                    col
                    whileHover={{
                        text,
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    )
}

export default AnimatedWord