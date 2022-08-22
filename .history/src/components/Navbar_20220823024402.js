import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from 'react';

function Navbar() {

    const [theme, setTheme] = useState("light");

    function switchTheme(){
        setTheme((prev) => prev === "light"? "dark": "light")
    }

    console.log(theme)

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    const [blurNav, setNav] = use

    return (
        <Container dark={theme} className={}>
            <div>
                <img className='logo' src='/assets/initial.png' alt='initial' />
            </div>
            <div className='items'>
                <HomeIcon className='icon'></HomeIcon>
                <PersonIcon className='icon'></PersonIcon>
                <LaptopIcon className='icon'></LaptopIcon>
                {theme === "light" && <ModeNightIcon onClick={switchTheme} className='icon'></ModeNightIcon>}
                {theme === "dark" && <LightModeIcon onClick={switchTheme} className='icon'></LightModeIcon>}
            </div>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    /* background: ${(props) => (props.dark === 'dark'? 'var(--nav-dark-bg)': 'var(--nav-bg)')}; */
    color: ${(props) => (props.dark === 'dark'? 'white': 'var(--icon-bg)' )};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
        cursor: pointer;
        
        :hover{
            color: black;
        }
    }
`