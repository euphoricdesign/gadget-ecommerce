import { useEffect, useState } from "react"

const useWindowResize = () => {
    const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 800)
  
    useEffect(() => {
      const handleResize = () => {
        setIsDesktopView(window.innerWidth >= 800)
      }
  
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return isDesktopView
  }

  export default useWindowResize