import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function ProgressBar({lang, per}) {
  return (
    <Contaier>
        <div className='bar'>

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
`