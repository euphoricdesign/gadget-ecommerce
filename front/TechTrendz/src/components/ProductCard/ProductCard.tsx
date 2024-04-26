import styled from "styled-components"

interface ProductCardProps {
  children: React.ReactNode;
}

const ProductCard = styled.div<ProductCardProps>`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;


  /* Estilos adicionales para el contenido de la tarjeta */
  max-width: 300px; /* Ajusta el ancho máximo de la tarjeta */
  margin: 0 auto; /* Centra la tarjeta horizontalmente */

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #4e4e4e;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export default ProductCard