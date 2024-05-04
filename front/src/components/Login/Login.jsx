'use client'
import React, { useState } from 'react'
import { validateForm } from '../../helpers/validateForm'
import { useRouter } from 'next/navigation'


const Login = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value
    }) 

    validateAndUpdateErrors(name, value)
  }

  const validateAndUpdateErrors = (fieldName, value) => {
    const fieldError = validateForm(fieldName, value) //* Mensaje de error

    setErrors({
      ...errors,
      [fieldName]: fieldError
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      //* Validar que todos los campos obligatorios estén llenos
      let isFormValid = true
      const newErrors = {}
      for (const field in formData) {
        if (!formData[field]) {
          newErrors[field] = `${field} es requerido.`
          isFormValid = false
        }
      }

      setErrors(newErrors)

      if (isFormValid) {
        //* HAPPY PATH
        console.log("Iniciaste sesión correctamente")
        router.push("/")
      } else {
        alert('Todos los campos son obligatorios')
      }

    } catch (err) {
      console.log('Ocurrió un error al iniciar sesión')
    }
  }

  return (
    <div className='my-16'>
      <h1 className='text-center text-3xl font-bold mb-8'>Login</h1>
      <form onSubmit={handleSubmit} className='w-2/5 ml-auto mr-auto p-5 bg-slate-200 rounded shadow-md'>
        <label className='block my-2.5 font-bold'>Username</label>
        <input className={errors.name ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="text" value={formData.name} name='username' onChange={handleInputChange} />
        {errors.username && <p className="text-red-600 text-sm mb-4">{errors.username}</p>}

        <label className='block my-2.5 font-bold'>Password</label>
        <input className={errors.name ? 'border-2 border-red-600 w-full bg-red-200 p-2.5 rounded text-base mb-2.5' : 'w-full p-2.5 border border-slate-300 rounded text-base mb-2.5'} type="password" value={formData.email} name='password' onChange={handleInputChange} />
        {errors.password && <p className="text-red-600 text-sm mb-4">{errors.password}</p>}

        <button className='bg-sky-600 text-white py-2.5 px-5 mt-4 border-none rounded cursor-pointer text-base w-full hover:bg-sky-800'>Enviar</button>
      </form>
      <div className="text-center mt-5 mb-10">
        Already have an account? <a href="#" className="text-sky-600 no-underline hover:underline">Login here</a>
      </div>
    </div>
  )
}

export default Login