import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <div className='grid-cont'>
            <img className='' src='/assets/covid.png' alt='project-img' />
            <img className='' src='/assets/tesla.png' alt='project-img' />
            <img className='' src='/assets/disney.png' alt='project-img' />
            <img className='' src='/assets/Twitter.jpeg' alt='project-img' />
        </div>  
    </Container>
  )
}

export default Project

const Container = styled.div`
`