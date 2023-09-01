import './navbar.styles.scss';
import { ReactComponent as Logo } from '../assets/COSMOS.svg';
import { ReactComponent as House } from '../assets/House.svg';
import { ReactComponent as Destination } from '../assets/Destination.svg';
import { ReactComponent as Spaceship } from '../assets/Spaceship.svg';
import { ReactComponent as Shop } from '../assets/Shop.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const handleResize = () => {
    if (window.innerWidth >= 600) {
      setMenuOpen(false);
    }
  };


  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='Header'>
      <div className='NavBar'>
        <div className='LogoContainer'>
          <Logo className='Logo' />
        </div>
        <div className='NavBarContainer'>
          <div className='NavLink'>
            <House className='MiniLogo' />
            Home
          </div>
          <div className='NavLink'>
            <Destination />
            Destination
          </div>
          <div className='NavLink'>
            <Spaceship />
            Spaceship
          </div>
        </div>
        <div className='MobileNav'>
            {menuOpen && (
              <div className='MobileMenu'>
                <div className='MobNavLink'>
                    Home
                </div>
                <div className='MobNavLink'>
            
                    Destination
                </div>
                <div className='MobNavLink'>
               
                    Spaceship
                </div>
              </div>
            )}
            <div
              className={`BarMenu ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <div className='Bar1'></div>
              <div className='Bar2'></div>
              <div className='Bar3'></div>
            </div>
        </div>
        <div className='Shop'>
          <Shop />
          0
        </div>
      </div>
    </div>
  );
};

export default NavBar;