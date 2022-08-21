import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <div className='grid-cont'>
            <img src='/assets/covid.png' alt='' />
            <img src='/assets/tesla.png' alt='' />
            <img src='/assets/disney.png' alt='' />
            <img src='/assets/Twitter.jpeg' alt='' />
        </div>  
    </Container>
  )
}

export default Project

const Container = styled.div`
`