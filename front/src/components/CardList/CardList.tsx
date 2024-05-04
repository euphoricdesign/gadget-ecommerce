import IProduct from "../../types/IProduct"
import ProductCard from "../ProductCard/ProductCard"
import CardContainer from "../ProductCard/CardContainer"
import { getDataProducts } from '../../helpers/getData'
import Link from "next/link"


interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>
}

const CardList: React.FC = async () => {

  const products: IProduct[] = await getDataProducts()
  
  return (
    <Container>
      <CardContainer>
        {products.length > 0 ? (
          products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard key={product.id} image={product.image} name={product.name} price={product.price} />
            </Link>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </CardContainer>
    </Container>
  );
};

export default CardList