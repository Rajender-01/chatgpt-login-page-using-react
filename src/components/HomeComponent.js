import React from 'react'
import { Link } from 'react-router-dom';
import chatgpt_logo from "../Assets/chatgpt.png";


const HomeComponent = () => {
 
  return (
    <>
       <section className="w-full h-screen flex flex-col items-center justify-center space-y-4">
        <img className="object-contain w-10" src={chatgpt_logo} alt="logo" />
        <h1 className="text-[17px]">Welcome to ChatGPT</h1>
        <p className="text-[17px] pb-2">Log in with your OpenAI account to continue</p>
        <div className="space-x-4">
            <Link to="/login"><button className="bg-[#10a37ed8] hover:bg-[#10A37F] w-20 h-10 rounded-md text-white">Log in</button></Link>
            <button className="bg-[#10a37ed8] hover:bg-[#10A37F] w-20 h-10 rounded-md text-white">Sign up</button>
        </div>
      </section>
    </>
  )
}

export default HomeComponent
