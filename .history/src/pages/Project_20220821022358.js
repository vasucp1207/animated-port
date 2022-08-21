import React from 'react'
import styled from 'styled-components'

function Project() {
  return (
    <Container>
        <div className='grid-cont'>
            <div style='backgroud-image: url(`${/assets/covid.png}`)'></div>
            <div style='backgroud-image: url(`${/assets/disney.png}`)'></div>
            <div style='backgroud-image: url(`${/assets/tesla.png}`)'></div>
            <div style='backgroud-image: url(`${/assets/Twitter.png}`)'></div>
        </div>  
    </Container>
  )
}

export default Project

const Container = styled.div`

`