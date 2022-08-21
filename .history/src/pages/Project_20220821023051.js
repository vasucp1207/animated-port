import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <div className='grid-cont'>
            <img className='img' src='/assets/covid.png' alt='project-img' />
            <img className='img' src='/assets/tesla.png' alt='project-img' />
            <img className='img' src='/assets/disney.png' alt='project-img' />
            <img className='img' src='/assets/Twitter.jpeg' alt='project-img' />
        </div>  
    </Container>
  )
}

export default Project

const Container = styled.div`

    .img{
        width: ;
    }
`