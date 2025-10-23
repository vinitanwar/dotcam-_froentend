"use client"
import { baseurl } from '@/app/component/urls';
import axios from 'axios';
import React, { useState } from 'react'
import { FaEyeSlash,FaRegEye } from "react-icons/fa6";

const page = ({params:{slug}}) => {
 const [togglePassword,setTogglePassword]=useState(false)
 const [password,setPassword]=useState()



const handelSubmit = async()=>{
    if(password.trim() < 3){
        return;
    }
  const response = await axios.post(`${baseurl}/user/login`,{password,url:slug},{
    withCredentials:true,
  })
  const data = await response.data;
  console.log(data)

}







  return (
    <div className='h-screen text-white relative' > 
     

<div className="fixed w-full h-full bg-gradient-to-br from-black to-gray-900 flex justify-center items-center p-4">
  <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Protected Access</h1>
      <p className="text-gray-600">Please enter password given by admin</p>
    </div>
    
    <div className="space-y-6">
      <div className="flex flex-col relative">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <input 
            type={togglePassword ? "text" : "password"} 
            name="password" 
            className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter your password"
          />
          <div 
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            {!togglePassword ? <FaEyeSlash size={18} /> : <FaRegEye size={18} />}
          </div>
        </div>
      </div>

      <button onClick={handelSubmit} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        Submit
      </button>j
    </div>
    
    <div className="mt-6 text-center">
      <p className="text-xs text-gray-500">
        Contact administrator if you've forgotten your password
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default page
