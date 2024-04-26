import './Navbar.css'

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  style?: React.CSSProperties & { '--i'?: number };
}

const Navbar: React.FC = () => {
  return (
    <header className="header">
        <a href="#" className="logo">Logo</a>

        <input type="checkbox" id='check' />
        <label htmlFor="check" className='icons'>
            <i className='bx bx-menu-alt-right bars' id='menu-icon'></i>
            <i className='bx bx-x x' id='close-icon'></i>
        </label> 
        <nav className="navbar">
          <a href="#" style={{ '--i': 0 }} {...({} as AnchorProps)}>Categories</a>
          <a href="#" style={{ '--i': 1 }} {...({} as AnchorProps)}>Notebooks</a>
          <a href="#" style={{ '--i': 2 }} {...({} as AnchorProps)}>Iphone</a>
          <a href="#" style={{ '--i': 3 }} {...({} as AnchorProps)}>Airpods</a>
        </nav>
    </header>
  )
}

export default Navbar

