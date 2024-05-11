'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '@/components/ProductCard/ProductCard';

const Purchases = () => {
  const storedUserSession = localStorage.getItem("userSession");
  const [userSession, setUserSession] = useState(storedUserSession ? JSON.parse(storedUserSession) : null);

  const [userPurchaseData, setUserPurchaseData] = useState([])

  useEffect(() => {
    const getPurchaseData = async (token:string) => {
      const config = {
        headers: {
          'Authorization':  token // Establecer el token en el encabezado de autorización
        }
      } 
      const purchaseData = await axios.get("http://localhost:3001/users/orders", config)
      const data = purchaseData.data
      
      setUserPurchaseData(data)
    }

    getPurchaseData(userSession?.token)
  },[])
  return (
    <div>
        <h2 className='text-2xl font-bold text-[#454545] mb-4 mt-10'>Mis compras</h2>
        <div className='flex gap-8 my-12'>
            {
                userPurchaseData ? (
                    <>
                        {
                            userPurchaseData.map(purchase => (
                                <>
                                    {
                                        purchase.products.map(product => (
                                            <ProductCard id={product.id} image={product.image} name={product.name} price={product.price} />
                                        ))
                                    }
                                </>
                            ))
                        }
                    </>
                ) : (
                    <>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Purchases