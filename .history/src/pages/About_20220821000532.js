import React from 'react'
import styled from 'styled-components'
import ProgressBar from '../components/ProgressBar'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        </Container>
    )
}

export default About

const Container = styled.div`

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