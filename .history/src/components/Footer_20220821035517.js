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
                <FontAwesomeIcon className='socials' icon={faGithub} />
                <FontAwesomeIcon className='socials' icon={faTwitter} color="#5ED4F4" />
                <FontAwesomeIcon className='socials' icon={faMedium} />
                <FontAwesomeIcon className='socials' icon={faLinkedin} color="#027bb6" />
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
    gap: 20px;

    .social{
        
    }
`