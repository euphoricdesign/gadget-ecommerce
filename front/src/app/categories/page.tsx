import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-[#454545] mb-6 mt-10'>Categories</h2>
        <div className='flex gap-8 flex-wrap desktop:justify-start mobile:justify-center'>
            <Link href="/categories/smartphones">
                <div>
                    <div className='bg-white shadow-md rounded-md overflow-hidden p-3 w-60 h-80 flex flex-col justify-center items-center gap-4'>
                        <Image src="https://http2.mlstatic.com/D_NQ_NP_2X_786356-MLM51559385272_092022-F.webp" className='w-36 h-auto' width={100} height={1} alt="" />
                        <h3 className='text-lg font-semibold'>Smartphones</h3>
                    </div>
                </div>
            </Link>
           <Link href="/categories/ipads">
                <div>
                    <div className='bg-white shadow-md rounded-md overflow-hidden p-3 w-60 h-80 flex flex-col justify-center items-center gap-4'>
                        <Image src="https://ofertones.com.ar/cdn/shop/products/D_NQ_NP_803992-MLA52988770428_122022-F.jpg?v=1705949937&width=767" className='w-36 h-auto' width={100} height={1} alt="" />
                        <h3 className='text-lg font-semibold'>iPads</h3>
                    </div>
                </div>
           </Link>
            <Link href="/categories/airpods">
                <div>
                    <div className='bg-white shadow-md rounded-md overflow-hidden p-3 w-60 h-80 flex flex-col justify-center items-center gap-4'>
                        <Image src="https://http2.mlstatic.com/D_NQ_NP_2X_763092-MLA45715455112_042021-F.webp" className='w-36 h-auto' width={100} height={1} alt="" />
                        <h3 className='text-lg font-semibold'>Airpods</h3>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Categories