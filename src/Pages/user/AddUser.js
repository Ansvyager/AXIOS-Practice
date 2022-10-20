import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()
    const data = {
        name:name,
        email:email,
        phone:phone
    }
   const Submit = (e) => {
    e.preventDefault()
       axios.post("http://localhost:3000/users", data)
       .then(
        navigate("/")
       )
   }
   const handleName = (e) => {
    setName(e.target.value)
   }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    return (
        <div className='w-screen-full justify-center flex flex-col items-center'>
            <h1 className='text-3xl font-semibold text-black mt-4 '>Add User</h1>
            <form className='w-[80%] h-full flex flex-col mt-4 justify-center items-center'>

                <input onChange={handleName} value={name} placeholder='Enter Your Name' className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 py-6 pl-6 mb-4' type="text" />
                <input onChange={handleEmail} value={email} placeholder='Enter Your Email' className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 py-6 pl-6 mb-4' type="email" />
                <input onChange={handlePhone} value={phone} placeholder='Enter Your Phone' className='w-[80%] bg-white/10 text-xl font-normal outline-none border border-zinc-400 py-6 pl-6 mb-4' type="phone" />
                <button onClick={Submit} className='w-[80%] bg-blue-600 text-xl font-normal text-white py-6 pl-6 mb-4'>Add User</button>
            </form>
        </div>
    )
}

export default AddUser