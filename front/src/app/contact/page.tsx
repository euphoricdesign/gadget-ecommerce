import React from 'react'
import styles from '../../components/CardHome/CardHome.module.css'

const Contact = () => {
  return (
    <div className='mt-16'>
    <h1 className='text-center text-3xl font-bold mb-8 text-[#454545]'>Contact Us</h1>
    <form className='desktop:w-2/5 ml-auto mr-auto p-5 bg-[#f5f5f5] rounded shadow-md'>
      <label className='block my-2.5 font-bold'>Name</label>
      <input className='w-full p-2.5 border border-slate-300 rounded text-base mb-2.5' type="text" />

      <label className='block my-2.5 font-bold'>Email</label>
      <input className='w-full p-2.5 border border-slate-300 rounded text-base mb-2.5' type="text" />

      <label className='block my-2.5 font-bold'>Phone</label>
      <input className='w-full p-2.5 border border-slate-300 rounded text-base mb-2.5' type="text" />

      <label className='block my-2.5 font-bold'>Message</label>
      <textarea className='w-full p-2.5 border border-slate-300 rounded text-base mb-2.5' />
      

      <button className={`${styles.button} flex justify-center items-center gap-4 shadow-md w-full border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium mt-8 hover:-translate-y-1 transition p-3 duration-300 rounded border-2`}>Send</button>

    </form>
  </div>
  )
}

export default Contact