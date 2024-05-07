import Image from "next/image"
import imagen from "../../../public/iphone2.png"
import styles from "../../components/CardHome/CardHome.module.css"

const Cart = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#454545] mb-10">Cesta de Compras</h2>

      <div className="flex gap-11">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-5">  
            <Image className="w-32" src={imagen} alt="" />
            <div className="flex flex-col items-start text-[#454545]">
              <h3 className="text-xl font-semibold mb-3">Nombre producto</h3>
              <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod quas eius.</p>
              <p className="text-xl font-semibold mb-3">$888,00</p>
              <button className={`${styles.button} shadow w-36 border-white bg-white font-medium text-sm p-2 rounded border-2 flex justify-between`}><span>-</span>1<span>+</span></button>
            </div>
          </div>
          <hr className="mt-8" />

          <div className="flex items-center gap-5">  
            <Image className="w-32" src={imagen} alt="" />
            <div className="flex flex-col items-start text-[#454545]">
              <h3 className="text-xl font-semibold mb-3">Nombre producto</h3>
              <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod quas eius.</p>
              <p className="text-xl font-semibold mb-3">$888,00</p>
              <button className={`${styles.button} shadow w-36 border-white bg-white font-medium text-sm p-2 rounded border flex justify-between`}><span>-</span>2<span>+</span></button>
            </div>
          </div>
          <hr className="mt-8" />
        </div>

        <div className="bg-[#f5f5f5] p-10 text-[#454545] flex flex-col gap-6 w-45percent rounded-lg border-[#f5f5f5] border">
          <p className="flex justify-between font-medium">Subtotal <span>$2664,00</span></p>
          <p className="flex justify-between font-medium">Envio <span>$700,00</span></p>
          <hr />

          <p className="flex justify-between font-bold text-lg">Total <span>$3.364,00</span></p>
          <hr />


          <p className="text-sm text-slate-600">¿Tiene un cupón de descuento? Ingréselo acá</p>
          <input className="bg-transparent border-b border-b-[#454545] w-60 py-2 placeholder:text-sm" placeholder="Cupón de descuento" type="text" />
          <button className={`${styles.button} w-56 border-slate-800 shadow-sm hover:-translate-y-1 transition duration-300 font-medium text-sm p-2 rounded border`}>Activar</button>
          <button className={`${styles.button} flex justify-center items-center gap-4 shadow-sm w-72 border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium mt-4 hover:-translate-y-1 transition p-3 duration-300 rounded border-2`}>Realizar compra</button>
        </div>
      </div>
    </div>
  )
}

export default Cart