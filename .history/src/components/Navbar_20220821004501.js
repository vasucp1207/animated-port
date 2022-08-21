import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function Navbar() {
  return (
    <Container>
        <div>
            <img src'/assets/Vector 1.png' />
        </div>
        <div className='items'>
            <HomeIcon className='icon'></HomeIcon>
            <PersonIcon className='icon'></PersonIcon>
            <LaptopIcon className='icon'></LaptopIcon>
            <ModeEditIcon className='icon'></ModeEditIcon>
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
    margin: 0;

    .items{
        display: flex;
        gap: 30px;
        margin-right: 30px;
        z-index: 1;
    }

    .icon{
        width: 35px;
        height: 35px;
        color: var(--icon-bg);
        cursor: pointer;
        
        :hover{
            color: black;
        }
    }
`