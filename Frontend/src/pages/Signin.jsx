import React from 'react'
import Rightinup from '../components/shared/Rightinup'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="m-auto w-full md:w-[40vw] p-4 border-r-4 border-grey-500">
        <form className="bg-white p-6 m-9 md:p-11 rounded ">
          <h1 className="text-gravel md:text-4xl font-bold mb-5">Sign in

             <p className=" text-sm text-left text-gray-500">
            Don't have an account? <p href="#" onClick={()=>navigate("/signup")} className="text-[#FFA947] underline inline cursor-pointer">Sign up</p>
          </p>
          </h1>
         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Input
              type="email"
              placeholder="Email"
              className="w-full text-sm px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFA947]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              className="w-full text-sm px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFA947]"
            />
          </div>
          <Button
            variant="outline"
            className="bg-[#FFA947] hover:bg-[#FF8E0C] text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign In
          </Button>
          
        </form>
      </div>
      <div className="bg-gray-200 w-full h-[100vh] md:w-[70vw] flex items-center justify-center p-4 md:p-0">
        <Rightinup />
      </div>
    </div>
  )
}

export default Signin