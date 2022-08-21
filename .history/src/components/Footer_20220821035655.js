import React from 'react'
import styled from 'styled-components'
import {
    faGithub,
    faTwitter,
    faMedium,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <Container>
            <div className='social'>
                <FontAwesomeIcon className='handles' icon={faGithub} />
                <FontAwesomeIcon className='handles' icon={faTwitter} color="#5ED4F4" />
                <FontAwesomeIcon className='handles' icon={faMedium} />
                <FontAwesomeIcon className='handles' icon={faLinkedin} color="#027bb6" />
            </div>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    margin-top: 150px;
    height: 30vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .social{
        display: flex;
        gap: 40px;
        .handles{
            width: 70px;
            height: 70px;

            :hover{
                cursor: pointer;
                scale: 1.07;
                transition: cubic-bezier(0.165, 0.84, 0.44, 1);
            }
        }
    }
`