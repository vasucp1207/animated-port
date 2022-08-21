import React from 'react'
import styled from 'styled-components'
import ProgressBar from '../components/ProgressBar'

function About() {
    return (
        <Container>
            <div className='full'>
                <h1 class='title'>About Me</h1>
                <p class='des'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
                <h1 class='skills'>Language & Framework</h1>

                <div className='progress-bar'>
                    <ProgressBar lang='Javascript' per='50%' />
                    <ProgressBar lang='C++' per='60%' />
                    <ProgressBar lang='React' per='40%' />
                    <ProgressBar lang='Express' per='40%' />
                    <ProgressBar lang='MongoDb' per='30%' />
                    <ProgressBar lang='Firebase' per='30%' />
                </div>
            </div>
            <div className='img-tag'>
                {/* <img src='/assets/name.png' alt='name' /> */}
                <div className='left'></div>
                <div className='right'></div>
            </div>
        </Container>
    )
}

export default About

const Container = styled.div`
    height: 100vh;
    display: flex;
    
    .full{
        margin-left: 170px;
    }

    .title{
        max-width: fit-content;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        font-size: 60px;
        font-weight: 500;
        background-image: var(--green-grad);
    }

    .des{
        font-size: 20px;
        max-width: 40vw;
        margin-top: -15px;
        letter-spacing: 1px;
    }

    .progress-bar{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .skills{
        font-weight: 400;
    }

    .img-tag{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 80px;
        gap: 10px;
        margin-right: 20px;
    }

    img{
        width: 40vw;
        height: auto;
    }

    .left{
        background: white;
        height: 80vh;
        width: 40px;
        rotate: -22deg;
    }

    .right{
        background: white;
        height: 80vh;
        width: 40px;
        rotate: 22deg;
    }
`