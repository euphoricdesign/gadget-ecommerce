import ProductDetail from '@/components/ProductDetail/ProductDetail'
import { getProductById } from '@/helpers/getData'

const ProductDetailPage = async ({params}) => {
  const product = await getProductById(params.id)

  return (
    <ProductDetail product={product} />
  )
}

export default ProductDetailPage