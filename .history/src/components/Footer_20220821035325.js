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
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faTwitter} color="#5ED4F4" />
                <FontAwesomeIcon icon={faMedium} />
                <FontAwesomeIcon icon={faLinkedin} color="#5ED4F4" />
            </div>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    margin-top: 150px;
    height: 30vh;
    background: white;
`