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

    .items{
        display: flex;
        gap: 30px;
        margin-right: 30px;
    }

    .icon{
        width: 35px;
        height: 35px;
        color: var(--icon-bg);
        cursor: pointer;
        
        /* :hover{
            color: black; */

            ::after{
                content: '';
                display: block;
                width: 60px;
                height: 30px;
                background-color: black;
            }
        /* } */
    }
`