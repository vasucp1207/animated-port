import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container className='container'>
        <h1 className='intro'>Hi,</h1>
        <h1 className='intro'>I am Vasu</h1>
        <h1 className='intro'>FullStack Developer</h1>
        <p className='field'>Interested in WebDevelopment and Machine Learning</p>
        <button className='btn'>Contact Me</button>
    </Container>
  )
}

export default Home

const Container = styled.div`
    background: firebrick;

    .intro{
        font-size: 50px;
        font-weight: 500;
        margin-top: -10px;
        margin-bottom: -10px;
    }

    .field{
        font-size: 20px;
        font-weight: 200;
        margin-top: -10px;
        margin-bottom: 35px;
    }

    .btn{
        border: none;
        outline: none;
        cursor: pointer;
        width: 120px;
    }
`