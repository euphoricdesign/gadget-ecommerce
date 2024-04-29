interface ProductCardProps {
    image:string;
    name:string;
    price:number;
}
  
const ProductCard: React.FC<ProductCardProps> = ({
    image,
    name,
    price,
  }) => {
    return (
      <div className="bg-white shadow-md rounded-md overflow-hidden p-3">
        <img src={image} alt={name} className="w-full h-48 object-contain" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-700">Precio: ${price}</p>
        </div>
      </div>
    )
}

export default ProductCard