import styled from "styled-components";

const StyledButton = styled.button`
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


const Button = (props) => {
  return (
    <StyledButton>
      {props.name}
    </StyledButton>
  )
}

export default Button