'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from '../../components/CardHome/CardHome.module.css'
import Link from 'next/link';

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
        <div>
            {
                userPurchaseData.length > 0 ? (
                    <div className='flex gap-8 my-12'>
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
                    </div>
                ) : (
                  <div className='flex gap-8 my-12 justify-center'>
                    <div className="flex flex-col items-center">
                      <p className="text-lg">Aún no realizaste ninguna compra 💔</p>
                      <button className={`${styles.button} flex justify-center items-center gap-4 shadow-sm w-72 border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium mt-4 hover:-translate-y-1 transition p-3 duration-300 rounded border-2`}><Link href="/">Ver productos</Link></button>
                    </div>
                  </div>
                )
            }
        </div>
    </div>
  )
}

export default Purchases