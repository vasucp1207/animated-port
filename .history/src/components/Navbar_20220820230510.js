import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function Navbar() {
  return (
    <Container>
        <div className='items'>
            <HomeIcon></HomeIcon>
            <PersonIcon></PersonIcon>
            <LaptopIcon></LaptopIcon>
            <ModeEditIcon
        </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`

    .items{

    }
`