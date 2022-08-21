import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function ProgressBar({lang, per}) {
  return (
    <Contaier>
        <div className='bar'>
            <motion.div className='fill'
                transition={{ duration: 2 }}
                animate={{ width: {per} }}
            >
                <p className='lang'>{lang}</p>
            </motion.div>
        </div>
    </Contaier>
  )
}

export default ProgressBar

const Contaier = styled.div`

    .bar{
        width: 100%;
        height: 40px;
        border-radius: 9999px;
        background: rgb(229,231,235);
    }

    .fill{

    }

    .lang{
        color: white;
        font-weight: bold;
    }
`