import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <div className='grid-cont'>
            <img src='/assets/covid.png' alt='project-img' />
            <img src='/assets/tesla.png' alt='project-img' />
            <img src='/assets/disney.png' alt='project-img' />
            <img src='/assets/Twitter.jpeg' alt='project-img' />
        </div>  
    </Container>
  )
}

export default Project

const Container = styled.div`
`