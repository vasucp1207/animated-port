import React from 'react'
import styled from 'styled-components'
import {
    faNodeJs,
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
                        <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
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

    .stage-cube-cont {
        width: 50%;
        height: 100%;
        top: 0;
        padding-top: 18%;
        margin-left: 0;
        position: absolute;
        right: 0;
        overflow: hidden;
    }

    .cubespinner {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    margin-left: calc(50% - 100px);

    div {
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
    }

    .face1 {
        transform: translateZ(100px);
        color: #dd0031;
    }
    .face2 {
        transform: rotateY(90deg) translateZ(100px);
        color: #f06529;
    }
    .face3 {
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
        color: #28a4d9;
    }
    .face4 {
        transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
        color: #5ed4f4;
    }
    .face5 {
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
        color: #efd81d;
    }
    .face6 {
        transform: rotateX(-90deg) translateZ(100px);
        color: #ec4d28;
    }
}

@keyframes spincube {
  from,
  to {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  16% {
    transform: rotateY(-90deg) rotateZ(90deg);
  }
  33% {
    transform: rotateY(-90deg) rotateX(90deg);
  }
  50% {
    transform: rotateY(-180deg) rotateZ(90deg);
  }
  66% {
    transform: rotateY(-270deg) rotateX(90deg);
  }
  83% {
    transform: rotateX(90deg);
  }
}
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