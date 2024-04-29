import React from 'react'
import iphone from '../../../public/iphone1.png'

import Navbar from '../Navbar/Navbar'
import CardList from '../CardList/CardList'
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <>
        <Navbar />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex w-full mt-24 gap-4">
            <div style={{background: '#ececec'}} className="relative overflow-hidden w-3/4 h-80 p-16 rounded flex items-center">
              <div>
                <h1 className='text-4xl font-bold w-80'>Apple Iphone 15 PRO Max</h1>
                <button>Saber más</button>
              </div>
              <Image style={{width:300, position: 'absolute', top:'-30%', left: '55%'}} src={iphone} alt='iphone'/>
            </div>
            <div style={{background: '#1e1e1e'}} className="w-2/4 h-80 p-4 rounded">
              <h1>Card pequeña</h1> 
            </div>
          </div>


          <CardList />
        </div>
    </>
  )
}

export default Home