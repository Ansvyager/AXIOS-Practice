import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
function Home() {
    const [users, setUsers] = useState([])
    const loadUser = () => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                setUsers(res.data)
                console.log(res)
            })
    }
    useEffect(() => {
        loadUser()

    }, [])

    const Delete = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(
                loadUser()
            )
    }
    // const { id } = useParams()

    return (
        <div className='w-full h-full flex flex-col px-10 py-8 '>
            <div class="flex flex-col ">
                <h1 className="text-black text-3xl font-semibold text-center mb-12">Home Pages</h1>
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center border border-black">
                                <thead class="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            Email
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            Phone
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((user, index) => {
                                        return (
                                            <tr key={index + 1} className='bg-white border-b'>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {user.name}
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {user.email}
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {user.phone}
                                                </td>
                                                <td class="flex space-x-4 justify-center items-center mt-1  whitespace-nowrap">
                                                    <Link to={`/users/${user.id}`} className='px-6 py-2 text-white bg-black rounded-lg font-semibold'>View</Link>
                                                    <Link to={`/edit-user/${user.id}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold'>Edit</Link>
                                                    <button onClick={() => Delete(user.id)} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home