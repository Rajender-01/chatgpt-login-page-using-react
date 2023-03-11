import React, { useState } from 'react'
import google_logo from "../Assets/google.png";
import microsoft_logo from "../Assets/microsoft.png";

const LoginComponent = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("")

  const InputEvent = (e) => {
    setInput(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const Continue = () => {
    setUser((oldItems)=> {
        return [...oldItems, input]
    });
    setInput("")
    console.log(user);
  }
  return (
    <>
       <section className="w-full h-screen flex flex-col items-center py-20 bg-white ">
        {/* HEADING */}
        <h1 className="text-4xl font-bold p-4">Welcome back</h1>
        {/* FORM */}
        <form onSubmit={handleSubmit} className=" w-72 sm:w-[24rem] h-fit p-6 space-y-5 rounded-xl ">
            {/* INPUT */}
            <input 
            className="border-2 outline-none w-full h-14 rounded-sm p-3 focus-within:border-[#10a37ed8]" 
            type="email" placeholder="Email address"
            name='email' value={input} onChange={InputEvent} required
            />
            {/* BUTTON */}
            <button onClick={Continue} className="w-full h-14 bg-[#10a37ee2] hover:bg-[#10A37F] text-white text-lg">Continue</button>
            {/* SPAN */}
            <p className="text-center"> Don't have an account? <span className="text-blue-700">Sign up</span></p>

            {/* OR */}
            <div className=" relative w-full flex flex-col items-center justify-center">
              <hr className="relative border-[1px] w-full" />
              <p className="p-1 px-6 absolute -top-4 bg-white">or</p>
            </div>
            {/* GOOGLE BUTTON */}
            <button className="max-w-[28rem] w-full h-14 flex items-center justify-start border-2 hover:bg-slate-100">
              <img className="object-contain w-6 mx-3 sm:mx-10" src={google_logo} alt="" />
              <span>Continue with Google</span>
            </button>
            {/* MICROSOFT BUTTON */}
            <button className="max-w-[28rem] w-full h-14 flex items-center justify-start border-2 hover:bg-slate-100">
              <img  className="object-contain w-6 mx-3 sm:mx-10"src={microsoft_logo} alt="" />
              <span>Continue with Microsoft</span>
            </button>
        </form>
      </section>
    </>
  )
}

export default LoginComponent
