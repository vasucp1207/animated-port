import React from 'react'
import styled from 'styled-components'

function Project() {
    return (
        <Wrap>
            <h1 className='title'>Projects</h1>
            <Container>
                <div className='grid-cont'>
                    <img className='img' src='/assets/covid.png' alt='project-img' />
                    <img className='img' src='/assets/tesla.png' alt='project-img' />
                    <img className='img' src='/assets/disney.png' alt='project-img' />
                    <img className='img' src='/assets/Twitter.jpeg' alt='project-img' />
                </div>
            </Container>
        </Wrap>
    )
}

export default Project

const Wrap = styled.div`

.title{
        font-size: 50px;
        font-weight: 500;
    }
`

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    .grid-cont{
        max-width: 70vw;

        /* display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    }

    .img{
        width: 500px;
        height: 300px;
    }
`