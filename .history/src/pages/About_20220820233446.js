import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <Container>
            <div className='full'>
                <h1 class='title'>About Me</h1>
                <p class='des'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
                <h1 class='skills'>Language & Framework</h1>
            </div>
        </Container>
    )
}

export default About

const Container = styled.div`

    .full{
        margin-left: 170px;
    }

    .title{
        font-size: 60px;
        font-weight: 500;
        marb
    }

    .des{
        font-size: 20px;
        max-width: 40vw;
    }

    .skills{
        font-weight: 400;
    }
`