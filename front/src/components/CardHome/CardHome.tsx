import Image from 'next/image'
import iphone from '../../../public/iphone1.png'
import headphones from '../../../public/headphones1.png'
import styles from './CardHome.module.css'

interface CardHomeProps {
    span: string;
    heading: string;
    width: number
    pTop: string;
    pLeft: string;
}

const CardHome: React.FC<CardHomeProps> = ({ span, heading, pTop}) => {
  return (
    <div className={`${styles.cardContent} ${pTop === '-30%' ? 'w-3/4 bg-[#ECECEC]' : 'w-2/4 bg-[#1E1E1E]'} mobile:hidden desktop:flex relative overflow-hidden h-80 p-16 rounded flex items-center`}>
        <div className='flex flex-col md:gap-6'>
            <span className={`${pTop === '-30%' ? '' : 'text-white'} text-sm font-medium`}>{span}</span>
            <h1 className={`${styles.h1} ${pTop === '-30%' ? 'w-96 text-[#1e1e1e]' : 'w-64 text-white'} text-4xl font-bold`}>{heading}</h1>
            <button className={`${styles.button} ${pTop === '-30%' ? 'w-56 border-[#1A1A1A] shadow-sm hover:-translate-y-1 transition duration-300' : 'w-36 border-white bg-white hover:-translate-y-1 transition duration-300'} font-medium text-sm p-2 rounded border`}>See more</button>
        </div>
        <Image className={`${pTop === '-30%' ? styles.img1 : styles.img2}`} src={pTop === '-30%' ? iphone : headphones} alt='iphone'/>
    </div>
  )
}

export default CardHome

