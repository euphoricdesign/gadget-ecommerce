'use client'

import { useState } from "react"
import AuthLayout from "../../components/AuthLayout/AuthLayout"
const Dashboard = () => {
  const storedUserSession = localStorage.getItem("userSession");
  const [userSession, setUserSession] = useState(storedUserSession ? JSON.parse(storedUserSession) : null);
  const { userData } = userSession
  const name = userData.name.split(' ')[0]
  
  return (
    <AuthLayout>
      <div>
        <h2 className="text-2xl font-bold text-[#454545] mb-10">Buenos días, <span className="text-sky-800">{name}</span></h2>
        <div className="flex justify-between">
          <div className="bg-[#f5f5f5] p-10 text-[#454545] flex flex-col gap-6 w-6/12 rounded-lg border-[#f5f5f5] border">
            <h3 className="text-xl font-semibold">Datos del cliente</h3>
            <span className="flex justify-between font-semibold">Name: <span className="font-normal">{userData.name}</span></span>
            <span className="flex justify-between font-semibold">Address: <span className="font-normal">{userData.address}</span></span>
            <span className="flex justify-between font-semibold">Phone: <span className="font-normal">{userData.phone}</span></span>
            <span className="flex justify-between font-semibold">Email: <span className="font-normal">{userData.email}</span></span>
          </div>

          <div className="bg-[#f5f5f5] p-10 text-[#454545] flex flex-col gap-6 w-45percent rounded-lg border-[#f5f5f5] border">
            <h3 className="text-2xl font-bold text-[#454545]">Mis compras</h3>
            <span>No ha hecho ninguna compra con esta cuenta</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Dashboard