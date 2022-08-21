import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Wrap>
            <Container className='container'>
                <h1 className='intro'>Hi,</h1>
                <h1 className='intro'>I am Vasu</h1>
                <h1 className='intro'>FullStack Developer</h1>
                <p className='field'>Interested in WebDevelopment and Machine Learning</p>
                <button className='btn'>CONTACT ME</button>
            </Container>
        </Wrap>
    )
}

export default Home

const Wrap = styled.div`

`

const Container = styled.div`
    margin-left: 150px;
    margin-top: 230px;

    .intro{
        font-size: 45px;
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
        border: 2px solid var(--orange);
        outline: none;
        cursor: pointer;
        width: 120px;
        height: 44px;
        font-size: 14px;
        border-radius: 4px;
        font-weight: bold;

        :hover{
            background: var();
        }
    }
`