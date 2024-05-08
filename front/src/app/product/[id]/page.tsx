import Image from 'next/image'
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { CiShoppingCart  } from "react-icons/ci";
import { getProductById } from '@/helpers/getData'
import styles from '../../../components/CardHome/CardHome.module.css'
import "../../../components/ProductDetail/detail.css" //* CAMBIAR ESTO A CLASES TAILWIND O MODULE CSS EN SU DEFECTO.


interface ProductDetailParams {
  params: {
    id: string
  }
}

const ProductDetail = async ({ params }: ProductDetailParams) => {
  const product = await getProductById(params.id)

  return (
    <div className='container'>
        <div className='img__container flex justify-center' >
            <Image className='w-96' src={product.image} width={384} height={1} layout="responsive" alt={`${product.name}`} />
        </div>
        <div className='content__about p-10 bg-[#f5f5f5] rounded-lg border-[#f5f5f5] border'>
            <h2 className='font-bold text-2xl text-[#454545]'>{product.name}</h2>
            <span className='text-slate-500'>Iphones</span>
            <div className='flex mt-4 text-yellow-500 text-lg gap-1'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <CiStar/>
            </div>
            <span className='text-slate-500 mr-4'>3 reviews</span>
            <span className='text-slate-700'>Add your review</span>
            <p className='mt-8 line-through text-slate-400'>$1,800.00</p>
            <span className='text-3xl text-[#031A6B] font-semibold'>${product.price}</span>
            <p className='my-3.5 text-slate-500'>{product.description}</p>
            <div className='flex gap-8 mt-8'>
                <select className={`${styles.button} shadow w-36 border-white bg-white transition duration-300 font-medium text-sm p-2 pl-6 rounded border-2`}>
                    <option value="">Select color</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                </select>
                <button className={`${styles.button} shadow w-36 border-white bg-white transition duration-300 font-medium text-sm p-2 rounded border-2 flex justify-between`}><span>-</span>Quantity<span>+</span></button>
            </div>
            <button className={`${styles.button} flex justify-center items-center gap-4 shadow-md w-56 border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium mt-8 hover:-translate-y-1 transition p-3 duration-300 rounded border-2`}>
                <CiShoppingCart style={{fontSize:18}} /> Add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductDetail