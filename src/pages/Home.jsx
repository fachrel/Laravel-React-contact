import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([])

    function loadUser() {
        axios.get('http://localhost:8000/users')
        .then((res) => {
            setUsers(res.data.reverse())
        })
    }

    useEffect(() => {
        loadUser()
    }, [])

    function deleteUser(id) {
        axios.delete(`http://localhost:8000/users/${id}`)
        .then(loadUser());
    }
    return (
        <div className="max-h-max bg-white dark:bg-slate-900">
            <h1 className="pt-32 dark:text-white text-4xl text-center">
                Contact List
            </h1>
            <div className="grid grid-cols-7 pb-11 ">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-11 col-span-3 col-start-3">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Contact name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Contact number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((data, index) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                   <td class="px-6 py-4">
                                        {index + 1}
                                    </td>
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {data.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {data.phone}
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <Link
                                            to={`/users/${data.id}`}
                                            className="font-medium text-green-600 dark:text-green-500 hover:underline pr-3"
                                        >
                                            View
                                        </Link>
                                        <Link
                                            to={`/edit-user/${data.id}`}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            onClick={()=>deleteUser(data.id)}
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        >
                                            Delete
                                        </Link>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
