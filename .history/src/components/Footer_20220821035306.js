import React from 'react'
import styled from 'styled-components'
import {
    faGithub,
    faTwitter,
    faMedium,
    faLinkedin,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <Container>
    <div>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faTwitter} color="#5ED4F4" />
        <FontAwesomeIcon icon={faMedium} />
        <FontAwesomeIcon icon={faLinkedin} />
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