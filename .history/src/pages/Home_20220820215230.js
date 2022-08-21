import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container className='container'>
        <h1 className=''>Hi,</h1>
        <h1 className=''>I am Vasu</h1>
        <h1 className=''>FullStack Developer</h1>
        <p>Interested in WebDevelopment and Machine Learning</p>
        <button>Contact Me</button>
    </Container>
  )
}

export default Home

const Container = styled.div`
    background: firebrick;
`