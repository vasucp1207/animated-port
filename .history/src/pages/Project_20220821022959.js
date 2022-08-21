import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <div className='grid-cont'>
            <img src='/assets/covid.png' />
            <img src='/assets/tesla.png' />
            <img src='/assets/disney.png' />
            <img src='/assets/Twitter.jpeg' />
        </div>  
    </Container>
  )
}

export default Project

const Container = styled.div`
`