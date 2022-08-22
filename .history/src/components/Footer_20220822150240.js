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
            <div className='claim'>@Copyright Vasu Singh</div>
            <div className='social'>
                <FontAwesomeIcon className='handles' icon={faGithub} />
                <FontAwesomeIcon className='handles' icon={faTwitter} color="#1e98e5" />
                <FontAwesomeIcon className='handles' icon={faMedium} />
                <FontAwesomeIcon className='handles' icon={faLinkedin} color="#027bb6" />
            </div>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    margin-top: 50px;
    height: 30vh;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .claim{
        font-size: ;
    }

    .social{
        display: flex;
        gap: 40px;
        margin-right: 20px;
        .handles{
            width: 70px;
            height: 70px;

            :hover{
                cursor: pointer;
                scale: 1.2;
                transition: 0.5s;
            }
        }
    }
`