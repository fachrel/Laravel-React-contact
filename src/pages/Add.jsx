import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const navigate = useNavigate();
    const data = {
      name: name,
      email: email,
      phone: phone,
    };
  
    function submitForm(e) {
      e.preventDefault();
      axios.post("http://localhost:8000/users", data).then(navigate("/"));
    }
  return (
    <div>
        <h1 className="pt-32 dark:text-white text-4xl text-center">
            Add Contact
        </h1>
        <div className='grid grid-cols-7 pt-3'>
            <form className='col-span-3 col-start-3'>
                <div className="mb-6">
                    <label HtmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label HtmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact number</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)}type="text" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button onClick={submitForm} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    </div>

  )
}