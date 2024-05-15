import React from 'react'
import styles from '../../components/CardHome/CardHome.module.css'

const Assistance = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-[#454545] mb-6 mt-10'>How can we help you?</h2>
        <div className='flex items-center gap-3'>
            <input type="text" className='w-full p-2.5 border border-slate-300 rounded text-base' />
            <button className={`${styles.button} flex justify-center items-center gap-4 shadow-md border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium hover:-translate-y-1 transition p-3 duration-300 rounded border-2"`}>Buscar</button>
        </div>

        <div>
            <h3 className='text-2xl font-bold text-[#454545] mb-6 mt-10'>Purchases</h3>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 bg-[#f5f5f5] rounded-lg p-4">
                    <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none">
                    <path d="M..." /> {/* Icono de carrito de compras */}
                    </svg>
                    <span className="font-semibold">Manage and cancel purchases</span>
                </div>

                <div className="flex items-center space-x-2 bg-[#f5f5f5] rounded-lg p-4">
                    <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none">
                    <path d="M..." /> {/* Icono de devolución */}
                    </svg>
                    <span className="font-semibold">Returns and refunds</span>
                </div>

                <div className="flex items-center space-x-2 bg-[#f5f5f5] rounded-lg p-4">
                    <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none">
                    <path d="M..." /> {/* Icono de preguntas frecuentes */}
                    </svg>
                    <span className="font-semibold">Frequently asked questions on purchases</span>
                </div>
            </div>
        </div>

           <div>
            <h3 className='text-2xl font-bold text-[#454545] mb-6 mt-10'>Help about your account</h3>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 bg-[#f5f5f5] rounded-lg p-4">
                    <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none">
                    <path d="M..." /> {/* Icono de carrito de compras */}
                    </svg>
                    <span className="font-semibold">My account settings</span>
                </div>

                <div className="flex items-center space-x-2 bg-[#f5f5f5] rounded-lg p-4">
                    <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none">
                    <path d="M..." /> {/* Icono de devolución */}
                    </svg>
                    <span className="font-semibold">Security</span>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Assistance