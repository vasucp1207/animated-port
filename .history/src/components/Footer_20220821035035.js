import React from 'react'
import styled from 'styled-components'
import {
    faGithub,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <Container>
        <FontAwesomeIcon icon={fagi} color="#DD0031" />
    </Container>
  )
}

export default Footer

const Container = styled.div`
    margin-top: 150px;
    height: 30vh;
    background: white;
`