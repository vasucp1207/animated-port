import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useContext, useEffect, useState } from 'react';

function Navbar() {

    const [theme, setTheme] = useState("light");

    function switchTheme(){
        setTheme((prev) => prev === "light"? "dark": "light")

        console.log(theme)
    }

    useEffect(() => {
        document.body.className = {theme}
    }, [theme])

    return (
        <Container>
            <div>
                <img className='logo' src='/assets/initial.png' alt='initial' />
            </div>
            <div className='items'>
                <HomeIcon className='icon'></HomeIcon>
                <PersonIcon className='icon'></PersonIcon>
                <LaptopIcon className='icon'></LaptopIcon>
                <ModeNightIcon onChange={switchTheme} className='icon'></ModeNightIcon>
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
`