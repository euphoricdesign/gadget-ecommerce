'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import IProduct from "@/types/IProduct"
import styles from "../../components/CardHome/CardHome.module.css"
import AuthLayout from "@/components/AuthLayout/AuthLayout"
import axios from 'axios'
import Link from "next/link"

const Cart = () => {

  const storedCart = localStorage.getItem("cart") 
  const [cart, setCart] = useState(storedCart ? JSON.parse(storedCart) : null)

  const storedUserSession = localStorage.getItem("userSession") 
  const [userSession, setUserSession] = useState(storedUserSession ? JSON.parse(storedUserSession) : null) 
  
  const [success, setSuccess] = useState<boolean>(false)

  const handleBuy = async () => {
    const orderProducts = new Set(cart.map((product: IProduct) =>  product.id))

    // Configuración de la petición, incluyendo el token en el encabezado y el array de IDs en el cuerpo
    const config = {
      headers: {
        'Authorization':  userSession.token // Establecer el token en el encabezado de autorización
      }
    } 

    // Objeto que contiene los datos que se enviarán en el cuerpo de la petición
    const data = {
      products: Array.from(orderProducts)
    } 

    // Realizar la petición POST utilizando Axios
    try {
      const response: any = await axios.post("http://localhost:3001/orders", data, config)
      const respuesta = response.data
      console.log('Respuesta:', respuesta) 

      setSuccess(true)
      setTimeout(() => {
        localStorage.setItem("cart", "[]")
        setCart([])
      }, 1500)
    } catch (error) {
      console.error('Error al realizar la petición:', error)
    } 
  }

  const handleDelete = (userId: any) => {
    
    // Eliminar el elemento del array
    const nuevoArray = cart.filter((item:any) => item.id !== userId);

    // Guardar el nuevo array en el localStorage
    localStorage.setItem("cart", JSON.stringify(nuevoArray));

    setCart(nuevoArray)
  }

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])


  return (
    <AuthLayout>
      <div>
        <h2 className="text-2xl font-bold text-[#454545] mb-10">Shopping Cart</h2>

        {
          cart && cart.length !== 0 ? (
            <>
              <div className="flex gap-11 flex-wrap">
                <div className="flex flex-col">
                  {
                    cart.map((product: IProduct) => (
                      <>
                        <div className="flex flex-col gap-6 flex-1 mt-4">
                          <div className="flex items-center gap-5">  
                            <Image className="w-36" width={100} height={1} src={product.image} alt="" />
                            <div className="flex flex-col items-start text-[#454545]">
                              <h3 className="text-xl font-semibold mb-3 flex justify-between w-full">{product.name} <span onClick={() => handleDelete(product.id)} className="font-normal cursor-pointer">X</span></h3>
                              <p className="mb-3">{product.description.slice(0, 48)}</p>
                              <p className="text-xl font-semibold mb-3">${product.price},00</p>
                              <button className={`${styles.button} shadow w-36 border-white bg-white font-medium text-sm p-2 rounded border-2 flex justify-between`}><span>-</span>1<span>+</span></button>
                            </div>
                          </div>
                          <hr className="mt-8" />
                        </div>
                      </>
                    ))
                  }
                </div>

                <div className="bg-[#f5f5f5] p-10 text-[#454545] flex flex-col gap-6 desktop:w-45percent mobile:w-full max-h-650 rounded-lg border-[#f5f5f5] border">
                  <p className="flex justify-between font-medium">Subtotal <span>${cart.reduce((acc:number, current:any) => acc + current.price, 0)},00</span></p>
                  <p className="flex justify-between font-medium">Shipping <span>$700,00</span></p>
                  <hr />

                  <p className="flex justify-between font-bold text-lg">Total <span>${cart.reduce((acc:number, current:any) => acc + current.price, 700)},00</span></p>
                  <hr />


                  <p className="text-sm text-slate-600">Do you have a discount coupon? Enter it here</p>
                  <input className="bg-transparent border-b border-b-[#454545] w-60 py-2 placeholder:text-sm" placeholder="Cupón de descuento" type="text" />
                  <button className={`${styles.button} w-56 border-slate-800 shadow-sm hover:-translate-y-1 transition duration-300 font-medium text-sm p-2 rounded border`}>Activate</button>
                  <button className={`${styles.button} flex justify-center items-center gap-4 shadow-sm w-72 border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium mt-4 hover:-translate-y-1 transition p-3 duration-300 rounded border-2`} onClick={handleBuy}>Make purchase</button>
                  {success && (
                  <div className="mt-4 py-3 px-4 bg-[#e8f5e9] border border-[#c8e6c9] rounded text-sm text-[#2e7d32] flex items-center">
                    <svg className="mr-2 text-[#4caf50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Successful purchase 
                  </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center" style={{height: '23rem'}}> 
              <p className="text-lg">There are no products in your cart 💔</p>
              <button className={`${styles.button} flex justify-center items-center gap-4 shadow-sm w-72 border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium mt-4 hover:-translate-y-1 transition p-3 duration-300 rounded border-2`}><Link href="/">Shop now!</Link></button>
            </div>
          )
        }
      </div>
    </AuthLayout>
  )
}

export default Cart