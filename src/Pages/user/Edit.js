import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setName(res.data.name)
        setEmail(res.data.email)
        setPhone(res.data.phone)
        console.log(res.data.name)
      })
  }, [])
  const { id } = useParams()
  const data = {
    name: name,
    email: email,
    phone: phone
  }
  const Update = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${id}`, data)
    .then(
      navigate("/")
    )
  }

  return (

    <div className='w-screen-full justify-center flex flex-col items-center'>
      <h1 className='text-3xl font-semibold text-black mt-4 '>Add User</h1>
      <form className='w-[80%] h-full flex flex-col mt-4 justify-center items-center'>

        <input onChange={e => setName(e.target.value)}  value={name} placeholder='Enter Your Name' className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 py-6 pl-6 mb-4' type="text" />
        <input onChange={e => setEmail(e.target.value)}  value={email} placeholder='Enter Your Email' className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 py-6 pl-6 mb-4' type="email" />
        <input onChange={e => setPhone(e.target.value)}  value={phone} placeholder='Enter Your Phone' className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 py-6 pl-6 mb-4' type="phone" />
        <button onClick={Update} className='w-[80%] bg-blue-600 text-xl font-normal text-white py-6 pl-6 mb-4'>Update User</button>
      </form>
    </div>

  )
}

export default Edit