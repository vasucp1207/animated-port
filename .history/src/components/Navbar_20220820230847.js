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
            <ModeEditIcon></ModeEditIcon>
        </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    background: var(--nav-bg);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .items{
        display: flex;
        gap: 20px;
        margin-right: 25px;
        width: 40px;
        hie
    }
`