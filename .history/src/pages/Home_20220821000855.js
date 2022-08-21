import React from 'react'
import styled from 'styled-components'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
    return (
        <Wrap>
            <Container className='container'>
                <h1 className='intro'>Hi,</h1>
                <h1 className='intro'>I am <span className='name'>Vasu</span></h1>
                <h1 className='intro'>FullStack Developer</h1>
                <p className='field'>Interested in Web Development and Machine Learning</p>
                <button className='btn'>CONTACT ME</button>
            </Container>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </Wrap>
    )
}

export default Home

const Wrap = styled.div`
    height: 70vh;
`

const Container = styled.div`
    margin-left: 170px;
    margin-top: 150px;

    .intro{
        font-size: 45px;
        font-weight: 500;
        margin-top: -8px;
        margin-bottom: -8px;
    }

    .name{
        background-image: var(--orange-pink);
        border-radius: 4px;
        padding: 4px;
    }

    .field{
        font-size: 20px;
        font-weight: 200;
        margin-bottom: 35px;
        letter-spacing: 1px;

        ::after{
            content: '';
            width: 590px;
            height: 4px;
            display: block;
            background-image: var(--orange-pink);
        }
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
        background: var(--background);

        :hover{
            background: var(--orange);
            color: white;
        }
    }
`