'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    // Obtener la sesión del usuario desde el localStorage
    const userSession = localStorage.getItem('userSession');

    if (!userSession) {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Renderizar un componente de carga mientras se verifica la autenticación
  if (!isAuthenticated) {
    return <div>Cargando...</div>;
  }

  // Renderizar el contenido protegido solo si el usuario está autenticado
  return <div>{children}</div>;
}