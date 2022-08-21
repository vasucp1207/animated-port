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
            <img className='logo' src='/assets/initial.png' alt='initial' />
        </div>
        <div className='items'>
            <HomeIcon className='icon ppp'></HomeIcon>
            <PersonIcon className='icon' id='2' ></PersonIcon>
            <LaptopIcon className='icon' id='3' ></LaptopIcon>
            <ModeEditIcon className='icon' id='4' ></ModeEditIcon>
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
    justify-content: space-between;
    margin: 0;

    .logo{
        width: 50px;
        height: 50px;
        margin-left: 30px;
    }

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

    .ppp{
        :hover{
            &::after{
                content: '';
                display: block;
                width: 40px;
                height: 10px;
                background-color: black;
                color: black;
            }
        }
    }
`