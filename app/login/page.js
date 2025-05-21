'use client'
import { useState, useEffect } from 'react'
import { ValidateLogin } from '@/actions/useractions'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = () => {
  const { setIsAuthenticated, isAuthenticated } = useAuth()
  const [login, setlogin] = useState({ username: "", password: "" })
  const router = useRouter()
  // const notify = () => toast("Successfully Logged In!");


  const handleChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  const validateUser = async (e) => {
    let a = await ValidateLogin(login.username, login.password)
    if (!a) {
      alert('Sign Up First')
       
      router.push('/signUp')

    } else {
      toast.success('Successfully Logged in',{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.push('/')
      setIsAuthenticated(true)

    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ToastContainer />
      <div className=" py-36">
        <form onSubmit={handleSubmit} className="bg-slate-900 max-w-xs mx-auto border-2 border-gray-700 rounded-md py-16 px-5">
          <div className="mb-5 ">
            <label htmlFor="name" className="block mb-3  text-sm font-medium text-white">Your Name</label>
            <input onChange={handleChange} name='username' value={login.username} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-3 text-sm font-medium text-white">Your password</label>
            <input onChange={handleChange} name='password' value={login.password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
          </div>
          <div className="flex justify-center">
            <button onClick={validateUser} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>


          </div>
        </form>
      </div>
    </>
  )
}

export default Page
