'use client'
import React, { useState } from "react"
import IProduct from "../../types/IProduct"
import ProductCard from "../ProductCard/ProductCard"
import CardContainer from "../ProductCard/CardContainer"


interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="">{children}</div>
}

const CardList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "iPhone 11",
      price: 699,
      description:
        "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_656548-MLA46114829749_052021-F.webp",
      categoryId: 1,
      stock: 10,
    },
    {
      id: 2,
      name: "Apple Vision Pro",
      price: 999,
      description:
        "With Apple Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you.",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTA8yg-HAqKDg_rswkmU_i_xTkYI9HJdvtJiPyIhsBglndtAA1G17VzddIVjhYQusGOL-XWoxJ-PhG-63fHOGbZmLDyqjLI",
      categoryId: 2,
      stock: 10,
    },
    {
      id: 3,
      name: "iPad Pro",
      price: 799,
      description:
        "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
      image:
        "https://ofertones.com.ar/cdn/shop/products/D_NQ_NP_803992-MLA52988770428_122022-F.jpg?v=1705949937&width=750",
      categoryId: 3,
      stock: 10,
    },
    {
      id: 4,
      name: "Apple Watch Series 6",
      price: 399,
      description:
        "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_739213-MLA46332952432_062021-F.webp",
      categoryId: 4,
      stock: 10,
    },
    {
      id: 5,
      name: "AirPods Pro",
      price: 249,
      description:
        "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp",
      categoryId: 5,
      stock: 10,
    },
    {
      id: 6,
      name: "HomePod mini",
      price: 99,
      description:
        "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
      categoryId: 6,
      stock: 10,
    },
  ])

  return (
    <Container>
      <CardContainer>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} image={product.image} name={product.name} price={product.price} />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </CardContainer>
    </Container>
  );
};

export default CardList