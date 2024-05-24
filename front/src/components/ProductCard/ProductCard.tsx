'use client'
import { useEffect, useState } from "react" 
import { getProductById } from "@/helpers/getData" 
import IProduct from "@/types/IProduct" 
import Link from "next/link" 
import { usePathname, useRouter } from "next/navigation" 
import { CiShoppingCart  } from "react-icons/ci" 
import Toastify from 'toastify-js'


interface ProductCardProps {
  id: string 
  image:string 
  name:string 
  price:number 
}
  
const ProductCard: React.FC<ProductCardProps> = ({
    id,
    image,
    name,
    price,
  }) => {

    const pathname = usePathname()

    const [userSession, setUserSession] = useState(null) 
  
    const [product, setProduct] = useState<IProduct>()
  
    const router = useRouter()
  
    const handleAddToCart = async(event: any) => {
      event.stopPropagation()
      
      if (!userSession) {
        // Crear una instancia de notificación
        const myToast =   Toastify({
          text: 'Inicia sesión para agregar productos',
          className: 'toastify',
          position: 'left',
          gravity: 'bottom',
          duration: 999999999, // Duración muy grande para simular permanencia en pantalla
          close: true
        })
  
        // Mostrar la notificación
        myToast.showToast() 
      } else {
        const product = await getProductById(id)
        setProduct(product)
        const cart = JSON.parse(localStorage.getItem("cart") || "[]")
        if (!cart.includes(product)) {
          cart.push(product)
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        router.push("/cart")
      }
    }

    useEffect(() => {
      const isClient = typeof window !== 'undefined';
  
      if (isClient) {
        const storedUserSession = localStorage.getItem('userSession')
        setUserSession(storedUserSession ? JSON.parse(storedUserSession) : null)
      }
    }, [])


    return (
      <div className="bg-white shadow-md rounded-md overflow-hidden p-3 h-22rem">
        <Link href={`/product/${id}`}><img src={image} alt={name} className="w-full h-48 object-contain" /></Link>
        
        <div className="p-4 flex flex-col desktop:gap-4 mobile:gap-1">
          <h3 className="desktop:text-lg font-semibold mb-2 mobile:text-sm">{name}</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Price:</p>
              <p className="font-semibold desktop:text-base mobile:text-sm">${price}</p>
            </div>
            <span onClick={handleAddToCart} className={`${pathname === '/purchases' ? 'hidden' : ''} bg-[#1e1e1e] w-9 h-9 rounded text-white flex items-center justify-center text-center cursor-pointer desktop:text-base mobile:text-sm`}><CiShoppingCart /></span>
          </div>
        </div>
      </div>
    )
}

export default ProductCard