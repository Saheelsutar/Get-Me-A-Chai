"use client"
import React, { useEffect, useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { useSession, signIn, signOut, } from "next-auth/react"
import { useAuth } from '@/app/context/AuthContext'
import Link from 'next/link'
import { ToastContainer, toast,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {

  const router = useRouter()
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  const{isAuthenticated}=useAuth()
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (session) {
      localStorage.setItem("userSession", JSON.stringify(session));
    }
  }, [session]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchTerm.length < 1) {
        setSearchResults([]); // Clear results if empty
        return;
      }

      try {
        const response = await fetch(`/api/searchUsers?search=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data.users);
      } catch (error) {
        console.error("Error searching users:", error);
      }
    };

    fetchUsers();
  }, [searchTerm]);
  

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
    <ToastContainer/>
    <nav className='bg-slate-950 border border-slate-700 md:p-2 flex-col md:flex-row text-white flex  md:justify-between items-center md:h-16'>
      <div className="logo font-bold flex md:justify-center md:gap-0 md:w-fit w-full justify-between items-center ">
        <div className='flex justify-center items-center'>
        <img className='md:mb-3 mb-4 ' src="/tea.gif " width={44} alt="" />
        <span className='md:text-xl text-lg'>Get Me A Chai!</span>
        </div>
        <button className="md:hidden text-white text-2xl " onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
      </div>
      
      <div className={`md:flex ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:items-center md:justify-center`}>

        <div className='md:flex-none flex items-center gap-2 md:pb-0 pb-3'>
        <div className="relative">
        <input type="search" id="default-search" className="mx-1 block p-3 ps-10 text-sm text-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-br from-purple-600 to-blue-500  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-white w-fit"placeholder="Search Username"
          value={searchTerm}
          onChange={(e) => {
            if ((!isAuthenticated) && (!session)) {
               toast.info('Login first to access search!', {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                      transition: Bounce,
                      });
              return;
            }
            setSearchTerm(e.target.value);
          }}
        />
        {searchResults.length > 0 && (
          <ul className="absolute z-50 bg-gradient-to-br from-purple-600 to-blue-500 text-white mt-2 w-full rounded shadow-md">
            {searchResults.map((user) => (
              <li
                key={user._id}
                onClick={() => router.push(`/${user.username}`)}
                className="p-2 hover:bg-gradient-to-bl cursor-pointer"
              >
                {user.username}
              </li>
            ))}
          </ul>
        )}
      </div>
        <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 m-1.5 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login/SignUp</button>
        </Link>
        </div>
        <div className='relative'>
          {session && <><button onBlur={() => {
            setTimeout(() => {
              setshowdropdown(false)
            }, 100);
          }} onClick={() => setshowdropdown(!showdropdown)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="mx-1 my-2 md:m-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

            <div id="dropdown" className={`left-[175px] absolute z-10 ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <button onClick={() => { router.push("/") }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</button>
                </li>
                <li>
                  <button onClick={() => { router.push("/dashboard") }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</button>
                </li>
                <li >
                  <button onClick={() => { router.push(`${session.user.email.split("@")[0]}`) }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</button>

                </li>

                <li>
                  <Link onClick={() => {
                      localStorage.removeItem("userSession"); // Clear session on logout
                    signOut() }} href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>
          </>
          }



          {!session && <Link href={"/create"}>

            <button className='max-md:hidden  text-white bg-gradient-to-br m-1 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Get Started</button></Link>}


        </div>

      </div>

    </nav>
    </>
  )
}

export default Navbar
