'use client'
import React, { useState } from 'react'
import { validateForm } from '../../helpers/validateForm'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email: string;
  password: string;
}


const Login: React.FC = () => {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
  })

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
          newErrors[field as keyof Errors] = `${field} es requerido.`
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

        const response = await fetch("http://localhost:3001/users/login", opciones)

        if (!response.ok) {
          throw new Error('Error en la petición'); // Si la respuesta no es exitosa, lanzamos un error
        }

        const data = await response.json()
        const { token, user } = data
        localStorage.setItem('userSession', JSON.stringify({ token: token, userData: user }))
        
        router.push("/")
      } else {
        alert('Todos los campos son obligatorios')
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='my-16'>
      <h1 className='text-center text-3xl font-bold mb-8'>Login</h1>
      <form onSubmit={handleSubmit} className='w-2/5 ml-auto mr-auto p-5 bg-slate-200 rounded shadow-md'>
        <label className='block my-2.5 font-bold'>Email</label>
        <input className={errors.email ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="email" value={formData.email} name='email' onChange={handleInputChange} />
        {errors.email && <p className="text-red-600 text-sm mb-4">{errors.email}</p>}

        <label className='block my-2.5 font-bold'>Password</label>
        <input className={errors.password ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="password" value={formData.password} name='password' onChange={handleInputChange} />
        {errors.password && <p className="text-red-600 text-sm mb-4">{errors.password}</p>}

        <button className='bg-sky-600 text-white py-2.5 px-5 mt-4 border-none rounded cursor-pointer text-base w-full hover:bg-sky-800'>Enviar</button>
      </form>
      <div className="text-center mt-5 mb-10">
        Do not have account? <Link href="/register" className="text-sky-600 no-underline hover:underline">Sign up</Link>
      </div>
    </div>
  )
}

export default Login