import './navbar.styles.scss'
import {ReactComponent as Logo} from '../assets/COSMOS.svg'
import {ReactComponent as House} from '../assets/House.svg'
import {ReactComponent as Destination} from '../assets/Destination.svg'
import {ReactComponent as Spaceship} from '../assets/Spaceship.svg'
import {ReactComponent as Shop} from '../assets/Shop.svg'

const NavBar = () => {
    return(
        <div className='Header'>
            <div className='NavBar'>
            <div className='LogoContainer'>
                <Logo className='Logo'/>
            </div>
            <div className='NavBarContainer'>
                <div className='NavLink'>
                    <House/>
                    Home
                </div>
                <div className='NavLink'> 
                    <Destination/>
                    Destination
                </div>
                <div className='NavLink'>
                    <Spaceship/>
                    Spaceship
                </div>
            </div>
            <div className='Shop'>
                    <Shop/>
                    0
            </div>
            </div>
        </div>
    )
}

export default NavBar;