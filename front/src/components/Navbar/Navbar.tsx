'use client'
import { CiUser, CiShoppingCart  } from "react-icons/ci";
import styles from './Navbar.module.css'
import { useEffect, useState } from "react";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  style?: React.CSSProperties & { '--i'?: number };
}


const Navbar: React.FC = () => {

  const [sizeLoader, setSizeLoader] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSizeLoader(window.innerWidth < 768); // Ajusta el valor de 768 según tus necesidades
    };

    handleResize(); // Inicializa el valor de sizeLoader

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  
  return (<>

    {
      sizeLoader ? (
        <header className={styles.header}>
          <div className={styles.menuIcons}>
            <label htmlFor="check" className={styles.icons}>
              <i className={`${styles.icon} ${styles.menuIcon}`}>&#9776;</i>
              <i className={`${styles.icon} ${styles.close} ${styles.closeIcon}`}>&#10005;</i>
            </label> 
          </div>
          <input id="check" type="checkbox" className={styles.check} />
          
          <div className={`${styles.right} flex gap-4`}>
            <CiShoppingCart className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />
            <CiUser className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />
          </div>
          <a href="#" className={`${styles.logo} ${styles.left}`}>Logo</a>
          
          
          <nav className={styles.navbar}>
            <a href="#" style={{ '--i': 0 }} {...({} as AnchorProps)}>Categories</a>
            <a href="#" style={{ '--i': 1 }} {...({} as AnchorProps)}>Notebooks</a>
            <a href="#" style={{ '--i': 2 }} {...({} as AnchorProps)}>Iphone</a>
            <a href="#" style={{ '--i': 3 }} {...({} as AnchorProps)}>Airpods</a>
          </nav>

        
        </header>
      ) : (
        <header className={styles.header}>
        
        <a href="#" className={`${styles.logo} ${styles.left}`}>Logo</a>

        <input id="check" type="checkbox" className={styles.check} />
        <label htmlFor="check" className={styles.icons}>
          <i className={`${styles.icon} ${styles.menuIcon}`}>&#9776;</i>
          <i className={`${styles.icon} ${styles.close} ${styles.closeIcon}`}>&#10005;</i>
        </label> 
        
        <nav className={styles.navbar}>
          <a href="#" style={{ '--i': 0 }} {...({} as AnchorProps)}>Categories</a>
          <a href="#" style={{ '--i': 1 }} {...({} as AnchorProps)}>Notebooks</a>
          <a href="#" style={{ '--i': 2 }} {...({} as AnchorProps)}>Iphone</a>
          <a href="#" style={{ '--i': 3 }} {...({} as AnchorProps)}>Airpods</a>
        </nav>

        <div className={`${styles.right} flex gap-4`}>
          <CiShoppingCart className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />
          <CiUser className='text-2xl text-zinc-600 cursor-pointer hover:text-black' />
        </div>
    </header>

      )
    }
    
  </>)
}

export default Navbar