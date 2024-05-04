'use client'

import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className={`${pathname === '/login' && 'absolute bottom-0 w-full'} bg-white py-6 border-t border-slate-100 h-75 w-full mt-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
                <p className="text-slate-900">
                    &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer