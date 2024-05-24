'use client'

import { useEffect, useState } from 'react'
import { validateForm } from '../../helpers/validateForm'
import { useRouter } from 'next/navigation'
import styles from "../../components/CardHome/CardHome.module.css"
import Link from 'next/link'


interface FormData {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

interface Errors {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

const Register = () => {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
})
  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  })

  const [success, setSuccess] = useState<boolean>(false)
  const [userSession, setUserSession] = useState(localStorage.getItem("userSession") || null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value
    }) 

    validateAndUpdateErrors(name, value)
  }

  const validateAndUpdateErrors = (fieldName: string, value: string) => {
    const fieldError = validateForm(fieldName, value) //* Mensaje de error

    setErrors({
      ...errors,
      [fieldName]: fieldError
    })
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      //* Validar que todos los campos obligatorios estén llenos
      let isFormValid = true
      const newErrors:Partial<Errors> = {}
      for (const field in formData) {
        if (!formData[field as keyof FormData]) {
          newErrors[field as keyof Errors] = `${field} es requerido.`;
          isFormValid = false
        }
      }

      const updatedErrors: Errors = Object.assign({}, { email: '', password: '', name: '', address: '', phone: '' }, newErrors);

      setErrors(updatedErrors)

      if (isFormValid) {
        //* HAPPY PATH

        const opciones = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Tipo de contenido que estamos enviando
          },
          body: JSON.stringify(formData) // Convertimos los datos a formato JSON
        }

        const response = await fetch("http://localhost:3001/users/register", opciones)

        if (!response.ok) {
          throw new Error('Error en al intentar registrarse'); // Si la respuesta no es exitosa, lanzamos un error
        }

        const data = await response.json();
        console.log(data)

        setFormData({
          email: "",
          password: "",
          name: "",
          address: "",
          phone: ""
        })
        setSuccess(true)

        setTimeout(() => {
          router.push("/login")
        }, 1000)

      } else {
        alert('Todos los campos son obligatorios')
      }

    } catch (err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    if (userSession) router.push("/")
  })

  return (
    <div className='my-16'>
      <h1 className='text-center text-3xl font-bold mb-8'>Register</h1>
      <form onSubmit={handleSubmit} className='w-2/5 ml-auto mr-auto p-5 bg-[#f5f5f5] rounded shadow-md'>
        <label className='block my-2.5 font-bold'>Full Name</label>
        <input className={errors.name ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="text" value={formData.name} name='name' onChange={handleInputChange} />
        {errors.name && <p className="text-red-600 text-sm mb-4">{errors.name}</p>}

        <label className='block my-2.5 font-bold'>Email</label>
        <input className={errors.email ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="email" value={formData.email} name='email' onChange={handleInputChange} />
        {errors.email && <p className="text-red-600 text-sm mb-4">{errors.email}</p>}

        <label className='block my-2.5 font-bold'>Password</label>
        <input className={errors.password ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="password" value={formData.password} name='password' onChange={handleInputChange} />
        {errors.password && <p className="text-red-600 text-sm mb-4">{errors.password}</p>}

        <label className='block my-2.5 font-bold'>Address</label>
        <input className={errors.address ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="text" value={formData.address} name='address' onChange={handleInputChange} />
        {errors.address && <p className="text-red-600 text-sm mb-4">{errors.address}</p>}

        <label className='block my-2.5 font-bold'>Phone</label>
        <input className={errors.phone ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="text" value={formData.phone} name='phone' onChange={handleInputChange} />
        {errors.phone && <p className="text-red-600 text-sm mb-4">{errors.phone}</p>}


        <button className={`${styles.button} flex justify-center items-center gap-4 shadow-md w-full border-slate-800 bg-[#1A1A1A] text-white text-sm font-medium mt-8 hover:-translate-y-1 transition p-3 duration-300 rounded border-2`}>Send</button>
      
        {success && (
            <div className="mt-4 py-3 px-4 bg-[#e8f5e9] border border-[#c8e6c9] rounded text-sm text-[#2e7d32] flex items-center">
              <svg className="mr-2 text-[#4caf50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Your account was successfully created!
            </div>
          )}
      
      </form>
      <div className="text-center mt-5 mb-10">
        Already have an account? <Link href="/login" className="text-slate-500 no-underline hover:underline">Login here</Link>
      </div>
    </div>
  )
}

export default Register