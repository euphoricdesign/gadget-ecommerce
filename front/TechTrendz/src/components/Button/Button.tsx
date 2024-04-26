import styled from "styled-components";

interface IButtonProps {
  name: string;
}

interface StyledButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.button<StyledButtonProps>`
  margin-top: 0; 
  margin-bottom: 20px; 
  font-size: .9rem; 
  margin-right: 30px; 
  border: none;
  width:150px;

  padding: 10px;
  height: 40px;
  border-radius: 50px;
  color: white;
  background: #cd8fd8;
  cursor: pointer;
  transiton: opacity 300ms ease;

  &:hover {
    opacity: 0.8;
  }


  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`


const Button: React.FC<IButtonProps> = ({name}) => {
  return (
    <StyledButton>
      {name}
    </StyledButton>
  )
}

export default Button