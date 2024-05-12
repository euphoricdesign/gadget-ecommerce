import React from 'react'
import CardContainer from '@/components/ProductCard/CardContainer'
import ProductCard from '@/components/ProductCard/ProductCard'
import { getDataProducts } from '@/helpers/getData'

const CategoryPage = async ({ params }: { params: { category: string } }) => {

    const products = await getDataProducts()
    
    const filteredProducts = products?.filter(
        (product: any) => product.category.name.toLowerCase() === params.category.toLowerCase()
    )

  return (
    <CardContainer>
        {
            filteredProducts.length > 0 && (
                filteredProducts.map((product: any) => (
                    <ProductCard id={product.id} image={product.image} name={product.name} price={product.price} />
                ))
            )
        }
    </CardContainer>
  )
}

export default CategoryPage