import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function ProgressBar({ lang, per }) {

    const [reach, setReach] = useState(false)

    return (
        <Contanier>
            <div class='bar'>
                <motion.div className={reach? 'fill': 'no-fill'}
                    animate={{ width: per }}
                    transition={{ duration: 2 }}
                >
                    <p class='lang'>{lang}</p>
                </motion.div>
            </div>
        </Contanier>
    )
}

export default ProgressBar

const Contanier = styled.div`

    max-width: 40vw;
    .bar{
        width: 100%;
        height: 40px;
        border-radius: 9999px;
        background: white;
    }

    .fill{
        padding-left: 15px;
        display: flex;
        align-items: center;
        width: 0;
        border-radius: 9999px;
        height: 40px;
        background-image: var(--green-grad);
    }

    .lang{
        color: white;
        font-weight: bold;
    }
`