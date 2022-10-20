import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
function User() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then((res) => {
                setUser(res.data)
                console.log(res.data)
            })
    }, [])
    const { id } = useParams()

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Link to="/" className='text-black font-semibold text-2xl border-b border-black'>back to home</Link>
            {user && (
                <>
                    
                    <div className='w-[500px] h-[200px] justify-center items-center flex border border-black mt-16 px-6 py-4 '>
                        <div className='w-5/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>Name :</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>Email :</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>Phone :</h2>

                        </div>
                        <div className='w-5/12 flex flex-col space-y-4'>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>{user.name}</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>{user.email}</h2>
                            <h2 className='text-black font-semibold text-2xl border-b border-black'>{user.phone}</h2>

                        </div>
                    </div>

                </>
            )}
            
        </div>
    )
}

export default User