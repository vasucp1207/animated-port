import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';

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
        <Container>
            {letters.map((letter) => (
                <motion.span className='words'
                >
                    {letter}
                </motion.span>
            ))}
        </Container>
    )
}

export default AnimatedWord

const Container = styled.div`
    .words{
        :hover{
            tes
        }
    }
`