'use client'
import { useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import { createData } from '@/actions/useractions'
import { ToastContainer, toast,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const  [signUp, setsignUp] = useState({username:"",password:"",cpassword:""})


  const router = useRouter()
  // const notify = () => toast("Successfully Logged In!");
  
  
  const handleChange = (e) => {
    setsignUp({...signUp,[e.target.name]:e.target.value})
   
  }
  const createUser = async(e) => {
    if(signUp.username!='' && (signUp.password===signUp.cpassword)){
      await createData(signUp.username,signUp.password)
      alert('Successfully Sign Up')
      router.push('/login')
      
    }else{
      alert('Please fill name and password properly');
    }
  }
   
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  return(
    <>
    <div className=" py-36">
<form onSubmit={handleSubmit} className="bg-slate-800 max-w-xs mx-auto border-2 border-gray-700 rounded-md py-10 px-5">
  <div className='font-extrabold font-serif text-center py-5'>Create A New Account</div>
  <div className="mb-5 ">
    <label htmlFor="name" className="block mb-3 text-sm font-medium text-white dark:text-white">Your Name</label>
    <input onChange={handleChange} name='username'value={signUp.username} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-3 text-sm font-medium text-white0 dark:text-white">Enter password</label>
    <input onChange={handleChange} name='password' value={signUp.password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-3 text-sm font-medium text-white0 dark:text-white">Confirm password</label>
    <input onChange={handleChange} name='cpassword' value={signUp.cpassword} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Confirm Password" required />
  </div>
  <div className="flex justify-center">
  <button onClick={createUser}  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
  
  
  </div>
</form>
</div>
    </>
  )
}

export default Signup
