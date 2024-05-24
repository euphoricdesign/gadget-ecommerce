import { useEffect, useState } from "react"
import styled from "styled-components"
import ProductCard from "../ProductCard/ProductCard"
import axios from "axios";
import IProduct from "../../interfaces/IProduct";


interface ContainerProps {
  children: React.ReactNode;
}

const Container = styled.div<ContainerProps>`
  max-width: 1200px; /* Ajusta este valor según el ancho máximo deseado */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  padding: 0 20px; /* Añade un pequeño padding para separar el contenido de los bordes */
`;


interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = styled.div<CardContainerProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 16px;
  margin: 130px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardList: React.FC = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
      const fetchProducts = async () => {
        const products = await axios.get<IProduct[]>("http://localhost:3001/products")
        setProducts(products.data)
      }

      fetchProducts()

    }, [])

  
    return (
        <Container>
          <CardContainer>
           {products.length > 0 ? (
              products.map((product: any) => (
                <ProductCard key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                </ProductCard>
              ))
            ) : (
              <p>No hay productos disponibles</p>
            )}
          </CardContainer>
        </Container>
    )
}

export default CardList