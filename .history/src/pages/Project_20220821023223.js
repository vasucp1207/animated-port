import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <h1 className='title'>Projects</h1>
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

    .title{
        font-size: 50px;
        font-weight: 500;
    }

    .img{
        width: 500px;
        height: 300px;
    }
`