import styled from 'styled-components'

const NavbarContainer = styled.nav`
  background-color: hsla(0,0%,100%,.8);
  background: hsla(0,0%,100%,.88);
  backdrop-filter: blur(12px);

  position: fixed;
  top: 0;
  width: 100%;

  @media (min-width: 800px) {
    display: flex;
    
    justify-content: space-between;
    align-items: center;
  }
`

export default NavbarContainer