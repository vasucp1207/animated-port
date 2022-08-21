import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <div className='grid-cont'>
            <div style="background-image: url('${/assets/covid.png})"></div>
            <div className='project'></div>
            <div className='project'></div>
            <div className='project'></div>
            <div className='project'></div>
        </div>  
    </Container>
  )
}

export default Project

const Container = styled.div`
`