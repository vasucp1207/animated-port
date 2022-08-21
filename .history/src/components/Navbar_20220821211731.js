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
                <div className='icon1'><HomeIcon className='icon'></HomeIcon></div>
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
            ::after{
                display: block;
                width: 50px;
                height: 9px;
                background-color: black;
                color: black;
                margin-top: 5px;
                z-index: 1;
            }
        }
    }

    .icons
`