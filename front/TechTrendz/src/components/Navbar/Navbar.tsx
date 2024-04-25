
import { useState } from 'react'
import useWindowResize from '../../hooks/useResizeWindow'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import './Navbar.css'

const Navbar = () => {
  const isDesktopView = useWindowResize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => setIsMenuOpen(!isMenuOpen)

  return (
    <> 
        {
          isDesktopView 
          ?
            <DesktopNavbar />
          :
            <MobileNavbar isMenuOpen={isMenuOpen} handleClick={handleClick} />
          }
      </>
  )
}

export default Navbar