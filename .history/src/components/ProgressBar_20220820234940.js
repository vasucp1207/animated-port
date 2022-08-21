import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function ProgressBar({ lang, per }) {
    return (
        <Contanier>
            <div class='bar'>
                <motion.div className='fill'
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
        background: rgb(229,231,235);
    }

    .fill{
        padd
        display: flex;
        align-items: center;
        width: 0;
        border-radius: 9999px;
        height: 30px;
        background-image: linear-gradient(to right,#00f260,#0575e6);
    }

    .lang{
        color: white;
        font-weight: bold;
    }
`