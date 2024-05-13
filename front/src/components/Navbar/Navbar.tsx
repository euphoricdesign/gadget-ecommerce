'use client'
import { CiUser, CiShoppingCart } from "react-icons/ci" 
import { HiBars3CenterLeft } from "react-icons/hi2" 
import { IoCloseOutline } from "react-icons/io5" 
import { useEffect, useRef, useState } from "react" 
import { useRouter } from 'next/navigation'
import Link from "next/link" 
import Toastify from 'toastify-js'  
import styles from './Navbar.module.css'

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  style?: React.CSSProperties & { '--i'?: number } 
}

const Navbar: React.FC = () => {

  const [sizeLoader, setSizeLoader] = useState<boolean>(false) 
  const [showModal, setShowModal] = useState<boolean>(false)
  const [userSession, setUserSession] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("userSession") || null  
    }
    return null  
  })  

  const modalRef = useRef<HTMLDivElement | null>(null)
  const currentClickRef = useRef<EventTarget | null>(null) 

  const router = useRouter()


  const handleShowModal = (event: React.MouseEvent<SVGElement>) => {
    currentClickRef.current = event.target 
    setShowModal((prevShowModal) => !prevShowModal) 
  } 

  const handleCloseModal = () => {
    setShowModal(false) 
  }

  const handleCartNotification = () => {
    if (!userSession) {
      // Crear una instancia de notificación
      const myToast =   Toastify({
        text: 'Inicia sesión para ver cesta de compras',
        className: 'toastify',
        position: 'left',
        gravity: 'bottom',
        duration: 999999999, // Duración muy grande para simular permanencia en pantalla
        close: true
      })

      // Mostrar la notificación
      myToast.showToast() 
  
    } else {
      router.push("/cart")
    }
  }

  const removeUserFromLocalStorage = () => {
    try {
      localStorage.removeItem('userSession')
      localStorage.removeItem('cart')
      setUserSession(null)
    } catch (err) {
      console.error('Error al eliminar el usuario del localStorage:', err) 
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const storedSession = localStorage.getItem('userSession')  
      if (storedSession !== userSession) {
        setUserSession(storedSession || null)  
      }
    }, 1000)   // Verifica cada 1 segundo

    return () => clearInterval(interval)  
  }, [userSession])  


  useEffect(() => {
    const handleResize = () => {
      setSizeLoader(window.innerWidth < 769)  
    } 

    handleResize()  // Inicializa el valor de sizeLoader

    window.addEventListener('resize', handleResize) 

    return () => {
      window.removeEventListener('resize', handleResize) 
    } 
  }, []) 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current?.contains(event.target as Node) && // Operador de aserción de tipo as Node para asegurarnos de que event.target sea un nodo del DOM. Es necesario porque event.target puede ser null 
        event.target !== currentClickRef.current
      ) {
        handleCloseModal()  
      }
    }

    document.addEventListener('mousedown', handleClickOutside) 

    return () => {
      document.removeEventListener('mousedown', handleClickOutside) 
    } 
  }, []) 

  return (<>

    {
      sizeLoader ? (
        <header className={styles.header}>
          <div className={styles.menuIcons}>
            <label htmlFor="check" className={styles.icons}>
              <HiBars3CenterLeft className={`${styles.icon} ${styles.menuIcon} text-2xl`} />
              <IoCloseOutline  className={`${styles.icon} ${styles.close} ${styles.closeIcon} text-2xl`} />
            </label> 
          </div>
          <input id="check" type="checkbox" className={styles.check} />
          
          <div className={`${styles.right} flex gap-4`}>
            <CiShoppingCart onClick={handleCartNotification} className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />
            <CiUser onClick={handleShowModal} className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />
            
            {showModal && (
              <div className="absolute top-120 w-48 bg-white flex gap-4 justify-center left-48 p-5 h-32 rounded shadow-md" ref={modalRef}>
                <div>
                  <ul className="flex flex-col gap-3">
                    <li onClick={handleCloseModal}><Link href={userSession ? "/dashboard" : "/login"}>{userSession ? "Mi cuenta" : "Inicia sesión"}</Link></li>
                    <li onClick={handleCloseModal}><Link href="">Guardados</Link></li>
                    {userSession && <li onClick={handleCloseModal}><Link onClick={removeUserFromLocalStorage} href="#">Cerrar sesión</Link></li>}
                  </ul>
                </div>
              </div>
            )}

          </div>
          <Link href="/" className={`${styles.logo} ${styles.left}`}>gadget</Link>
          
          
          <nav className={styles.navbar}>
            <Link href="/categories" style={{ '--i': 2 }} {...({} as AnchorProps)}>Categories</Link>
            <Link href="/assistance" style={{ '--i': 1 }} {...({} as AnchorProps)}>Assistance</Link>
            <Link href="/contact" style={{ '--i': 3 }} {...({} as AnchorProps)}>Contact</Link>
          </nav>

        
        </header>
      ) : (
      <header className={`${styles.header} px-32`}>
        <Link href="/" className={`${styles.logo} ${styles.left}`}>gadget</Link>

        <input id="check" type="checkbox" className={styles.check} />
        <label htmlFor="check" className={styles.icons}>
          <i className={`${styles.icon} ${styles.menuIcon}`}>&#9776 </i>
          <i className={`${styles.icon} ${styles.close} ${styles.closeIcon}`}>&#10005 </i>
        </label> 

        <nav className={styles.navbar}>
          <Link href="/categories" style={{ '--i': 2, marginLeft: 0 }} {...({} as AnchorProps)}>Categories</Link>
          <Link href="/assistance" style={{ '--i': 1 }} {...({} as AnchorProps)}>Assistance</Link>
          <Link href="/contact" style={{ '--i': 3 }} {...({} as AnchorProps)}>Contact</Link>
        </nav>

        <div className={`${styles.right} flex gap-4 relative`}>
          <CiShoppingCart onClick={handleCartNotification} className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />
          <CiUser onClick={handleShowModal} className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />

          {showModal && (
            <div className="absolute top-10 w-48 bg-white flex gap-4 justify-center -left-55 p-5 h-32 rounded shadow-md" ref={modalRef}>
              <div>
                <ul className="flex flex-col gap-3">
                  <li onClick={handleCloseModal}><Link href={userSession ? "/dashboard" : "/login"}>{userSession ? "Mi cuenta" : "Inicia sesión"}</Link></li>
                  <li onClick={handleCloseModal}><Link href="">Guardados</Link></li>
                  {userSession && <li onClick={handleCloseModal}><Link onClick={removeUserFromLocalStorage} href="#">Cerrar sesión</Link></li>}
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>

      )
    }
    
  </>)
}

export default Navbar
