import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useWindowResize = () => {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Inicializar el estado con el valor de isDesktop desde el servidor
    setIsDesktopView(router.isDesktop ?? false);

    // Verificar si window está disponible (en el cliente)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktopView(window.innerWidth >= 800);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [router.isDesktop]);

  return isDesktopView;
};

export default useWindowResize