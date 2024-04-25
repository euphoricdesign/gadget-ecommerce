import Button from "../Button/Button"
import { HiBars3BottomRight } from 'react-icons/hi2'
import NavbarContainer from "./NavbarContainer"


const MobileNavbar = ({ isMenuOpen, handleClick }) => {
  return (
    <NavbarContainer>
       <div className="navbar__logo">
            <a className='navbar__logo--link'>
                <h1 className='navbar__logo--link--h1'>TechTrendz</h1>
            </a>
            <HiBars3BottomRight onClick={handleClick} className="navbar__logo--bars" />
        </div>
        <div className={` ${ isMenuOpen ? "navbar__show--menu" : "navbar__links" }`}>
          <ul>
              <hr className='hr' />
              <li>Categories</li>
              <li>Notebooks</li>
              <li>Iphone</li>
              <li>Accesories</li>
              <Button name={'Login'} />
          </ul>
        </div>
    </NavbarContainer>
  )
}

export default MobileNavbar