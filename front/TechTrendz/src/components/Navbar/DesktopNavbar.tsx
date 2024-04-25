
import Button from '../Button/Button'
import NavbarContainer from "./NavbarContainer"
import './Navbar.css'

const DesktopNavbar = () => {
  return (
    <NavbarContainer>
        <a className='navbar__logo--link'>
          <h1 className='navbar__logo--link--h1'>TechTrendz</h1>
        </a>
        <div>
          <ul className='navbar__desktop'>
            <li>Categories</li>
            <li>Notebooks</li>
            <li>Iphone</li>
            <li>Airpods</li>
          </ul>
        </div>
        <Button name={'Login'} />
    </NavbarContainer>
  )
}

export default DesktopNavbar