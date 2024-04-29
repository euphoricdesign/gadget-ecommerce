import Button from '../Button/Button'
import './Navbar.css'

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  style?: React.CSSProperties & { '--i'?: number };
}

const Navbar: React.FC = () => {
  return (
    <header className="header">
        <a style={{marginLeft:"7.5rem"}} href="#" className="logo">Logo</a>

        <input type="checkbox" id='check' />
        <label htmlFor="check" className='icons'>
          <i id="menu-icon" className="icon">&#9776;</i>
          <i id="close-icon" className="icon close">&#10005;</i>
        </label> 
        <nav className="navbar">
          <a href="#" style={{ '--i': 0 }} {...({} as AnchorProps)}>Categories</a>
          <a href="#" style={{ '--i': 1 }} {...({} as AnchorProps)}>Notebooks</a>
          <a href="#" style={{ '--i': 2 }} {...({} as AnchorProps)}>Iphone</a>
          <a href="#" style={{ '--i': 3 }} {...({} as AnchorProps)}>Airpods</a>
        </nav>

        <Button name={"Login"} />
    </header>
  )
}

export default Navbar

